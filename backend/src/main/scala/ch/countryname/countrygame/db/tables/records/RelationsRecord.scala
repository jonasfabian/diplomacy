/*
 * This file is generated by jOOQ.
 */
package ch.countryname.countrygame.db.tables.records


import ch.countryname.countrygame.db.tables.Relations

import java.lang.Integer

import org.jooq.Field
import org.jooq.Record1
import org.jooq.Record4
import org.jooq.Row4
import org.jooq.impl.UpdatableRecordImpl


class RelationsRecord extends UpdatableRecordImpl[RelationsRecord](Relations.RELATIONS) with Record4[Integer, Integer, Integer, Integer] {

  def setRelationid(value : Integer) : Unit = {
    set(0, value)
  }

  def getRelationid : Integer = {
    val r = get(0)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  def setCountryid1(value : Integer) : Unit = {
    set(1, value)
  }

  def getCountryid1 : Integer = {
    val r = get(1)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  def setCountryid2(value : Integer) : Unit = {
    set(2, value)
  }

  def getCountryid2 : Integer = {
    val r = get(2)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  def setRelationtype(value : Integer) : Unit = {
    set(3, value)
  }

  def getRelationtype : Integer = {
    val r = get(3)
    if (r == null) null else r.asInstanceOf[Integer]
  }

  // -------------------------------------------------------------------------
  // Primary key information
  // -------------------------------------------------------------------------
  override def key : Record1[Integer] = {
    return super.key.asInstanceOf[ Record1[Integer] ]
  }

  // -------------------------------------------------------------------------
  // Record4 type implementation
  // -------------------------------------------------------------------------

  override def fieldsRow : Row4[Integer, Integer, Integer, Integer] = {
    super.fieldsRow.asInstanceOf[ Row4[Integer, Integer, Integer, Integer] ]
  }

  override def valuesRow : Row4[Integer, Integer, Integer, Integer] = {
    super.valuesRow.asInstanceOf[ Row4[Integer, Integer, Integer, Integer] ]
  }
  override def field1 : Field[Integer] = Relations.RELATIONS.RELATIONID
  override def field2 : Field[Integer] = Relations.RELATIONS.COUNTRYID1
  override def field3 : Field[Integer] = Relations.RELATIONS.COUNTRYID2
  override def field4 : Field[Integer] = Relations.RELATIONS.RELATIONTYPE
  override def component1 : Integer = getRelationid
  override def component2 : Integer = getCountryid1
  override def component3 : Integer = getCountryid2
  override def component4 : Integer = getRelationtype
  override def value1 : Integer = getRelationid
  override def value2 : Integer = getCountryid1
  override def value3 : Integer = getCountryid2
  override def value4 : Integer = getRelationtype

  override def value1(value : Integer) : RelationsRecord = {
    setRelationid(value)
    this
  }

  override def value2(value : Integer) : RelationsRecord = {
    setCountryid1(value)
    this
  }

  override def value3(value : Integer) : RelationsRecord = {
    setCountryid2(value)
    this
  }

  override def value4(value : Integer) : RelationsRecord = {
    setRelationtype(value)
    this
  }

  override def values(value1 : Integer, value2 : Integer, value3 : Integer, value4 : Integer) : RelationsRecord = {
    this.value1(value1)
    this.value2(value2)
    this.value3(value3)
    this.value4(value4)
    this
  }

  def this(relationid : Integer, countryid1 : Integer, countryid2 : Integer, relationtype : Integer) = {
    this()

    set(0, relationid)
    set(1, countryid1)
    set(2, countryid2)
    set(3, relationtype)
  }
}
