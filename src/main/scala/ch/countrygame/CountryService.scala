package ch.countrygame

import ch.countryname.countrygame.db.Tables._
import com.typesafe.config.Config
import org.jooq.DSLContext
import org.jooq.impl.DSL

class CountryService(config: Config) {

  private val url = config.getString("labeling-tool-rest.db.url")
  private val user = config.getString("labeling-tool-rest.db.user")
  private val password = config.getString("labeling-tool-rest.db.password")

  def withDslContext[A](f: DSLContext => A): A = {
    val ctx = DSL.using(url, user, password)
    try {f(ctx)}
      catch {case e: Exception =>
        println(e)
        throw new RuntimeException(e)
      }
    finally ctx.close()
  }

  def countries: Array[Country] = withDslContext(dslContext => {
    dslContext.selectFrom(COUNTRY).fetchArray().map(r => Country(r.getCountryid, r.getCountryname, r.getCountrydetails))
  })
}
