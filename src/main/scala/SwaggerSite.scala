package ch.countrygame

import akka.http.scaladsl.server.Directives

trait SwaggerSite extends Directives {
  val swaggerSiteRoute = path("swagger") {
    getFromResource("swagger-ui/3.19.4/index.html")
  } ~ getFromResourceDirectory("META-INF/resources/webjars/swagger-ui/3.19.4")
}
