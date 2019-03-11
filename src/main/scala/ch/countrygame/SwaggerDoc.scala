package ch.countrygame

import com.github.swagger.akka.SwaggerHttpService
import com.github.swagger.akka.model.Info
import io.swagger.models.Scheme
import io.swagger.models.auth.BasicAuthDefinition

class SwaggerDoc extends SwaggerHttpService {
  override val apiClasses = Set(/*classOf[CountryGameRestApi]*/)
  override val info = Info(version = "1.0")
  //  override val host = restApiConfig.swaggerHost
  override val basePath = "/"

  override def schemes: List[Scheme] = List(Scheme.HTTP, Scheme.HTTPS)

  override val apiDocsPath = "api-docs"
  override val securitySchemeDefinitions = Map("basicAuth" -> new BasicAuthDefinition())
  override val unwantedDefinitions = Seq("Function1", "Function1RequestContextFutureRouteResult")
}
