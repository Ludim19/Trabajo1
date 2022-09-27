-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2022 a las 06:35:21
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concesionario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carros`
--

CREATE TABLE `carros` (
  `id` int NOT NULL,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `carros`
--

INSERT INTO `carros` (`id`, `marca`, `modelo`, `color`, `imagen`) VALUES
(1, 'BMW', 'M8 competition', 'Negro', 'm8.jpg'),
(2, 'Mercedes Benz', 'A200', 'Blanco', 'a2.jpg'),
(4, 'Chevrolet', 'Camaro', 'Amarillo', 'camaro.jpg'),
(5, 'Chevrolet', 'Corvette c8', 'Rojo', '1664057923028_corvette.jpg'),
(6, 'Mazda', 'mazda 6', 'negro', '1664066808936_mazda6.jpg'),
(7, 'BMW', 'M4 competition', 'verde', '1664076428198_m4.jpg'),
(10, 'Toyota', 'TXL', 'blanco', '1664244710329_txl.jpg'),
(11, 'Ford', 'Mustang 2022', 'azul', '1664244710329_mustang.jpg'),
(12, 'Audi', 'R8', 'Rojo', '1664244710329_r8.jpg'),
(13, 'Subaru', 'WRX', 'Azul', '1664244710329_wrx.jpg'),
(14, 'Mini', 'Mini Cooper', 'Amarillo', '1664244710329_mcoper.jpg'),
(15, 'Honda', 'Odyssey', 'Gris', '1664252499370_odysey.jpg'),
(16, 'Renault', 'Twingo', 'Naranja', '1664252945141_twingo1.jpg'),
(17, 'GMC', 'Yukon', 'Negro', '1664252945141_yukon.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carros`
--
ALTER TABLE `carros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carros`
--
ALTER TABLE `carros`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
