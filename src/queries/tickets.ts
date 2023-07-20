const TABLE = "books";

export const BooksQueries = {
  GET_BY_ID: `SELECT * FROM ${TABLE} WHERE id = $1`,
  UPDATE: `UPDATE FROM ${TABLE} WHERE id = $1`,
  DELETE: `DELETE FROM  ${TABLE} WHERE id = $1`,
  CREATE: `INSERT INTO ${TABLE} (distributor, type, event, date) VALUES ($1, $2, $3)`,
  PATCH: `UPDATE FROM ${TABLE} date = $2 WHERE id = $1`,
};
