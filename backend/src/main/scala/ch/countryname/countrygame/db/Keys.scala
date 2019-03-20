/*
 * This file is generated by jOOQ.
 */
package ch.countryname.countrygame.db


import ch.countryname.countrygame.db.tables.Country
import ch.countryname.countrygame.db.tables.Currency
import ch.countryname.countrygame.db.tables.FlywaySchemaHistory
import ch.countryname.countrygame.db.tables.Manpower
import ch.countryname.countrygame.db.tables.Modifier
import ch.countryname.countrygame.db.tables.Relations
import ch.countryname.countrygame.db.tables.records.CountryRecord
import ch.countryname.countrygame.db.tables.records.CurrencyRecord
import ch.countryname.countrygame.db.tables.records.FlywaySchemaHistoryRecord
import ch.countryname.countrygame.db.tables.records.ManpowerRecord
import ch.countryname.countrygame.db.tables.records.ModifierRecord
import ch.countryname.countrygame.db.tables.records.RelationsRecord

import java.lang.Integer

import org.jooq.ForeignKey
import org.jooq.Identity
import org.jooq.UniqueKey
import org.jooq.impl.Internal


object Keys {

  // -------------------------------------------------------------------------
  // IDENTITY definitions
  // -------------------------------------------------------------------------

  val IDENTITY_COUNTRY = Identities0.IDENTITY_COUNTRY
  val IDENTITY_CURRENCY = Identities0.IDENTITY_CURRENCY
  val IDENTITY_MANPOWER = Identities0.IDENTITY_MANPOWER
  val IDENTITY_MODIFIER = Identities0.IDENTITY_MODIFIER
  val IDENTITY_RELATIONS = Identities0.IDENTITY_RELATIONS

  // -------------------------------------------------------------------------
  // UNIQUE and PRIMARY KEY definitions
  // -------------------------------------------------------------------------

  val KEY_COUNTRY_PRIMARY = UniqueKeys0.KEY_COUNTRY_PRIMARY
  val KEY_CURRENCY_PRIMARY = UniqueKeys0.KEY_CURRENCY_PRIMARY
  val KEY_FLYWAY_SCHEMA_HISTORY_PRIMARY = UniqueKeys0.KEY_FLYWAY_SCHEMA_HISTORY_PRIMARY
  val KEY_MANPOWER_PRIMARY = UniqueKeys0.KEY_MANPOWER_PRIMARY
  val KEY_MODIFIER_PRIMARY = UniqueKeys0.KEY_MODIFIER_PRIMARY
  val KEY_RELATIONS_PRIMARY = UniqueKeys0.KEY_RELATIONS_PRIMARY

  // -------------------------------------------------------------------------
  // FOREIGN KEY definitions
  // -------------------------------------------------------------------------

  val CURRENCYID = ForeignKeys0.CURRENCYID
  val MANPOWERID = ForeignKeys0.MANPOWERID
  val MODIFIERID = ForeignKeys0.MODIFIERID
  val COUNTRYID1 = ForeignKeys0.COUNTRYID1
  val COUNTRYID2 = ForeignKeys0.COUNTRYID2

  // -------------------------------------------------------------------------
  // [#1459] distribute members to avoid static initialisers > 64kb
  // -------------------------------------------------------------------------

  private object Identities0 {
    val IDENTITY_COUNTRY : Identity[CountryRecord, Integer] = Internal.createIdentity(Country.COUNTRY, Country.COUNTRY.COUNTRYID)
    val IDENTITY_CURRENCY : Identity[CurrencyRecord, Integer] = Internal.createIdentity(Currency.CURRENCY, Currency.CURRENCY.CURRENCYID)
    val IDENTITY_MANPOWER : Identity[ManpowerRecord, Integer] = Internal.createIdentity(Manpower.MANPOWER, Manpower.MANPOWER.MANPOWERID)
    val IDENTITY_MODIFIER : Identity[ModifierRecord, Integer] = Internal.createIdentity(Modifier.MODIFIER, Modifier.MODIFIER.MODIFIERID)
    val IDENTITY_RELATIONS : Identity[RelationsRecord, Integer] = Internal.createIdentity(Relations.RELATIONS, Relations.RELATIONS.RELATIONID)
  }

  private object UniqueKeys0 {
    val KEY_COUNTRY_PRIMARY : UniqueKey[CountryRecord] = Internal.createUniqueKey(Country.COUNTRY, "KEY_country_PRIMARY", Country.COUNTRY.COUNTRYID)
    val KEY_CURRENCY_PRIMARY : UniqueKey[CurrencyRecord] = Internal.createUniqueKey(Currency.CURRENCY, "KEY_currency_PRIMARY", Currency.CURRENCY.CURRENCYID)
    val KEY_FLYWAY_SCHEMA_HISTORY_PRIMARY : UniqueKey[FlywaySchemaHistoryRecord] = Internal.createUniqueKey(FlywaySchemaHistory.FLYWAY_SCHEMA_HISTORY, "KEY_flyway_schema_history_PRIMARY", FlywaySchemaHistory.FLYWAY_SCHEMA_HISTORY.INSTALLED_RANK)
    val KEY_MANPOWER_PRIMARY : UniqueKey[ManpowerRecord] = Internal.createUniqueKey(Manpower.MANPOWER, "KEY_manpower_PRIMARY", Manpower.MANPOWER.MANPOWERID)
    val KEY_MODIFIER_PRIMARY : UniqueKey[ModifierRecord] = Internal.createUniqueKey(Modifier.MODIFIER, "KEY_modifier_PRIMARY", Modifier.MODIFIER.MODIFIERID)
    val KEY_RELATIONS_PRIMARY : UniqueKey[RelationsRecord] = Internal.createUniqueKey(Relations.RELATIONS, "KEY_relations_PRIMARY", Relations.RELATIONS.RELATIONID)
  }

  private object ForeignKeys0 {
    val CURRENCYID : ForeignKey[CountryRecord, CurrencyRecord] = Internal.createForeignKey(ch.countryname.countrygame.db.Keys.KEY_CURRENCY_PRIMARY, Country.COUNTRY, "currencyId", Country.COUNTRY.CURRENCYID)
    val MANPOWERID : ForeignKey[CountryRecord, ManpowerRecord] = Internal.createForeignKey(ch.countryname.countrygame.db.Keys.KEY_MANPOWER_PRIMARY, Country.COUNTRY, "manpowerId", Country.COUNTRY.MANPOWERID)
    val MODIFIERID : ForeignKey[CountryRecord, ModifierRecord] = Internal.createForeignKey(ch.countryname.countrygame.db.Keys.KEY_MODIFIER_PRIMARY, Country.COUNTRY, "modifierId", Country.COUNTRY.MODIFIERID)
    val COUNTRYID1 : ForeignKey[RelationsRecord, CountryRecord] = Internal.createForeignKey(ch.countryname.countrygame.db.Keys.KEY_COUNTRY_PRIMARY, Relations.RELATIONS, "countryId1", Relations.RELATIONS.COUNTRYID1)
    val COUNTRYID2 : ForeignKey[RelationsRecord, CountryRecord] = Internal.createForeignKey(ch.countryname.countrygame.db.Keys.KEY_COUNTRY_PRIMARY, Relations.RELATIONS, "countryId2", Relations.RELATIONS.COUNTRYID2)
  }
}
