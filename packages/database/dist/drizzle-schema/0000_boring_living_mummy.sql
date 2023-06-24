CREATE TABLE `friendlist` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`userId` varchar(50) NOT NULL,
	`friendId` varchar(50) NOT NULL,
	`friendImage` varchar(256),
	`friendName` varchar(50) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`status` enum('friend','pending') NOT NULL DEFAULT 'pending');

CREATE TABLE `friendrequest` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`receiverId` varchar(50),
	`senderId` varchar(256));

CREATE UNIQUE INDEX `singleRequest` ON `friendrequest` (`senderId`,`receiverId`);