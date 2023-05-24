const express = require('express');
const jwt = require('jsonwebtoken');
const fileController = require('./controllers/fileController');


class Application {
  constructor() {
    this.expressApp = express();
    this.attachRoutes();
  }

  attachRoutes() {
    let app = this.expressApp;
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();

      app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
      });
    });

    // Создадим middleware для обработки JSON-тел запросов, т. е. функцию,
    // которая будет вызываться перед нашими обработчиками и обрабатывать
    // JSON в теле запроса, чтобы наш обработчик получил готовый объект.

    app.use(express.static(__dirname));

    app.get('/admin', (req, res) => {
      res.send('Admin page');
    });
    app.get('/sz', fileController.getSharedZone);
    app.post('/sz', fileController.addFile);

  }
}


module.exports = Application;
