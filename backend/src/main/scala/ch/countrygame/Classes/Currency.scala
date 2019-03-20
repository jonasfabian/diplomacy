package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Currency(currencyId: Int, currencyName: String) {
}
object Currency {
  implicit val encoder = deriveEncoder[Currency]
  implicit val decoder = deriveDecoder[Currency]
}
