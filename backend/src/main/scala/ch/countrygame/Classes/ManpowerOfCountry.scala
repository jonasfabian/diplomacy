package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class ManpowerOfCountry(countryId: Int, countryName: String, manpowerId: Int, manpowerNumber: Int) {
}
object ManpowerOfCountry {
  implicit val encoder = deriveEncoder[ManpowerOfCountry]
  implicit val decoder = deriveDecoder[ManpowerOfCountry]
}
