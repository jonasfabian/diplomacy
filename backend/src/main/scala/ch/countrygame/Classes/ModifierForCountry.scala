package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class ModifierForCountry(countryId: Int, countryName: String, manpowerId: Int, manpowerNumber: Int, modifierId: Int, modifierName: String, modifierValue: Double) {
}
object ModifierForCountry {
  implicit val encoder = deriveEncoder[ModifierForCountry]
  implicit val decoder = deriveDecoder[ModifierForCountry]
}
