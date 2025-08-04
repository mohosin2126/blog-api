CREATE TABLE blogs (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     meta_description VARCHAR(255),
     body TEXT,
     keywords TEXT,
     image VARCHAR(255),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
