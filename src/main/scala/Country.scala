package ch.countrygame

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Country(name: String, details: String) {
}
object Country {
  implicit val encoder = deriveEncoder[Country]
  implicit val decoder = deriveDecoder[Country]
}
