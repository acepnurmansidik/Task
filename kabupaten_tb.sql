-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 10, 2021 at 02:25 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `indonesia`
--

-- --------------------------------------------------------

--
-- Table structure for table `kabupaten_tb`
--

CREATE TABLE `kabupaten_tb` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `diresmikan` date DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `Provinsi_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kabupaten_tb`
--

INSERT INTO `kabupaten_tb` (`id`, `nama`, `diresmikan`, `photo`, `Provinsi_Id`) VALUES
(1, 'Garut', '2021-11-10', 'garut.png', 8),
(2, 'Tasikmalaya', '2021-11-07', NULL, 8),
(3, 'Bandung', '2021-11-01', NULL, 8),
(4, 'CIMAHI', '2021-11-01', NULL, 8),
(5, 'Aceh Barat', '2021-11-18', NULL, 6),
(9, 'Aceh Barat Daya', '2021-11-08', NULL, 6),
(10, 'Aceh Besar', '2021-11-16', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kabupaten_tb`
--
ALTER TABLE `kabupaten_tb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kabupaten_tb_ibfk_1` (`Provinsi_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kabupaten_tb`
--
ALTER TABLE `kabupaten_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kabupaten_tb`
--
ALTER TABLE `kabupaten_tb`
  ADD CONSTRAINT `kabupaten_tb_ibfk_1` FOREIGN KEY (`Provinsi_Id`) REFERENCES `provinsi_tb` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
