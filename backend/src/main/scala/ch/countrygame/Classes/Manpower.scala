package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Manpower(manpowerId: Int, manpowerNumber: Int) {
}
object Manpower {
  implicit val encoder = deriveEncoder[Manpower]
  implicit val decoder = deriveDecoder[Manpower]
}
