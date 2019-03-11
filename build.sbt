name := "CountryGame"

version := "0.1"

scalaVersion := "2.12.8"

libraryDependencies ++= Seq (
  "com.typesafe.akka" % "akka-actor_2.12" % "2.5.18",
  "com.typesafe.akka" % "akka-stream_2.12" % "2.5.18",
  "com.typesafe.akka" % "akka-slf4j_2.12" % "2.5.18",
  "com.github.swagger-akka-http" % "swagger-akka-http_2.12" % "1.0.0",
  "de.heikoseeberger" % "akka-http-circe_2.12" % "1.22.0",
  "org.webjars" % "swagger-ui" % "3.19.4",
  "com.typesafe.akka" % "akka-http_2.12" % "2.5.18",
  "org.typelevel" % "cats-core_2.12" % "1.4.0",
  /*"com.monovore" % "decline_2.12", "0.6.0",*/
  "io.circe" % "circe-core_2.12" % "0.10.1",
  "io.circe" % "circe-generic_2.12" % "0.10.1",
  "io.circe" % "circe-parser_2.12" % "0.10.1",
  "io.circe" % "circe-java8_2.12" % "0.10.1"
)
