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

async function createArticleTable() {
  const articleTable = await pool.query(
    `CREATE TABLE IF NOT EXISTS \`article\`  (
            \`id\` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            \`author\` VARCHAR(30) NOT NULL,
            \`title\` VARCHAR(65535) NOT NULL,
            \`article\` VARCHAR(65535) NOT NULL,
            \`timestamp\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);`
  );
  if (articleTable) console.log("articleTable is ready for service.");
}
createArticleTable();
//----------------------------------------------------------------
//----------------          Functions          -------------------
//----------------------------------------------------------------
async function getArticleById(id) {
  // const [rows] = await pool.query(
  //   `
  //     SELECT *
  //     FROM article
  //     WHERE id = ?
  //     `,
  //   [id]
  // );
  const [rows] = await pool.query(`SELECT * FROM article WHERE id = ${id}`);
  if (rows.length == 0) {
    return undefined;
  } else {
    console.log("getArticle:" + JSON.stringify(rows[0]));
    return rows[0];
  }
}
async function getArticlesByAuthor(author) {
  // const [rows] = await pool.query(
  //   `
  // SELECT *
  // FROM article
  // WHERE author = ?
  // `,
  //   [author]
  // );
  const [rows] = await pool.query(
    `SELECT * FROM article WHERE author = '${author}'`
  );
  if (rows.length == 0) {
    return undefined;
  } else {
    const id = rows[0].id;
    return getArticleById(id);
  }
}

module.exports = { getArticlesByAuthor, getArticleById };
