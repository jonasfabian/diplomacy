package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Modifier(modifierId: Int, modifierName: String, modifierValue: Double) {
}

object Modifier {
  implicit val encoder = deriveEncoder[Modifier]
  implicit val decoder = deriveDecoder[Modifier]
}
