import mysql from "mysql2"
// import "dotenv/config"

export var pool  = mysql.createPool({
    host : process.env.HOST,
    user: process.env.DB_USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  });