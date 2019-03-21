package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Manpower(manpowerId: Int, manpowerInfantryNumber: Double, manpowerCavalryNumber: Double, manpowerArtilleryNumber: Double) {
}
object Manpower {
  implicit val encoder = deriveEncoder[Manpower]
  implicit val decoder = deriveDecoder[Manpower]
}
