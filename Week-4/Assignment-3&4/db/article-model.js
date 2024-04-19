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
            \`content\` VARCHAR(65535) NOT NULL,
            \`timestamp\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);`
  );
  if (articleTable) console.log("articleTable is ready for service.");
}
createArticleTable();
//----------------------------------------------------------------
//----------------          Functions          -------------------
//----------------------------------------------------------------
async function getArticleById(id) {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM article
      WHERE id = ?
      `,
    [id]
  );
  // const [rows] = await pool.query(`SELECT * FROM article WHERE id = ${id}`);
  if (rows.length == 0) {
    return undefined;
  } else {
    // console.log("getArticle:" + JSON.stringify(rows[0]));
    return rows[0];
  }
}

async function getArticlesByAuthor(author) {
  const [rows] = await pool.query(
    `
  SELECT *
  FROM article
  WHERE author = ?
  `,
    [author]
  );
  // const [rows] = await pool.query(
  //   `SELECT * FROM article WHERE author = '${author}'`
  // );
  if (rows.length == 0) {
    return undefined;
  } else {
    return rows;
  }
}
async function getArticlesByEmail(email) {
  const [rows] = await pool.query(
    `
  SELECT article.* FROM article
  INNER JOIN user ON article.author = user.username
  WHERE user.email = ?
  `,
    [email]
  );
  // const [rows] = await pool.query(
  //   `SELECT article.* FROM article
  //  INNER JOIN user ON article.author = user.username
  //  WHERE user.email = '${email}'`
  // );
  if (rows.length == 0) {
    return undefined;
  } else {
    return rows;
  }
}
async function getArticleByTitle(title) {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM article
      WHERE title = ?
      `,
    [title]
  );
  // const [rows] = await pool.query(
  //   `SELECT * FROM article WHERE title = '${title}'`
  // );
  if (rows.length == 0) {
    return undefined;
  } else {
    // console.log("getArticle:" + JSON.stringify(rows[0]));
    return rows[0];
  }
}
async function newArticle(author, title, content) {
  const [rows] = await pool.query(
    `INSERT INTO article (author,title,content)
    VALUES (?,?,?)
    `,
    [author, title, content]
  );
  // const [rows] = await pool.query(
  //   `INSERT INTO user (author,title,content) VALUES ('${author}','${title}','${content}')`
  // );
  // console.log("newArticle:" + JSON.stringify(rows));
  if (rows.length == 0) {
    return undefined;
  } else {
    return getArticleByTitle(title);
  }
}
async function findArticlesByIdRange(startId, endId) {
  const [rows] = await pool.query(
    `
  SELECT *
  FROM article
  WHERE id BETWEEN ? AND ?
  `,
    [startId, endId]
  );
  // const [rows] = await pool.query(
  //   `SELECT * FROM article WHERE id BETWEEN ${startId} AND ${endId} `
  // );
  // console.log("findArticle:" + JSON.stringify(rows));
  if (rows.length == 0) {
    return undefined;
  } else {
    return rows;
  }
}
module.exports = {
  getArticlesByEmail,
  newArticle,
  findArticlesByIdRange,
};
