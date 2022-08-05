-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `movie_banner` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `director` VARCHAR(191) NOT NULL,
    `producer` VARCHAR(191) NOT NULL,
    `release_date` INTEGER NOT NULL,
    `running_time` INTEGER NOT NULL,
    `rt_score` INTEGER NOT NULL,

    UNIQUE INDEX `Movie_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
