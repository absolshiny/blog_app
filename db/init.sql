CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    cellphone VARCHAR(12)
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    contact_id INTEGER REFERENCES contacts(id) ON DELETE CASCADE,
    message TEXT NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(20),
    password VARCHAR(16)
);

INSERT INTO users (user_email, password)
VALUES ('david@example.com', 'just_password');