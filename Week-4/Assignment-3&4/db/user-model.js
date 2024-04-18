const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function createUserTable() {
  const userTable = await pool.query(
    `CREATE TABLE IF NOT EXISTS \`user\` (
        \`id\` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        \`username\` VARCHAR(30) NOT NULL,
        \`email\` VARCHAR(255) NOT NULL UNIQUE KEY,
        \`password\` VARCHAR(255) NOT NULL,
        \`authority\` INT(2) NOT NULL DEFAULT 1,
        \`timestamp\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);`
  );
  if (userTable) console.log("userTable is ready for service.");
}
createUserTable();
//----------------------------------------------------------------
//----------------          Functions          -------------------
//----------------------------------------------------------------
async function getUser(id) {
  const [rows] = await pool.query(
    `
    SELECT * FROM user where id = ?
    `,
    [id]
  );
  // const [rows] = await pool.query(`SELECT * FROM user where id = ${id}`);
  if (rows.length == 0) {
    return undefined;
  } else {
    console.log("getUser:" + JSON.stringify(rows[0]));
    return rows[0];
  }
}
async function getUserByEmail(email) {
  const [rows] = await pool.query(
    `
    SELECT * FROM user where email = ?
    `,
    [email]
  );
  // const [rows] = await pool.query(
  //   `SELECT * FROM user where email = '${email}'`
  // );
  if (rows.length == 0) {
    return undefined;
  } else {
    console.log("getUser:" + JSON.stringify(rows[0]));
    return rows[0];
  }
}
async function newUser(username, email, password) {
  const [rows] = await pool.query(
    `INSERT INTO user (username,email,password)
    VALUES (?,?,?)
    `,
    [username, email, password]
  );
  // const [rows] = await pool.query(
  //   `INSERT INTO user (username,email,password) VALUES ('${username}','${email}','${password}')`
  // );
  console.log("newUser:" + JSON.stringify(rows));
  if (rows.length == 0) {
    return undefined;
  } else {
    return getUserByEmail(email);
  }
}
async function findUser(email) {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM user
      WHERE email = ?
      `,
    [email]
  );
  // const [rows] = await pool.query(
  //   `SELECT * FROM user WHERE email = '${email}'`
  // );
  if (rows.length == 0) {
    return undefined;
  } else {
    const id = rows[0].id;
    return getUser(id);
  }
}
module.exports = { newUser, findUser };
