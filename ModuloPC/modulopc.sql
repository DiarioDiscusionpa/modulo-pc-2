-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2024 a las 00:58:06
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `modulopc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulopc`
--

CREATE TABLE `modulopc` (
  `id_pc` int(11) NOT NULL,
  `tipo_pc` varchar(25) NOT NULL,
  `mouse_pc` varchar(25) NOT NULL,
  `estado_pc` varchar(50) NOT NULL,
  `descripcion_pc` varchar(40) NOT NULL,
  `monitor_pc` varchar(30) NOT NULL,
  `teclado_pc` varchar(30) NOT NULL,
  `Ram_pc` varchar(30) NOT NULL,
  `grafica_pc` varchar(30) NOT NULL,
  `tipoRam_pc` varchar(30) NOT NULL,
  `placabase_pc` varchar(30) NOT NULL,
  `adaptadorRed_pc` varchar(30) NOT NULL,
  `procesador_pc` varchar(30) NOT NULL,
  `fuentePoder_pc` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `modulopc`
--
ALTER TABLE `modulopc`
  ADD PRIMARY KEY (`id_pc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `modulopc`
--
ALTER TABLE `modulopc`
  MODIFY `id_pc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
