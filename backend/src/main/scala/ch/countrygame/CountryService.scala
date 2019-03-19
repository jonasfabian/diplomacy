package ch.countrygame

import java.sql.Timestamp

import ch.countryname.countrygame.db.Tables._
import ch.countryname.countrygame.db.tables.daos.CountryDao
import ch.countryname.countrygame.db.tables.records.{CountryRecord, RelationsRecord}
import com.typesafe.config.Config
import org.jooq.impl.DSL
import org.jooq.{Condition, DSLContext}

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
    dslContext.selectFrom(COUNTRY).fetchArray().map(r => Country(r.getCountryid, r.getCountryname, r.getCountrydetails, r.getCountrycode, r.getCurrencyid))
  })

  def relations: Array[Relation] = withDslContext(dslContext => {
    dslContext.selectFrom(RELATIONS).fetchArray().map(r => Relation(r.getRelationid, r.getCountryid1, r.getCountryid2, r.getRelationtype))
  })

  def currencies: Array[Currency] = withDslContext(dslContext => {
    dslContext.selectFrom(CURRENCY).fetchArray().map(r => Currency(r.getCurrencyid, r.getCurrencyname))
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

  def currencyForCountry(countryId: Int): Array[CountryCurrency] = withDslContext(dslContext => {
    val country = COUNTRY.as("country")
    val currency = CURRENCY.as("currency")
    dslContext.select().from(currency
      .join(country)
      .on(country.CURRENCYID.eq(currency.CURRENCYID)))
      .where(currency.CURRENCYID.eq(countryId))
      .fetchArray().map(r => CountryCurrency(r.get(currency.CURRENCYID).toInt, r.get(currency.CURRENCYNAME), r.get(country.COUNTRYID).toInt, r.get(country.COUNTRYNAME)))
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
      .where(COUNTRY.COUNTRYID.eq(country.id))
      .execute()
    ()
  })

  def countryToRecord(country: Country): CountryRecord = {
    val rec = new CountryRecord()
    rec.setCountryname(country.name)
    rec.setCountrydetails(country.details)
    rec.setCountrycode(country.countryCode)
    rec.setCurrencyid(country.currencyId)
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
