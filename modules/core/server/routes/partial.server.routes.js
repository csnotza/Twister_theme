'use strict';

module.exports = function(app){
  var partial = require('../controllers/partial.server.controller');
  app.route('/modules/:module/:client/views/:view*').get(partial.render);
};