-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 16, 2020 at 03:47 AM
-- Server version: 5.7.24
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `redrut`
--

-- --------------------------------------------------------

--
-- Table structure for table `comprasxrutas`
--

DROP TABLE IF EXISTS `comprasxrutas`;
CREATE TABLE IF NOT EXISTS `comprasxrutas` (
  `compraxruta_idreporte` int(11) NOT NULL,
  `compraxruta_idmaterial` int(11) NOT NULL,
  `compraxruta_valor` double NOT NULL,
  `compraxruta_peso` double NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comprasxrutas`
--


-- --------------------------------------------------------

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
CREATE TABLE IF NOT EXISTS `empresas` (
  `empresa_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `empresa_desc` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`empresa_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `empresas`
--

INSERT INTO `empresas` (`empresa_id`, `empresa_desc`, `created_at`, `updated_at`) VALUES
(1, 'Corprecam', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `macrorutas`
--

DROP TABLE IF EXISTS `macrorutas`;
CREATE TABLE IF NOT EXISTS `macrorutas` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `macroruta_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `macroruta_estado` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `macroruta_mapa` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `macroruta_empresa_id` int(10) UNSIGNED NOT NULL,
  `macroruta_pais` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `macroruta_ciudad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `macroruta_user_creador` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
CREATE TABLE IF NOT EXISTS `materials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `material_name` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `microrutas`
--

DROP TABLE IF EXISTS `microrutas`;
CREATE TABLE IF NOT EXISTS `microrutas` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `microruta_ruta_id` int(10) UNSIGNED NOT NULL,
  `microruta_direccion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `microruta_latitud` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `microruta_longitud` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `microruta_user_creador` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2018_12_27_171707_create_tdocumentos_table', 1),
(4, '2018_12_27_171839_create_roll_table', 1),
(5, '2019_01_26_204847_create_empresas_table', 1),
(6, '2019_04_29_025916_create_rutas_table', 1),
(7, '2019_05_01_212945_create_macrorutas_table', 1),
(8, '2019_05_01_213916_create_rutas_macrorutas_table', 1),
(9, '2019_05_01_214340_create_microrutas_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
CREATE TABLE IF NOT EXISTS `reportes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reporte_idruta` int(11) NOT NULL,
  `reporte_iduser` int(11) NOT NULL,
  `reporte_cumplimiento` tinyint(1) NOT NULL,
  `reporte_idusercreater` int(11) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `roll`
--

DROP TABLE IF EXISTS `roll`;
CREATE TABLE IF NOT EXISTS `roll` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `roll_codigo` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roll_desc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roll_roll_codigo_unique` (`roll_codigo`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roll`
--

INSERT INTO `roll` (`id`, `roll_codigo`, `roll_desc`, `created_at`, `updated_at`) VALUES
(1, '1', 'Administrador', NULL, NULL),
(2, '2', 'Director', NULL, NULL),
(3, '3', 'Coordinador', NULL, NULL),
(4, '4', 'Transportador', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rutas`
--

DROP TABLE IF EXISTS `rutas`;
CREATE TABLE IF NOT EXISTS `rutas` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ruta_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_lunes_ind` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_martes_ind` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_miercoles_ind` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_jueves_ind` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_viernes_ind` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_sabado_ind` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_domingo_ind` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_empresa_id` int(10) UNSIGNED NOT NULL,
  `ruta_mapa` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_pais` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_ciudad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta_user_creador` int(10) UNSIGNED NOT NULL,
  `ruta_estado` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rutas_macrorutas`
--

DROP TABLE IF EXISTS `rutas_macrorutas`;
CREATE TABLE IF NOT EXISTS `rutas_macrorutas` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `rutas_macroruta_ruta_id` int(10) UNSIGNED NOT NULL,
  `rutas_macroruta_macroruta_id` int(10) UNSIGNED NOT NULL,
  `rutas_macroruta_user_creador` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tdocumentos`
--

DROP TABLE IF EXISTS `tdocumentos`;
CREATE TABLE IF NOT EXISTS `tdocumentos` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tdocumentos_codigo` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tdocumentos_desc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tdocumentos_tdocumentos_codigo_unique` (`tdocumentos_codigo`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tdocumentos`
--

INSERT INTO `tdocumentos` (`id`, `tdocumentos_codigo`, `tdocumentos_desc`, `created_at`, `updated_at`) VALUES
(1, 'CC', 'Cedula', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_tipo` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_imei` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_tdocumento` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_documento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_fecha_nacimiento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_empresa_id` int(10) UNSIGNED NOT NULL,
  `user_pais` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_ciudad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_estado` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_user_creador` int(10) UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_user_empresa_id_foreign` (`user_empresa_id`),
  KEY `users_user_tipo_foreign` (`user_tipo`),
  KEY `users_user_tdocumento_foreign` (`user_tdocumento`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_tipo`, `email`, `password`, `user_imei`, `user_tdocumento`, `user_documento`, `user_fecha_nacimiento`, `user_empresa_id`, `user_pais`, `user_ciudad`, `user_estado`, `user_user_creador`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Alber Barros', '1', 'alberdj.b@gmail.com', '$2y$10$tkVySbq6uKCAXCe.nQnyMOVA6fxXkU8nJW/OUwfM5rz7SUxu4G8za', NULL, '1', '1118841822', '02-06-1992', 1, 'Colombia', 'Riohacha', '1', 1, NULL, NULL, NULL),
(2, 'Carmen Miranda', '2', 'carmenmiranda77@hotmail.com', '$2y$10$0OebcIr27Zvo3pY/cQVwOufX5OhlWjQNtzGQE6SHXU6Pw4mRJvuWS', NULL, 'CC', '12324556', '2019-05-16', 1, 'Colombia', 'Riohacha', '1', 1, NULL, '2019-05-11 23:04:58', '2019-05-11 23:04:58');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
