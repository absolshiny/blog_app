const { Pool } = require('pg');
const pool = require('../db');

const User = {
  tableName: 'contacts',
  fields: ['id', 'email', 'cellphone'],

  async addUser(user) {
    const client = await pool.connect();
    try {
      const query = `INSERT INTO ${this.tableName} (email, cellphone) VALUES ($1, $2) RETURNING *`;
      const result = await client.query(query, [user.email, user.cellphone]);
      const newUser = result.rows[0];
      return newUser;
    } catch (error) {
      throw error;
    } finally {
      client.release(); // Release the connection back to the pool
    }
  },

  // Function to get a user by ID
  async getById(id) {
    const client = await pool.connect();
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
      const result = await client.query(query, [id]);
      const user = result.rows[0];
      return user;
    } catch (error) {
      throw error; // Handle errors appropriately
    } finally {
      client.release();
    }
  },

  // Function to get a user by email
  async getByEmail(email) {
    const client = await pool.connect();
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE email = $1`;
      const result = await client.query(query, [email]);
      const user = result.rows[0];
      return user;
    } catch (error) {
      throw error; // Handle errors appropriately
    } finally {
      client.release();
    }
  }
};

// Message model (schema)
const Message = {
  tableName: 'messages',
  fields: ['contact_id', 'message'],

  // Function to insert a new message
  async insertMessage(message) {
    const client = await pool.connect();
    try {
      const query = `INSERT INTO ${this.tableName} (contact_id, message) VALUES ($1, $2) RETURNING *`;
      const result = await client.query(query, [message.contact_id, message.message]);
      const newMessage = result.rows[0];
      return ({code: 201, message: newMessage});
    } catch (error) {
      return error;
    } finally {
      client.release(); // Release the connection back to the pool
    }
  },

  // Function to get messages for a user
  async getByContactId(id) {
    const client = await pool.connect();
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE contact_id = $1`;
      const result = await client.query(query, [id]);
      const messages = result.rows[0];
      return messages;
    } catch (error) {
      throw error; // Handle errors appropriately
    } finally {
      client.release();
    }
  },

};

// Message model (schema)
const adminBlog = {
  tableName: 'users',
  fields: ['id', 'user_email', 'password'],

  // Function to insert a new message
  async ValidateUser(creds) {
    const client = await pool.connect();
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE user_email = $1`;
      const result = await client.query(query, [creds.user_email]);
      const user = result.rows[0];
      if (!user) {
        throw new Error(`User with email ${creds.user_email} not found`);
      }
      if (creds.password !== user.password) {
        throw new Error('Incorrect password');
      }
      return {code: 200, message: "success"};
    } catch (error) {
      console.error(error);
      if (error.message.includes('not found')) {
        return({code: 404, message: error.message});
      } else {
        return({code: 401, message: error.message});
      }
    } finally {
      client.release();
    }
  }
};

module.exports = { User, Message, adminBlog };