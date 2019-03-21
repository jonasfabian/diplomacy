package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class ManpowerOfCountry(countryId: Int, countryName: String, manpowerId: Int, manpowerInfantryNumber: Double, manpowerCavalryNumber: Double, manpowerArtilleryNumber: Double) {
}
object ManpowerOfCountry {
  implicit val encoder = deriveEncoder[ManpowerOfCountry]
  implicit val decoder = deriveDecoder[ManpowerOfCountry]
}
