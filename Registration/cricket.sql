CREATE TABLE registrations (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    teamName VARCHAR(50) NOT NULL,
    captainName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    players TEXT NOT NULL
);
