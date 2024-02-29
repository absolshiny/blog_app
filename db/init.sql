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