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
    dslContext.selectFrom(COUNTRY).fetchArray().map(r => Country(r.getCountryid, r.getCountryname, r.getCountrydetails, r.getCountrycode))
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
