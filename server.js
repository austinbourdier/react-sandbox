/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
const express = require('express');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
 */
var MongoClient = require('mongodb').MongoClient;

var myCollection;
var db = MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('test_collection');
});

 if (!isProd) {
  let isInitialCompilation = true;

  const compiler = webpack(config);
  new WebpackDevServer(compiler, config.devServer)
  .listen(config.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
  });

  compiler.plugin('done', () => {
    if (isInitialCompilation) {
      // Ensures that we log after webpack printed its stats (is there a better way?)
      setTimeout(() => {
        console.log('\n✓ The bundle is now ready for serving!\n');
        console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
        console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
        console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
      }, 350);
    }
    console.log(db)
    console.log(myCollection)
    isInitialCompilation = false;
  });
} else {

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.static('dist'));

  app.listen(port, ()=> {
    app.get('/', (req, res)=> {
      myCollection.find(function(err, users) {
        console.log(err, users)
        res.sendFile('index.html', { root: 'dist', users: users });
      });
    });
  });
}
