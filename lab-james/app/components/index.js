'use strict';

module.exports = function(app) {
  require('./home')(app);
  require('./album')(app);
  require('./fullsize')(app);
};
