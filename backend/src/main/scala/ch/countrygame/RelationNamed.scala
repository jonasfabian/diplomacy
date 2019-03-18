package ch.countrygame

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class RelationNamed(relationId: Int, countryName1: String, countryName2: String, relationType: Int) {
}
object RelationNamed {
  implicit val encoder = deriveEncoder[RelationNamed]
  implicit val decoder = deriveDecoder[RelationNamed]
}

