package ch.countrygame

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class CountryCurrency(currencyId: Int, CurrencyName: String, countryId: Int, countryName: String) {
}
object CountryCurrency {
  implicit val encoder = deriveEncoder[CountryCurrency]
  implicit val decoder = deriveDecoder[CountryCurrency]
}
