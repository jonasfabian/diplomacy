package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class ManpowerOfCountry(countryId: Int, countryName: String, manpowerId: Int, manpowerType: Int, manpowerNumber: Double) {
}
object ManpowerOfCountry {
  implicit val encoder = deriveEncoder[ManpowerOfCountry]
  implicit val decoder = deriveDecoder[ManpowerOfCountry]
}
