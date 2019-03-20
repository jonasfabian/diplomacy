package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class CountryCurrency(currencyId: Int, currencyName: String, countryId: Int, countryName: String) {
}
object CountryCurrency {
  implicit val encoder = deriveEncoder[CountryCurrency]
  implicit val decoder = deriveDecoder[CountryCurrency]
}
