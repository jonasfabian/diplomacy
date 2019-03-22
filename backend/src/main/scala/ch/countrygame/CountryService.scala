package ch.countrygame

import ch.countrygame.Classes._
import ch.countryname.countrygame.db.Tables._
import ch.countryname.countrygame.db.tables.records.{CountryRecord, RelationsRecord}
import com.typesafe.config.Config
import org.jooq.impl.DSL
import org.jooq.DSLContext

class CountryService(config: Config) {

  private val url = config.getString("labeling-tool-rest.db.url")
  private val user = config.getString("labeling-tool-rest.db.user")
  private val password = config.getString("labeling-tool-rest.db.password")

  def withDslContext[A](f: DSLContext => A): A = {
    val ctx = DSL.using(url, user, password)
    try {
      f(ctx)
    }
    catch {
      case e: Exception =>
        println(e)
        throw new RuntimeException(e)
    }
    finally ctx.close()
  }

  def countries: Array[Country] = withDslContext(dslContext => {
    dslContext.select(
      COUNTRY.asterisk(),
      DSL.sum(MANPOWER.MANPOWERNUMBER).as("totalManpower")
    )
      .from(MANPOWER)
      .join(COUNTRY)
      .on(MANPOWER.COUNTRYID.eq(COUNTRY.COUNTRYID))
      .groupBy(COUNTRY.COUNTRYID)
      .fetchArray()
      .map(r => Country(r.get(COUNTRY.COUNTRYID).toInt, r.get(COUNTRY.COUNTRYNAME), r.get(COUNTRY.COUNTRYDETAILS), r.get(COUNTRY.COUNTRYCODE), r.get(COUNTRY.CURRENCYID).toInt, r.get(COUNTRY.MODIFIERID).toInt, Some(java.lang.Double.valueOf(r.get("totalManpower", classOf[java.lang.Double])))))
  })

  def stats: Array[Array[Double]] = withDslContext(dslContext => {
    dslContext.select(
      MANPOWER.asterisk(),
      DSL.avg(MANPOWER.MANPOWERNUMBER).as("averageManpower"),
      DSL.min(MANPOWER.MANPOWERNUMBER).as("minimumManpower"),
      DSL.max(MANPOWER.MANPOWERNUMBER).as("maximumManpower"),
    )
      .from(MANPOWER)
      .fetchArray()
      .map(r => Array(r.get("averageManpower", classOf[java.lang.Double]).toDouble, r.get("minimumManpower", classOf[java.lang.Double]).toDouble, r.get("maximumManpower", classOf[java.lang.Double]).toDouble))
  })

  def relations: Array[Relation] = withDslContext(dslContext => {
    dslContext.selectFrom(RELATIONS).fetchArray().map(r => Relation(r.getRelationid, r.getCountryid1, r.getCountryid2, r.getRelationtype))
  })

  def currencies: Array[Currency] = withDslContext(dslContext => {
    dslContext.selectFrom(CURRENCY).fetchArray().map(r => Currency(r.getCurrencyid, r.getCurrencyname))
  })

  def manpower: Array[Manpower] = withDslContext(dslContext => {
    dslContext.selectFrom(MANPOWER).fetchArray().map(r => Manpower(r.getManpowerid, r.getManpowertype.toInt, r.getManpowernumber, r.getCountryid))
  })

  def modifier: Array[Modifier] = withDslContext(dslContext => {
    dslContext.selectFrom(MODIFIER).fetchArray().map(r => Modifier(r.getModifierid, r.getModifiername, r.getModifiervalue))
  })

  def modifierById(modifierId: Integer): Modifier = withDslContext(dslContext => {
    dslContext.selectFrom(MODIFIER).where(MODIFIER.MODIFIERID.eq(modifierId)).fetchOne().map(r => Modifier(r.get(MODIFIER.MODIFIERID).toInt, r.get(MODIFIER.MODIFIERNAME), r.get(MODIFIER.MODIFIERVALUE).toDouble))
  })

  def manpowerById(countryId: Integer): Array[Manpower] = withDslContext(dslContext => {
    dslContext.selectFrom(MANPOWER).where(MANPOWER.COUNTRYID.eq(countryId)).fetchArray().map(r => Manpower(r.get(MANPOWER.MANPOWERID).toInt, r.get(MANPOWER.MANPOWERTYPE).toInt, r.get(MANPOWER.MANPOWERNUMBER).toDouble, r.get(MANPOWER.COUNTRYID).toInt))
  })

  def relationsForCountry(countryId: Int): Array[RelationNamed] = withDslContext(dslContext => {
    val country1 = COUNTRY.as("country1")
    val country2 = COUNTRY.as("country2")
    dslContext.select().from(RELATIONS
      .join(country1)
      .on(country1.COUNTRYID.eq(RELATIONS.COUNTRYID1))
      .join(country2)
      .on(country2.COUNTRYID.eq(RELATIONS.COUNTRYID2)))
      .where(RELATIONS.COUNTRYID1.eq(countryId).or(RELATIONS.COUNTRYID2.eq(countryId)))
      .fetchArray().map(r => RelationNamed(r.get(RELATIONS.RELATIONID).toInt, r.get(country1.COUNTRYNAME), r.get(country2.COUNTRYNAME), r.get(RELATIONS.RELATIONTYPE).toInt))
  })

  def modifiersForCountry(countryId: Int): Array[ModifierForCountry] = withDslContext(dslContext => {
    val country = COUNTRY.as("country")
    val manpower = MANPOWER.as("manpower")
    val modifier = MODIFIER.as("modifier")
    dslContext.select().from(country
      .join(manpower)
      .on(manpower.COUNTRYID.eq(country.COUNTRYID))
      .join(modifier)
      .on(country.MODIFIERID.eq(modifier.MODIFIERID)))
      .where(country.COUNTRYID.eq(countryId))
      .fetchArray().map(r => ModifierForCountry(r.get(country.COUNTRYID).toInt, r.get(country.COUNTRYNAME), r.get(manpower.MANPOWERID).toInt, r.get(MANPOWER.MANPOWERTYPE).toInt, r.get(MANPOWER.MANPOWERNUMBER).toDouble, r.get(modifier.MODIFIERID).toInt, r.get(modifier.MODIFIERNAME).toString, r.get(modifier.MODIFIERVALUE).toDouble))
  })

  def currencyForCountry(countryId: Int): Array[CountryCurrency] = withDslContext(dslContext => {
    val country = COUNTRY.as("country")
    val currency = CURRENCY.as("currency")
    dslContext.select().from(currency
      .join(country)
      .on(country.CURRENCYID.eq(currency.CURRENCYID)))
      .where(currency.CURRENCYID.eq(countryId))
      .fetchArray().map(r => CountryCurrency(r.get(currency.CURRENCYID).toInt, r.get(currency.CURRENCYNAME), r.get(country.COUNTRYID).toInt, r.get(country.COUNTRYNAME)))
  })

  def manpowerOfCountry(countryId: Int): Array[ManpowerOfCountry] = withDslContext(dslContext => {
    val country = COUNTRY.as("country")
    val manpower = MANPOWER.as("manpower")
    dslContext.select().from(manpower
      .join(country)
      .on(manpower.COUNTRYID.eq(country.COUNTRYID)))
      .where(country.COUNTRYID.eq(countryId))
      .fetchArray().map(r => ManpowerOfCountry(r.get(country.COUNTRYID).toInt, r.get(country.COUNTRYNAME), r.get(manpower.MANPOWERID).toInt, r.get(MANPOWER.MANPOWERTYPE).toInt, r.get(MANPOWER.MANPOWERNUMBER).toDouble))
  })

  def newCountry(country: Country): Unit = withDslContext(dslContext => {
    val rec = countryToRecord(country)
    dslContext.executeInsert(rec)
    ()
  })

  def newRelation(relation: Relation): Unit = withDslContext(dslContext => {
    val rec = relationToRecord(relation)
    dslContext.executeInsert(rec)
    ()
  })

  def updateCountry(country: Country): Unit = withDslContext(dslContext => {
    dslContext.update(COUNTRY)
      .set(COUNTRY.COUNTRYNAME, country.name)
      .set(COUNTRY.COUNTRYDETAILS, country.details)
      .set(COUNTRY.COUNTRYCODE, country.countryCode)
      .set(COUNTRY.CURRENCYID, Integer.valueOf(country.currencyId))
      .set(COUNTRY.MODIFIERID, Integer.valueOf(country.modifierId))
      .where(COUNTRY.COUNTRYID.eq(country.id))
      .execute()
    ()
  })

  def increaseManpower(country: Country): Unit = withDslContext(dslContext => {
    val mpArray = this.manpowerById(country.id)
    mpArray.foreach(manP => {
      dslContext.update(MANPOWER)
        .set(MANPOWER.MANPOWERNUMBER, java.lang.Double.valueOf(manP.manpowerNumber * 1.1))
        .where(MANPOWER.MANPOWERID.eq(manP.manpowerId))
        .execute()
      ()
    })
  })

  def updateManpower(attackedCountry: Country): Unit = withDslContext(dslContext => {
    val mpArray = this.manpowerById(attackedCountry.id)
    val mv = this.modifierById(attackedCountry.modifierId)
    mpArray.foreach(manP => {
      val attackValue = manP.manpowerNumber * mv.modifierValue
      val newManpower = manP.manpowerNumber - attackValue
      // update table
      dslContext.update(MANPOWER)
        .set(MANPOWER.MANPOWERNUMBER, java.lang.Double.valueOf(newManpower))
        .where(MANPOWER.MANPOWERID.eq(manP.manpowerId))
        .execute()
      ()
    })
  })

  def deleteCountry(countryId: Int): Boolean = withDslContext(dslContext => {
    dslContext.delete(COUNTRY)
      .where(COUNTRY.COUNTRYID.eq(countryId))
      .execute() == 1
  })

  def countryToRecord(country: Country): CountryRecord = {
    val rec = new CountryRecord()
    rec.setCountryname(country.name)
    rec.setCountrydetails(country.details)
    rec.setCountrycode(country.countryCode)
    rec.setCurrencyid(country.currencyId)
    rec.setModifierid(country.modifierId)
    rec
  }

  def relationToRecord(relation: Relation): RelationsRecord = {
    val rec = new RelationsRecord()
    rec.setCountryid1(relation.countryId1)
    rec.setCountryid2(relation.countryId2)
    rec.setRelationtype(relation.relationType)
    rec
  }
}
