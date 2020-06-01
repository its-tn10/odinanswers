DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` int(11) NOT NULL auto_increment COMMENT 'Unique User ID',
    `username` varchar(16) NOT NULL COMMENT 'Individual Username',
    PRIMARY KEY (`id`),
    UNIQUE KEY (`username`)
);

DROP TABLE IF EXISTS `contracts`;
CREATE TABLE `contracts` (
    `id` int(11) NOT NULL auto_increment COMMENT 'Unique Contract ID',
    `user_id` int(11) NOT NULL COMMENT 'Unique User ID from `users` table',
    `phone_number` varchar(10) NOT NULL COMMENT 'Contract Phone Number',
    `email_address` varchar(255) NOT NULL COMMENT 'Contract Email Address',
    `preferred_contact_method` tinyint(1) NOT NULL COMMENT 'Preferred Method of Contact (0: Phone, 1: Email)',
    PRIMARY KEY (`id`, `user_id`),
    KEY `phone_number` (`phone_number`),
    KEY `email_address` (`email_address`),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`)
);