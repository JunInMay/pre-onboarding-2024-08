set names 'utf8mb4';
set character_set_results = 'utf8mb4';
set character_set_database = 'utf8mb4';
set character_set_server = 'utf8mb4';

CREATE TABLE MY_SERVICE.`tb_user` (
   `id` int NOT NULL AUTO_INCREMENT,
   `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
   `user_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
   `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
   `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`),
   UNIQUE KEY `user_uniq_01` (`user_id`),
   UNIQUE KEY `user_uniq_02` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci