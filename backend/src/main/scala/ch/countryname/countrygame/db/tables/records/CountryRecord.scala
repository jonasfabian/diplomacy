/*
 * This file is generated by jOOQ.
 */
package ch.countryname.countrygame.db.tables.records


import ch.countryname.countrygame.db.tables.Country

import java.lang.Integer
import java.lang.String

import org.jooq.Field
import org.jooq.Record1
import org.jooq.Record7
import org.jooq.Row7
import org.jooq.impl.UpdatableRecordImpl


class CountryRecord extends UpdatableRecordImpl[CountryRecord](Country.COUNTRY) with Record7[Integer, String, String, String, Integer, Integer, Integer] {

  def setCountryid(value : Integer) : Unit = {
    set(0, value)
  }

  def getCountryid : Integer = {
    val r = get(0)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  def setCountryname(value : String) : Unit = {
    set(1, value)
  }

  def getCountryname : String = {
    val r = get(1)
    if (r == null) null else r.asInstanceOf[String]
  }

  def setCountrydetails(value : String) : Unit = {
    set(2, value)
  }

  def getCountrydetails : String = {
    val r = get(2)
    if (r == null) null else r.asInstanceOf[String]
  }

  def setCountrycode(value : String) : Unit = {
    set(3, value)
  }

  def getCountrycode : String = {
    val r = get(3)
    if (r == null) null else r.asInstanceOf[String]
  }

  def setCurrencyid(value : Integer) : Unit = {
    set(4, value)
  }

  def getCurrencyid : Integer = {
    val r = get(4)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  def setManpowerid(value : Integer) : Unit = {
    set(5, value)
  }

  def getManpowerid : Integer = {
    val r = get(5)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  def setModifierid(value : Integer) : Unit = {
    set(6, value)
  }

  def getModifierid : Integer = {
    val r = get(6)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  // -------------------------------------------------------------------------
  // Primary key information
  // -------------------------------------------------------------------------
  override def key : Record1[Integer] = {
    return super.key.asInstanceOf[ Record1[Integer] ]
  }

  // -------------------------------------------------------------------------
  // Record7 type implementation
  // -------------------------------------------------------------------------

  override def fieldsRow : Row7[Integer, String, String, String, Integer, Integer, Integer] = {
    super.fieldsRow.asInstanceOf[ Row7[Integer, String, String, String, Integer, Integer, Integer] ]
  }

  override def valuesRow : Row7[Integer, String, String, String, Integer, Integer, Integer] = {
    super.valuesRow.asInstanceOf[ Row7[Integer, String, String, String, Integer, Integer, Integer] ]
  }
  override def field1 : Field[Integer] = Country.COUNTRY.COUNTRYID
  override def field2 : Field[String] = Country.COUNTRY.COUNTRYNAME
  override def field3 : Field[String] = Country.COUNTRY.COUNTRYDETAILS
  override def field4 : Field[String] = Country.COUNTRY.COUNTRYCODE
  override def field5 : Field[Integer] = Country.COUNTRY.CURRENCYID
  override def field6 : Field[Integer] = Country.COUNTRY.MANPOWERID
  override def field7 : Field[Integer] = Country.COUNTRY.MODIFIERID
  override def component1 : Integer = getCountryid
  override def component2 : String = getCountryname
  override def component3 : String = getCountrydetails
  override def component4 : String = getCountrycode
  override def component5 : Integer = getCurrencyid
  override def component6 : Integer = getManpowerid
  override def component7 : Integer = getModifierid
  override def value1 : Integer = getCountryid
  override def value2 : String = getCountryname
  override def value3 : String = getCountrydetails
  override def value4 : String = getCountrycode
  override def value5 : Integer = getCurrencyid
  override def value6 : Integer = getManpowerid
  override def value7 : Integer = getModifierid

  override def value1(value : Integer) : CountryRecord = {
    setCountryid(value)
    this
  }

  override def value2(value : String) : CountryRecord = {
    setCountryname(value)
    this
  }

  override def value3(value : String) : CountryRecord = {
    setCountrydetails(value)
    this
  }

  override def value4(value : String) : CountryRecord = {
    setCountrycode(value)
    this
  }

  override def value5(value : Integer) : CountryRecord = {
    setCurrencyid(value)
    this
  }

  override def value6(value : Integer) : CountryRecord = {
    setManpowerid(value)
    this
  }

  override def value7(value : Integer) : CountryRecord = {
    setModifierid(value)
    this
  }

  override def values(value1 : Integer, value2 : String, value3 : String, value4 : String, value5 : Integer, value6 : Integer, value7 : Integer) : CountryRecord = {
    this.value1(value1)
    this.value2(value2)
    this.value3(value3)
    this.value4(value4)
    this.value5(value5)
    this.value6(value6)
    this.value7(value7)
    this
  }

  def this(countryid : Integer, countryname : String, countrydetails : String, countrycode : String, currencyid : Integer, manpowerid : Integer, modifierid : Integer) = {
    this()

    set(0, countryid)
    set(1, countryname)
    set(2, countrydetails)
    set(3, countrycode)
    set(4, currencyid)
    set(5, manpowerid)
    set(6, modifierid)
  }
}
