/*
 * This file is generated by jOOQ.
 */
package ch.countryname.countrygame.db.tables.pojos


import java.io.Serializable
import java.lang.Integer
import java.lang.String
import java.lang.StringBuilder


case class Country(
    countryid : Integer
  , countryname : String
  , countrydetails : String
) extends Serializable {

  def this (value : Country) = {
    this(
        value.countryid
      , value.countryname
      , value.countrydetails
    )
  }

  def getCountryid : Integer = {
    this.countryid
  }

  def getCountryname : String = {
    this.countryname
  }

  def getCountrydetails : String = {
    this.countrydetails
  }

  override def toString : String = {
    val sb = new StringBuilder("Country (")

    sb.append(countryid)
    sb.append(", ").append(countryname)
    sb.append(", ").append(countrydetails)

    sb.append(")")
    return sb.toString
  }
}
