-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Hoszt: 127.0.0.1
-- Létrehozás ideje: 2016. Dec 21. 21:18
-- Szerver verzió: 5.6.17
-- PHP verzió: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Adatbázis: `mintatanterv`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `subjects`
--

CREATE TABLE IF NOT EXISTS `subjects` (
  `code` varchar(12) NOT NULL,
  `name` varchar(30) NOT NULL,
  `short` text NOT NULL,
  `exam` int(11) NOT NULL,
  `credit` int(11) NOT NULL,
  `term` tinyint(1) NOT NULL,
  `crossterm` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- A tábla adatainak kiíratása `subjects`
--

INSERT INTO `subjects` (`code`, `name`, `short`, `exam`, `credit`, `term`, `crossterm`) VALUES
('BMETE90AX00', 'Matematika A1a', 'Matematika A1a', 1, 6, 1, 0),
('BMETE90AX02', 'Matematika A2a', 'Matematika A2a', 1, 6, 2, 0),
('BMETE90AX10', 'Matematika A3a', 'Matematika A3a', 0, 4, 3, 0),
('BMETE15AX02', 'Fizika A2', 'Fizika A2', 1, 2, 2, 0),
('BMEGEMTAMT1', 'Anyagismeret', 'Anyagismeret', 1, 5, 1, 0),
('BMEGEPTAMT0', 'Polimertechnika', 'Polimertechnika', 1, 4, 3, 0),
('BMEGEMMAGM1', 'Statika', 'Statika', 0, 3, 1, 0),
('BMEGEMMAGM2', 'SzilÃ¡rdsÃ¡gtan', 'SzilÃ¡rdsÃ¡gtan', 1, 5, 2, 0),
('BMEGEMMAGM3', 'Dinamika', 'Dinamika', 1, 5, 3, 0),
('BMEGEMMAGM4', 'RezgÃ©stan', 'RezgÃ©stan', 0, 3, 4, 0),
('BMEGEGEAGM1', 'GÃ©pszerkesztÃ©s alapjai', 'GÃ©pszerkesztÃ©s alapjai', 0, 4, 2, 0),
('BMEGEGEA3CD', 'CAD alapjai', 'CAD alapjai', 0, 4, 2, 0),
('BMEGEGEAM1G', 'GÃ©pelemek I.', 'GÃ©pelemek I.', 0, 3, 3, 0),
('BMEGEGEAMG2', 'GÃ©pelemek II.', 'GÃ©pelemek II.', 1, 4, 4, 0),
('BMEGEFOAMF1', 'Finommechanikai Ã©pÃ­tÅ‘elemek', 'Finommechanikai Ã©pÃ­tÅ‘elemek', 0, 3, 5, 0),
('BMEGEGTAM01', 'GÃ©pgyÃ¡rtÃ¡stechnolÃ³gia', 'GÃ©pgyÃ¡rtÃ¡stechnolÃ³gia', 1, 3, 4, 0),
('BMEGEENATMH', 'HÅ‘tan', 'HÅ‘tan', 1, 3, 5, 0),
('BMEGEÃTAM21', 'ÃramlÃ¡stan I.', 'ÃramlÃ¡stan I.', 0, 3, 5, 0),
('BMEGEVÃ‰AM01', 'KÃ¶rny.vÃ©d.elj.Ã©s ber.', 'KÃ¶rny.vÃ©d.elj.Ã©s ber.', 0, 2, 2, 0),
('BMEGEMIAM01', 'Informatika I.', 'Informatika I.', 1, 3, 1, 0),
('BMEGERIAM1P', 'ProgramtervezÃ©s I.', 'ProgramtervezÃ©s I.', 1, 3, 2, 0),
('BMEGEMIAM02', 'ProgramtervezÃ©s II.', 'ProgramtervezÃ©s II.', 0, 2, 3, 0),
('BMEGERIAM4I', 'Informatika II.', 'Informatika II.', 0, 3, 4, 0),
('BMEGEFOAMT1', 'MegjelenÃ­tÃ©si technikÃ¡k', 'MegjelenÃ­tÃ©si technikÃ¡k', 0, 2, 1, 0),
('BMEVIAUA007', 'Elektrotechnika alapjai', 'Elektrotechnika alapjai', 0, 3, 3, 0),
('BMEVIAUA008', 'Elektromechanika', 'Elektromechanika', 1, 4, 5, 0),
('BMEGEFOAMG3', 'Optika Ã©s lÃ¡tÃ³rendszerek', 'Optika Ã©s lÃ¡tÃ³rendszerek', 1, 3, 3, 0),
('BMEGEMIAM03', 'Rendszertechnika', 'Rendszertechnika', 0, 2, 4, 0),
('BMEGEMIAMG1', 'MÃ©rÃ©stechnika', 'MÃ©rÃ©stechnika', 0, 3, 4, 0),
('BMEGEMIAM04', 'IrÃ¡nyÃ­tÃ¡stechnika', 'IrÃ¡nyÃ­tÃ¡stechnika', 1, 4, 5, 0),
('BMEVIAUA010', 'DigitÃ¡lis elektronika', 'DigitÃ¡lis elektronika', 1, 4, 4, 0),
('BMEVIAUA009', 'AnalÃ³g elektronika', 'AnalÃ³g elektronika', 0, 3, 6, 0),
('BMEGEFOAMM0', 'Mechatronika alapjai', 'Mechatronika alapjai', 0, 3, 1, 0),
('BMEGEFOAMA2', 'GÃ©pÃ©szeti automatizÃ¡lÃ¡s', 'GÃ©pÃ©szeti automatizÃ¡lÃ¡s', 0, 5, 4, 0),
('BMEGEFOAMM1', 'Mechatronika I.', 'Mechatronika I.', 1, 3, 6, 0),
('BMEGEFOAMM2', 'Mechatronika II.', 'Mechatronika II.', 0, 3, 7, 0),
('BMEGEFOAMS1', 'Szenzortechnika', 'Szenzortechnika', 1, 3, 5, 0),
('BMEGEFOAMA1', 'AktuÃ¡tortechnika', 'AktuÃ¡tortechnika', 1, 3, 6, 0),
('BMEGERIAM6S', 'SzÃ¡mÃ­tÃ³gÃ©pes irÃ¡nyÃ­tÃ¡s', 'SzÃ¡mÃ­tÃ³gÃ©pes irÃ¡nyÃ­tÃ¡s', 0, 2, 6, 0),
('BMEGEFOAMO1', 'Optomechatronika I.', 'Optomechatronika I.', 0, 2, 4, 0),
('BMEGERIAM6J', 'JelfeldolgozÃ¡s', 'JelfeldolgozÃ¡s', 0, 2, 7, 0),
('BMEGEFOAMV1', 'MikrovezÃ©rlÅ‘k alkalmazÃ¡sa', 'MikrovezÃ©rlÅ‘k alkalmazÃ¡sa', 0, 3, 5, 0),
('BMEGT30A001', 'Mikro- Ã©s makroÃ¶konÃ³mia', 'Mikro- Ã©s makroÃ¶konÃ³mia', 1, 4, 1, 0),
('BMEGT20A001', 'Men. Ã©s vÃ¡ll.gazdasÃ¡gtan.', 'Men. Ã©s vÃ¡ll.gazdasÃ¡gtan.', 0, 4, 2, 0),
('BMEGT55A001', 'Ãœzleti jog', 'Ãœzleti jog', 0, 2, 1, 0),
('BMEGEVGAG14', 'MÅ±szaki Ã©s gazd.adatok elemz', 'MÅ±szaki Ã©s gazd.adatok elemz', 0, 3, 3, 0),
('BMEGT20AT02', 'MinÅ‘sÃ©gbiztosÃ­tÃ¡s (TQM)', 'MinÅ‘sÃ©gbiztosÃ­tÃ¡s (TQM)', 0, 3, 6, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
