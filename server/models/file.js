const mysql = require('mysql');
const config = require('./../config.json');

const options = {
  user: config.user,
  password: config.password,
  database: config.database,
};
const connection = mysql.createConnection(options);

class FileManager {

  constructor() {
    connection.connect(err => {
      if (err) {
        console.log('connect to data base failed');
        throw err;
      }
      console.log('connect to data base successfull')
    });
  }

  getFilesAll() {
    const query = new Promise((resolve, reject) => {
      connection.query('SELECT * FROM shared_zone', (error, responce, fields) => {
        if (error) {
          reject(error);
        }
        resolve(responce);
      });
    });
    return query;
  }

  addFile(data, path) {

    const timestamp = Date.now();
    const author = 0;
    const query = new Promise((resolve, reject) => {
      connection.query(`INSERT INTO shared_zone (title, description, author, timestamp, path) VALUES ('${data.title}', '${data.description}', '${author}', '${timestamp}', '${path}')`, (error, responce, fields) => {
        if (error) {
          reject(error);
        }
        resolve(responce);
      });
    });
    return query;
  }
}

module.exports = { FileManager };
