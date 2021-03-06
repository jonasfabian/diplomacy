/*
 * This file is generated by jOOQ.
 */
package ch.countryname.countrygame.db.tables


import ch.countryname.countrygame.db.CountryGame
import ch.countryname.countrygame.db.Indexes
import ch.countryname.countrygame.db.Keys
import ch.countryname.countrygame.db.tables.records.CountryRecord

import java.lang.Class
import java.lang.Integer
import java.lang.String
import java.util.Arrays
import java.util.List

import org.jooq.Field
import org.jooq.ForeignKey
import org.jooq.Identity
import org.jooq.Index
import org.jooq.Name
import org.jooq.Record
import org.jooq.Schema
import org.jooq.Table
import org.jooq.TableField
import org.jooq.UniqueKey
import org.jooq.impl.DSL
import org.jooq.impl.Internal
import org.jooq.impl.TableImpl

import scala.Array


object Country {

  val COUNTRY = new Country
}

class Country(
  alias : Name,
  child : Table[_ <: Record],
  path : ForeignKey[_ <: Record, CountryRecord],
  aliased : Table[CountryRecord],
  parameters : Array[ Field[_] ]
)
extends TableImpl[CountryRecord](
  alias,
  CountryGame.COUNTRY_GAME,
  child,
  path,
  aliased,
  parameters,
  DSL.comment("")
)
{

  override def getRecordType : Class[CountryRecord] = {
    classOf[CountryRecord]
  }

  val COUNTRYID : TableField[CountryRecord, Integer] = createField("countryId", org.jooq.impl.SQLDataType.INTEGER.nullable(false).identity(true), "")

  val COUNTRYNAME : TableField[CountryRecord, String] = createField("countryName", org.jooq.impl.SQLDataType.VARCHAR(45).nullable(false), "")

  val COUNTRYDETAILS : TableField[CountryRecord, String] = createField("countryDetails", org.jooq.impl.SQLDataType.VARCHAR(45), "")

  val COUNTRYCODE : TableField[CountryRecord, String] = createField("countryCode", org.jooq.impl.SQLDataType.VARCHAR(2).nullable(false), "")

  val CURRENCYID : TableField[CountryRecord, Integer] = createField("currencyId", org.jooq.impl.SQLDataType.INTEGER.nullable(false), "")

  val MODIFIERID : TableField[CountryRecord, Integer] = createField("modifierId", org.jooq.impl.SQLDataType.INTEGER.nullable(false), "")

  def this() = {
    this(DSL.name("country"), null, null, null, null)
  }

  def this(alias : String) = {
    this(DSL.name(alias), null, null, ch.countryname.countrygame.db.tables.Country.COUNTRY, null)
  }

  def this(alias : Name) = {
    this(alias, null, null, ch.countryname.countrygame.db.tables.Country.COUNTRY, null)
  }

  private def this(alias : Name, aliased : Table[CountryRecord]) = {
    this(alias, null, null, aliased, null)
  }

  def this(child : Table[_ <: Record], key : ForeignKey[_ <: Record, CountryRecord]) = {
    this(Internal.createPathAlias(child, key), child, key, ch.countryname.countrygame.db.tables.Country.COUNTRY, null)
  }

  override def getSchema : Schema = CountryGame.COUNTRY_GAME

  override def getIndexes : List[ Index ] = {
    return Arrays.asList[ Index ](Indexes.COUNTRY_CURRENCYID, Indexes.COUNTRY_MODIFIERID, Indexes.COUNTRY_PRIMARY)
  }

  override def getIdentity : Identity[CountryRecord, Integer] = {
    Keys.IDENTITY_COUNTRY
  }

  override def getPrimaryKey : UniqueKey[CountryRecord] = {
    Keys.KEY_COUNTRY_PRIMARY
  }

  override def getKeys : List[ UniqueKey[CountryRecord] ] = {
    return Arrays.asList[ UniqueKey[CountryRecord] ](Keys.KEY_COUNTRY_PRIMARY)
  }

  override def getReferences : List[ ForeignKey[CountryRecord, _] ] = {
    return Arrays.asList[ ForeignKey[CountryRecord, _] ](Keys.CURRENCYID, Keys.MODIFIERID)
  }

  def currency : Currency = {
    return new Currency(this, Keys.CURRENCYID)
  }

  def modifier : Modifier = {
    return new Modifier(this, Keys.MODIFIERID)
  }

  override def as(alias : String) : Country = {
    new Country(DSL.name(alias), this)
  }

  override def as(alias : Name) : Country = {
    new Country(alias, this)
  }

  override def rename(name : String) : Country = {
    new Country(DSL.name(name), null)
  }

  override def rename(name : Name) : Country = {
    new Country(name, null)
  }
}
