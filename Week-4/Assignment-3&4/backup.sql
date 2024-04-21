-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2024 at 08:04 PM
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
(2, 'ABCabc123', 'Ed Sheeran', 'Edward Christopher Sheeran MBE (born 17 February 1991) is an English singer-songwriter. Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play No. 5 Collaborations Project. He signed with Asylum Records the same year.       ', '2024-04-19 06:29:04'),
(3, 'ABCabc123', 'Taylor Swift', 'Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. A subject of widespread public interest, she has influenced the music industry and popular culture through her artistry, songwriting, and entrepreneurship. She is an advocate of artists\' rights and women\'s empowerment.     ', '2024-04-19 06:30:08'),
(4, 'ABCabc123', 'Coldplay', 'Coldplay are a British rock band formed in London in 1997. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion and manager Phil Harvey. They initially met at University College London, calling themselves Big Fat Noises and changing to Starfish, before settling on the current name. ', '2024-04-19 06:41:05'),
(5, 'ABCabc123', 'Britney Spears', 'Britney Jean Spears (born December 2, 1981) is an American singer. Often referred to as the \"Princess of Pop\", she is credited with influencing the revival of teen pop during the late 1990s and early 2000s. Spears has sold over 150 million records worldwide, making her one of the world\'s best-selling music artists. She has earned numerous awards and accolades, including a Grammy Award, 15 Guinness world records, six MTV Video Music Awards, seven Billboard Music Awards (including the Millennium Award), the inaugural Radio Disney Icon Award, and a star on the Hollywood Walk of Fame. Her heavily choreographed videos earned her the Michael Jackson Video Vanguard Award. ', '2024-04-19 06:45:02'),
(6, 'ABCabc123', 'Miley Cyrus', 'Miley Ray Cyrus (born Destiny Hope Cyrus, November 23, 1992) is an American singer, songwriter, and actress. Regarded as a pop icon, she has been recognized for her evolving artistry, style, and hailed as the \"Teen Queen\" of the 2000s era. She is also cited as one of the few examples of a child star with a successful music career as an adult. As the daughter of country singer Billy Ray Cyrus, she emerged as a teen idol at age 13 as the lead character in the Disney Channel television series Hannah Montana (2006–2011). As Hannah Montana, she achieved success on the Billboard charts with two number-one soundtracks and a US top-ten single. ', '2024-04-19 08:53:30'),
(7, 'ABCabc123', 'Billie Eilish', 'Billie Eilish Pirate Baird O\'Connell (born December 18, 2001) is an American singer and songwriter. She first gained public attention in 2015 with her debut single \"Ocean Eyes\", written and produced by her brother Finneas O\'Connell, with whom she collaborates on music and live shows. In 2017, she released her debut extended play (EP), Don\'t Smile at Me. Commercially successful, it reached the top 15 of record charts in numerous countries, including the US, UK, Canada, and Australia. ', '2024-04-19 08:57:45'),
(8, 'ABCabc123', 'Shakira', 'Shakira Isabel Mebarak Ripoll (born 2 February 1977), known mononymously as Shakira, is a Colombian singer and songwriter. Born and raised in Barranquilla, she has been referred to as the \"Queen of Latin Music\" and has been praised for her musical versatility. She made her recording debut with Sony Music Colombia at the age of 13. Following the commercial failure of her first two albums, Magia (1991) and Peligro (1993), she rose to prominence in Hispanic countries with her next albums, Pies Descalzos (1995) and Dónde Están los Ladrones? (1998). She entered the English-language market with her fifth album, Laundry Service (2001), which sold over 13 million copies worldwide. ', '2024-04-19 09:49:52'),
(9, 'ABCabc123', 'Beyoncé', 'Beyoncé Giselle Knowles-Carter (born September 4, 1981) is an American singer, songwriter and businesswoman. Dubbed as \"Queen Bey\" and a prominent cultural figure of the 21st century, she has been recognized for her artistry and performances, with Rolling Stone naming her one of the greatest vocalists of all time. ', '2024-04-19 09:53:34'),
(10, 'ABCabc123', 'Adele', 'Adele Laurie Blue Adkins MBE (born 5 May 1988), known mononymously as Adele, is an English singer-songwriter. She is known for her mezzo-soprano vocals and sentimental songwriting. Adele has received numerous accolades including 16 Grammy Awards, 12 Brit Awards (including three for British Album of the Year), an Academy Award, a Primetime Emmy Award, and a Golden Globe Award. ', '2024-04-19 09:56:54'),
(11, 'ABCabc123', 'Lady Gaga', 'Stefani Joanne Angelina Germanotta (born March 28, 1986), known professionally as Lady Gaga, is an American singer-songwriter and actress. She is known for reinventing her image and showcasing versatility in entertainment. Gaga started performing as a teenager by singing at open mic nights and acting in school plays. She studied Collaborative Arts Project 21 before leaving to pursue a music career. After a contract cancellation by Def Jam Recordings, Gaga worked as a songwriter for Sony/ATV Music Publishing. In 2007, she signed with Interscope Records and KonLive Distribution. Her breakthrough came the following year with her debut studio album, The Fame, and its singles \"Just Dance\" and \"Poker Face\". The album was later reissued along with The Fame Monster (2009), which yielded the successful singles \"Bad Romance\", \"Alejandro\" and \"Telephone\". ', '2024-04-19 10:02:34'),
(12, 'ABCabc123', 'Bruno Mars', 'Peter Gene Hernandez (born October 8, 1985), known professionally as Bruno Mars, is an American singer-songwriter. He is known for his stage performances, retro showmanship, and for performing in a wide range of musical styles, including pop, R&B, funk, soul, reggae, disco, and rock. Mars is accompanied by his band, the Hooligans, who play a variety of instruments, such as electric guitar, bass, piano, keyboards, drums, and horns, and also serve as backup singers and disco dancers. In 2021, he collaborated with Anderson .Paak, as the American musical superduo Silk Sonic. ', '2024-04-19 10:03:19'),
(13, 'ABCabc123', 'Katy Perry', 'Katheryn Elizabeth Hudson (born October 25, 1984), known professionally as Katy Perry, is an American singer, songwriter, and television personality. She is known for her influence on modern pop music and her camp style, being dubbed the \"Queen of Camp\" by Vogue and Rolling Stone. At 16, Perry released a gospel record titled Katy Hudson (2001) under Red Hill Records, which was commercially unsuccessful. She moved to Los Angeles at 17 to venture into secular music, and later adopted the stage name \"Katy Perry\" from her mother\'s maiden name. She recorded an album while signed to Columbia Records, but was dropped before signing to Capitol Records. ', '2024-04-19 10:03:36'),
(14, 'ABCabc123', 'Avril Lavigne', 'Avril Ramona Lavigne (born September 27, 1984) is a Canadian singer-songwriter. She is considered a key musician in the development of pop-punk music, as she paved the way for female-driven, punk-influenced pop music in the early 2000s. Her accolades include eight Grammy Award nominations, among others. ', '2024-04-19 10:03:58'),
(15, 'ABCabc123', 'Westlife', 'Westlife are an Irish pop group formed in Dublin in 1998. The group consists of members Shane Filan, Mark Feehily, Kian Egan, and Nicky Byrne. Brian McFadden was a member before leaving in 2004. The group disbanded in 2012 after 14 years and later reunited in 2018. ', '2024-04-19 17:05:12'),
(16, 'ABCabc123', 'Linkin Park', 'Linkin Park is an American rock band from Agoura Hills, California. The band\'s lineup consists of vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn, and drummer Rob Bourdon, with vocalist Chester Bennington also part of the band until his death in 2017. Categorized as alternative rock, Linkin Park\'s earlier music spanned a fusion of heavy metal and hip hop, while their later music features more electronica and pop elements. ', '2024-04-21 17:08:00'),
(17, 'ABCabc123', 'Maroon 5', 'Maroon 5 is an American pop rock band from Los Angeles, California. It consists of lead vocalist Adam Levine, rhythm guitarist and keyboardist Jesse Carmichael, lead guitarist James Valentine, drummer Matt Flynn, keyboardist PJ Morton and multi-instrumentalist and bassist Sam Farrar. Original members Levine, Carmichael, bassist Mickey Madden, and drummer Ryan Dusick first came together as Kara\'s Flowers in 1994, while they were in high school. ', '2024-04-21 17:09:48'),
(18, 'ABCabc123', '(G)I-dle', '(G)I-dle is a South Korean girl group formed by Cube Entertainment in 2018. The group consists of five members: Miyeon, Minnie, Soyeon, Yuqi, and Shuhua. The group was originally a sextet, until Soojin left the group on August 14, 2021. (G)I-dle debuted on May 2, 2018, with the single \"Latata\" from their first extended play (EP) I Am. They debuted in Japan under U-Cube with Latata on July 31, 2019. Since their debut, they have been considered one of the most successful South Korean girl groups outside of the \"big four\" record labels. ', '2024-04-21 17:10:41'),
(19, 'ABCabc123', 'The Weeknd', 'Abel Makkonen Tesfaye (born February 16, 1990), known professionally as the Weeknd, is a Canadian singer and songwriter. He is known for his unconventional music production, artistic reinventions, and signature use of the falsetto register. ', '2024-04-21 17:13:46'),
(20, 'ABCabc123', 'Blackpink', 'Blackpink (or as BLɅϽKPIИK) is a South Korean girl group formed by YG Entertainment and consisting of members Jisoo, Jennie, Rosé, and Lisa. Cited as the \"biggest girl group in the world\", they are considered the most successful Korean girl group internationally and a leading force in the Korean Wave. They are stylistically associated with the \"girl crush\" concept in K-pop—exploring themes of self-confidence and female empowerment. ', '2024-04-21 17:28:33'),
(21, 'ABCabc123', 'Rihanna', 'Robyn Rihanna Fenty (born February 20, 1988) is a Barbadian singer, businesswoman, actress, and songwriter. She is widely regarded as one of the most prominent recording artists of the 21st century. Rihanna signed with Def Jam Recordings in 2005 and found mainstream recognition following the release of her first two studio albums, Music of the Sun (2005) and A Girl Like Me (2006). Both influenced by Caribbean music, the albums quickly earned commercial success and peaked within the top ten on the US Billboard 200 chart.', '2024-04-21 17:35:51'),
(22, 'ABCabc123', 'P!nk', 'Alecia Beth Moore (born September 8, 1979), known professionally as Pink (stylized as P!nk), is an American singer, songwriter and actress. She is known for her rock-influenced pop songs and powerful voice.', '2024-04-21 17:54:12'),
(23, 'ABCabc123', 'Celine Dion', 'Céline Marie Claudette Dion CC OQ (/seɪˌliːn diˈɒn/ say-LEEN dee-ON;[b] born March 30, 1968)[3] is a Canadian singer. Referred to as the \"Queen of Power Ballads\",[4][5] she is noted for her powerful and technically skilled vocals.[6][7] Her music has incorporated genres such as pop, rock, R&B, gospel, and classical music. Her recordings have been mainly in English and French, although she has also sung in Spanish, Italian, German, Latin, Japanese, and Chinese.', '2024-04-21 17:55:19'),
(24, 'ABCabc123', 'Drake', 'Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper, singer and actor. An influential figure in contemporary popular music, he has been credited with popularizing R&B sensibilities in hip hop artists. Gaining recognition by starring as Jimmy Brooks in the CTV teen drama series Degrassi: The Next Generation (2001–08), Drake then started pursuing a recording career in 2006, releasing his debut mixtape Room for Improvement. He followed up with the mixtapes Comeback Season (2007) and So Far Gone (2009) before signing with Young Money Entertainment.', '2024-04-21 17:57:18'),
(25, 'ABCabc123', 'BTS', 'BTS (Bulletproof Boy Scouts), also known as the Bangtan Boys, is a South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook, who co-write or co-produce much of their material. Originally a hip hop group, they expanded their musical style to incorporate a wide range of genres, while their lyrics have focused on subjects including mental health, the troubles of school-age youth and coming of age, loss, the journey towards self-love, individualism, and the consequences of fame and recognition. Their discography and adjacent work has also referenced literature, philosophy and psychology, and includes an alternate universe storyline. ', '2024-04-21 18:02:07'),
(26, 'ABCabc123', 'One Direction', 'One Direction, often shortened to 1D, are an English-Irish pop boy band formed in London in 2010. The group is composed of Niall Horan, Liam Payne, Harry Styles, Louis Tomlinson, and previously Zayn Malik until his departure from the group in March 2015. They became one of the best-selling boy groups of all time before going on an indefinite hiatus in 2016. ', '2024-04-21 18:03:18');

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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
