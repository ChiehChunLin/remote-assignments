-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2024 at 08:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) UNSIGNED NOT NULL,
  `author` varchar(30) NOT NULL,
  `title` mediumtext NOT NULL,
  `content` mediumtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `author`, `title`, `content`, `timestamp`) VALUES
(1, 'ABCabc123', 'Ava Max', 'Amanda Ava Koci (born Amanda Koçi; February 16, 1994), known professionally as Ava Max, is an American singer and songwriter. She signed with Atlantic Records in 2016, through which she released her breakthrough single, \"Sweet but Psycho\", in August 2018. The song peaked at number one in 22 countries and reached number two and number 10 on the Australian ARIA Charts and US Billboard Hot 100, respectively. ', '2024-04-19 06:28:00'),
(2, 'ABCabc123', 'Ed Sheeran', '            Edward Christopher Sheeran MBE (born 17 February 1991) is an English singer-songwriter. Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play No. 5 Collaborations Project. He signed with Asylum Records the same year.       ', '2024-04-19 06:29:04'),
(3, 'ABCabc123', 'Taylor Swift', '              Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. A subject of widespread public interest, she has influenced the music industry and popular culture through her artistry, songwriting, and entrepreneurship. She is an advocate of artists\' rights and women\'s empowerment.     ', '2024-04-19 06:30:08'),
(4, 'ABCabc123', 'Coldplay', '                  Coldplay are a British rock band formed in London in 1997. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion and manager Phil Harvey. They initially met at University College London, calling themselves Big Fat Noises and changing to Starfish, before settling on the current name. ', '2024-04-19 06:41:05'),
(5, 'ABCabc123', 'Britney Spears', '                  Britney Jean Spears (born December 2, 1981) is an American singer. Often referred to as the \"Princess of Pop\", she is credited with influencing the revival of teen pop during the late 1990s and early 2000s. Spears has sold over 150 million records worldwide, making her one of the world\'s best-selling music artists. She has earned numerous awards and accolades, including a Grammy Award, 15 Guinness world records, six MTV Video Music Awards, seven Billboard Music Awards (including the Millennium Award), the inaugural Radio Disney Icon Award, and a star on the Hollywood Walk of Fame. Her heavily choreographed videos earned her the Michael Jackson Video Vanguard Award. ', '2024-04-19 06:45:02');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `authority` int(2) NOT NULL DEFAULT 1,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `authority`, `timestamp`) VALUES
(1, 'AAA', '111111@fake.com', '$2b$10$LwQhLqQgbUrXY.IuzX28w.aIc93J3.EZkDZ/Ne6hz80fFOXFiucGm', 1, '2024-04-18 07:10:25'),
(2, 'BBB', '222222@fake.com', '$2b$10$sbpNOyCwVuVSM/blK1p6le8a8OuD.U1r.pdX/WROBUDuy9byjOqgy', 1, '2024-04-18 07:11:38'),
(3, 'CCC', '333333@fake.com', '$2b$10$reo6zF9M7FjaXeZkow1owu9t.0hQvORPx9tmR.DGTNCR3K.sxQfjW', 1, '2024-04-18 07:12:20'),
(4, 'ABCabc123', 'ABCabc123@fake.com', '$2b$10$lIj7eX6viSfPZSP4vLsR0.VjhNLwluri9Lm0X95q/c3FG5Jts1D.2', 1, '2024-04-18 13:30:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
