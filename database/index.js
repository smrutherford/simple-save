const mysql = require('mysql');

const config = {
  database: 'saver',
  user: 'root',
};

const conn = mysql.createConnection(config);
conn.connect();

const getEntries = callback => {
  const query = 'SELECT * FROM entries';
  conn.query(query, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const saveEntry = (newEntry, callback) => {
  const query = 'INSERT INTO entries(entry) VALUES=?';
  conn.query(query, [newEntry], err => {
    if (err) {
      callback(err, null);
    }
  });
};

module.exports = {
  getEntries,
  saveEntry,
};
