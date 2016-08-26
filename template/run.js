global.Promise = require('bluebird')
require('babel-runtime/core-js/promise').default = Promise
require('babel-register')
require('./app.js')
