package ch.countrygame

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Currency(currencyId: Int, currencyName: String, currencyCountryId: Int, currencyCountryName: String) {
}
object Currency {
  implicit val encoder = deriveEncoder[Currency]
  implicit val decoder = deriveDecoder[Currency]
}
