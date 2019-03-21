/*
 * This file is generated by jOOQ.
 */
package ch.countryname.countrygame.db.tables.pojos


import java.io.Serializable
import java.lang.Double
import java.lang.Integer
import java.lang.StringBuilder


case class Manpower(
    manpowerid : Integer
  , manpowerinfantrynumber : Double
  , manpowercavalrynumber : Double
  , manpowerartillerynumber : Double
) extends Serializable {

  def this (value : Manpower) = {
    this(
        value.manpowerid
      , value.manpowerinfantrynumber
      , value.manpowercavalrynumber
      , value.manpowerartillerynumber
    )
  }

  def getManpowerid : Integer = {
    this.manpowerid
  }

  def getManpowerinfantrynumber : Double = {
    this.manpowerinfantrynumber
  }

  def getManpowercavalrynumber : Double = {
    this.manpowercavalrynumber
  }

  def getManpowerartillerynumber : Double = {
    this.manpowerartillerynumber
  }

  override def toString : String = {
    val sb = new StringBuilder("Manpower (")

    sb.append(manpowerid)
    sb.append(", ").append(manpowerinfantrynumber)
    sb.append(", ").append(manpowercavalrynumber)
    sb.append(", ").append(manpowerartillerynumber)

    sb.append(")")
    return sb.toString
  }
}
