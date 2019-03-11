package ch.countrygame

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity}
import akka.http.scaladsl.server.Directives
import akka.http.scaladsl.server.Directives._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl._
import akka.util.ByteString
import de.heikoseeberger.akkahttpcirce.ErrorAccumulatingCirceSupport
import io.swagger.annotations.{ApiOperation, ApiResponse, ApiResponses}
import javax.ws.rs.Path

import scala.io.StdIn
import scala.util.Random

object WebServer extends App with CorsSupport with SwaggerSite with ErrorAccumulatingCirceSupport {

  override def main(args: Array[String]) {

    implicit val system = ActorSystem()
    implicit val materializer = ActorMaterializer()
    val swaggerDoc = new SwaggerDoc()
    // needed for the future flatMap/onComplete in the end
    implicit val executionContext = system.dispatcher

    // streams are re-usable so we can define it here
    // and use it for every request
    val numbers = Source.fromIterator(() =>
      Iterator.continually(Random.nextInt()))

    val route =
      path("random") {
        get {
          complete(
            HttpEntity(
              ContentTypes.`text/plain(UTF-8)`,
              // transform each number to a chunk of bytes
              numbers.map(n => ByteString(s"$n\n"))
            )
          )
        }
      }
    val countryGameRestApi = new CountryGameRestApi
    val routes = corsHandler(countryGameRestApi.route) ~ swaggerDoc.routes ~ swaggerSiteRoute

    val bindingFuture = Http().bindAndHandle(routes ~ swaggerDoc.routes ~ swaggerSiteRoute, "localhost", 8080)
    println(s"Server online at http://localhost:8080/\nPress RETURN to stop...")
    StdIn.readLine() // let it run until user presses return
    bindingFuture
      .flatMap(_.unbind()) // trigger unbinding from the port
      .onComplete(_ => system.terminate()) // and shutdown when done
  }
}

class CountryGameRestApi extends Directives with ErrorAccumulatingCirceSupport {

  val country = new Country("Switzerland", "A small country in western europe")
  val route = pathPrefix("api") {
    pathPrefix("country") {
      getCountry
    }
  }

  @ApiOperation(value = "getCountry", httpMethod = "GET", notes = "returns a country")
  @ApiResponses(Array(new ApiResponse(code = 200, response = classOf[Country], message = "OK")))
  @Path("country")
  def getCountry = path("getCountry") {
    get {
      complete(country)
    }
  }
}
