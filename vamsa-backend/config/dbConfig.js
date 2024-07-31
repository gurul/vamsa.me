const dbConfig = {
    user: '<gkeshav617>',
    password: '<vamsa>',
    server: '<vamsa.database.windows.net', // Use 'localhost\\instance' for named instance
    database: 'VamsaDatabase',
    options: {
      encrypt: true, // Use encryption
      enableArithAbort: true,
    },
  };
  
  module.exports = dbConfig;