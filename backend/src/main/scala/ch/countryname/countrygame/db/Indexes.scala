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

import org.jooq.Index
import org.jooq.OrderField
import org.jooq.impl.Internal


object Indexes {

  // -------------------------------------------------------------------------
  // INDEX definitions
  // -------------------------------------------------------------------------

  val COUNTRY_CURRENCYID = Indexes0.COUNTRY_CURRENCYID
  val COUNTRY_MANPOWERID = Indexes0.COUNTRY_MANPOWERID
  val COUNTRY_MODIFIERID = Indexes0.COUNTRY_MODIFIERID
  val COUNTRY_PRIMARY = Indexes0.COUNTRY_PRIMARY
  val CURRENCY_PRIMARY = Indexes0.CURRENCY_PRIMARY
  val FLYWAY_SCHEMA_HISTORY_FLYWAY_SCHEMA_HISTORY_S_IDX = Indexes0.FLYWAY_SCHEMA_HISTORY_FLYWAY_SCHEMA_HISTORY_S_IDX
  val FLYWAY_SCHEMA_HISTORY_PRIMARY = Indexes0.FLYWAY_SCHEMA_HISTORY_PRIMARY
  val MANPOWER_PRIMARY = Indexes0.MANPOWER_PRIMARY
  val MODIFIER_PRIMARY = Indexes0.MODIFIER_PRIMARY
  val RELATIONS_COUNTRY1_UNIQUE = Indexes0.RELATIONS_COUNTRY1_UNIQUE
  val RELATIONS_COUNTRYID2 = Indexes0.RELATIONS_COUNTRYID2
  val RELATIONS_PRIMARY = Indexes0.RELATIONS_PRIMARY
  val RELATIONS_RELATIONTYPEID_IDX = Indexes0.RELATIONS_RELATIONTYPEID_IDX

  // -------------------------------------------------------------------------
  // [#1459] distribute members to avoid static initialisers > 64kb
  // -------------------------------------------------------------------------

  private object Indexes0 {
    val COUNTRY_CURRENCYID : Index = Internal.createIndex("currencyId", Country.COUNTRY, Array[OrderField [_] ](Country.COUNTRY.CURRENCYID), false)
    val COUNTRY_MANPOWERID : Index = Internal.createIndex("manpowerId", Country.COUNTRY, Array[OrderField [_] ](Country.COUNTRY.MANPOWERID), false)
    val COUNTRY_MODIFIERID : Index = Internal.createIndex("modifierId", Country.COUNTRY, Array[OrderField [_] ](Country.COUNTRY.MODIFIERID), false)
    val COUNTRY_PRIMARY : Index = Internal.createIndex("PRIMARY", Country.COUNTRY, Array[OrderField [_] ](Country.COUNTRY.COUNTRYID), true)
    val CURRENCY_PRIMARY : Index = Internal.createIndex("PRIMARY", Currency.CURRENCY, Array[OrderField [_] ](Currency.CURRENCY.CURRENCYID), true)
    val FLYWAY_SCHEMA_HISTORY_FLYWAY_SCHEMA_HISTORY_S_IDX : Index = Internal.createIndex("flyway_schema_history_s_idx", FlywaySchemaHistory.FLYWAY_SCHEMA_HISTORY, Array[OrderField [_] ](FlywaySchemaHistory.FLYWAY_SCHEMA_HISTORY.SUCCESS), false)
    val FLYWAY_SCHEMA_HISTORY_PRIMARY : Index = Internal.createIndex("PRIMARY", FlywaySchemaHistory.FLYWAY_SCHEMA_HISTORY, Array[OrderField [_] ](FlywaySchemaHistory.FLYWAY_SCHEMA_HISTORY.INSTALLED_RANK), true)
    val MANPOWER_PRIMARY : Index = Internal.createIndex("PRIMARY", Manpower.MANPOWER, Array[OrderField [_] ](Manpower.MANPOWER.MANPOWERID), true)
    val MODIFIER_PRIMARY : Index = Internal.createIndex("PRIMARY", Modifier.MODIFIER, Array[OrderField [_] ](Modifier.MODIFIER.MODIFIERID), true)
    val RELATIONS_COUNTRY1_UNIQUE : Index = Internal.createIndex("country1_UNIQUE", Relations.RELATIONS, Array[OrderField [_] ](Relations.RELATIONS.COUNTRYID1), false)
    val RELATIONS_COUNTRYID2 : Index = Internal.createIndex("countryId2", Relations.RELATIONS, Array[OrderField [_] ](Relations.RELATIONS.COUNTRYID2), false)
    val RELATIONS_PRIMARY : Index = Internal.createIndex("PRIMARY", Relations.RELATIONS, Array[OrderField [_] ](Relations.RELATIONS.RELATIONID), true)
    val RELATIONS_RELATIONTYPEID_IDX : Index = Internal.createIndex("relationTypeId_idx", Relations.RELATIONS, Array[OrderField [_] ](Relations.RELATIONS.RELATIONTYPE), false)
  }
}
