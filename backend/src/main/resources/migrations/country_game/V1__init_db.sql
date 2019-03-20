SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE =
    'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE TABLE IF NOT EXISTS `country`
(
  `countryId`      INT         NOT NULL AUTO_INCREMENT,
  `countryName`    VARCHAR(45) NOT NULL,
  `countryDetails` VARCHAR(45) NULL,
  `countryCode`    VARCHAR(2)  NOT NULL,
  `currencyId`     INT         NOT NULL,
  `manpowerId`     INT         NOT NULL,
  `modifierId`     INT         NOT NULL,
  PRIMARY KEY (`countryId`),
  CONSTRAINT `currencyId`
    FOREIGN KEY (`currencyId`)
      REFERENCES `currency` (`currencyId`)
      ON DELETE CASCADE,
  CONSTRAINT `manpowerId`
    FOREIGN KEY (`manpowerId`)
      REFERENCES `manpower` (`manpowerId`)
      ON DELETE CASCADE,
  CONSTRAINT `modifierId`
    FOREIGN KEY (`modifierId`)
      REFERENCES `modifier` (`modifierId`)
      ON DELETE CASCADE
)
  ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `currency`
(
  `currencyId`   INT         NOT NULL AUTO_INCREMENT,
  `currencyName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`currencyId`)
)
  ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `modifier`
(
  `modifierId`        INT         NOT NULL AUTO_INCREMENT,
  `modifierName`      VARCHAR(45) NOT NULL,
  `modifierValue` DOUBLE      NOT NULL,
  PRIMARY KEY (`modifierId`)
)
  ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `manpower`
(
  `manpowerId`     INT NOT NULL AUTO_INCREMENT,
  `manpowerNumber` INT,
  PRIMARY KEY (`manpowerId`)
)
  ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `relations`
(
  `relationId`   INT NOT NULL AUTO_INCREMENT,
  `countryId1`   INT NOT NULL,
  `countryId2`   INT NOT NULL,
  `relationType` INT NOT NULL,
  PRIMARY KEY (`relationId`),
  INDEX `country1_UNIQUE` (`countryId1` ASC),
  INDEX `relationTypeId_idx` (`relationType` ASC),
  CONSTRAINT `countryId1`
    FOREIGN KEY (`countryId1`)
      REFERENCES `country` (`countryId`)
      ON DELETE CASCADE,
  CONSTRAINT `countryId2`
    FOREIGN KEY (`countryId2`)
      REFERENCES `country` (`countryId`)
      ON DELETE CASCADE
)
  ENGINE = InnoDB;


SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;

INSERT INTO `modifier` (modifierName, modifierValue)
VALUES ('Morale', 1.0);
INSERT INTO `modifier` (modifierName, modifierValue)
VALUES ('+5% Morale', 1.05);
INSERT INTO `modifier` (modifierName, modifierValue)
VALUES ('+50% Morale', 1.5);
INSERT INTO `modifier` (modifierName, modifierValue)
VALUES ('+100% Morale', 2);
INSERT INTO `modifier` (modifierName, modifierValue)
VALUES ('+200% Morale', 4);
INSERT INTO `modifier` (modifierName, modifierValue)
VALUES ('+1000% Morale', 10);

INSERT INTO `currency` (currencyName)
VALUES ('Franken');
INSERT INTO `currency` (currencyName)
VALUES ('Euro');
INSERT INTO `currency` (currencyName)
VALUES ('Dollar');
INSERT INTO `currency` (currencyName)
VALUES ('Yen');

INSERT INTO `manpower` (manpowerNumber)
VALUES (1000);
INSERT INTO `manpower` (manpowerNumber)
VALUES (1000);
INSERT INTO `manpower` (manpowerNumber)
VALUES (1000);
INSERT INTO `manpower` (manpowerNumber)
VALUES (1000);
INSERT INTO `manpower` (manpowerNumber)
VALUES (1000);

INSERT INTO `country` (countryName, countryDetails, countryCode, currencyId, manpowerId, modifierId)
VALUES ('Switzerland', 'Cheese', 'CH', 1, 1, 1);
INSERT INTO `country` (countryName, countryDetails, countryCode, currencyId, manpowerId, modifierId)
VALUES ('Germany', 'Bratwurst', 'DE', 2, 2, 1);
INSERT INTO `country` (countryName, countryDetails, countryCode, currencyId, manpowerId, modifierId)
VALUES ('France', 'Baguette', 'FR', 2, 3, 1);
INSERT INTO `country` (countryName, countryDetails, countryCode, currencyId, manpowerId, modifierId)
VALUES ('USA', 'Guns', 'US', 3, 4, 1);
INSERT INTO `country` (countryName, countryDetails, countryCode, currencyId, manpowerId, modifierId)
VALUES ('Italy', 'Pizza', 'IT', 2, 5, 1);

