package ch.countrygame.Classes

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}

case class Relation(id: Int, countryId1: Int, countryId2: Int, relationType: Int) {
}
object Relation {
  implicit val encoder = deriveEncoder[Relation]
  implicit val decoder = deriveDecoder[Relation]
}
