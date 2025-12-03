-- db/init.sql
CREATE DATABASE IF NOT EXISTS app_db;
USE app_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@example.com'),
  ('Bob', 'bob@example.com'),
  ('Charlie', 'charlie@example.com'),
  ('Diane', 'diane@example.com'),
  ('Eric', 'eric@example.com'),
  ('Fatima', 'fatima@example.com'),
  ('George', 'george@example.com'),
  ('Helene', 'helene@example.com'),
  ('Ibrahim', 'ibrahim@example.com'),
  ('Julie', 'julie@example.com');
