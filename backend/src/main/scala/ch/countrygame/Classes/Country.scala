package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Country(id: Int, name: String, details: String, countryCode: String, currencyId: Int, modifierId: Int, manpowerNumber: Option[Double] = None) {
}
object Country {
  implicit val encoder = deriveEncoder[Country]
  implicit val decoder = deriveDecoder[Country]
}
