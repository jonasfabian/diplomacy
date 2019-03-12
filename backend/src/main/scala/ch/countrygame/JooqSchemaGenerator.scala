package ch.countrygame

import org.flywaydb.core.Flyway
import org.jooq.codegen.GenerationTool
import org.jooq.meta.jaxb._

/**
  * JooqSchemaGenerator util
  */
object JooqSchemaGenerator extends App {

  generate()

  def generate(): Unit = {
    migrate()
    generate("country_game", "ch.countryname.countrygame.db", "src/main/scala")
  }

  def migrate(): Unit = {
    val flyway = new Flyway()
    flyway.setDataSource("jdbc:mysql://localhost", "root", "root")
    flyway.setSchemas("country_game")
    flyway.setLocations("migrations/country_game")
    flyway.clean()
    flyway.migrate()
    ()
  }

  /**
    * based on [[https://www.jooq.org/doc/3.10/manual/code-generation/codegen-programmatic/]]
    */
  def generate(schema: String, packageName: String, directory: String): Unit = {
    val configuration = new Configuration()
      .withJdbc(new Jdbc()
        .withDriver("org.mariadb.jdbc.Driver")
        .withUrl(s"jdbc:mysql://localhost/$schema")
        .withUser("root")
        .withPassword("root"))
      .withGenerator(new Generator()
        .withName("org.jooq.codegen.ScalaGenerator")
        .withGenerate(new Generate()
          .withDaos(true)
          .withImmutablePojos(true)
          .withGeneratedAnnotation(false)
          .withComments(false)
          .withJavadoc(false))
        .withDatabase(new Database()
          .withName("org.jooq.meta.mariadb.MariaDBDatabase")
          .withInputSchema(schema))
        .withTarget(new Target()
          .withPackageName(packageName)
          .withDirectory(directory)))

    GenerationTool.generate(configuration)
  }
}
