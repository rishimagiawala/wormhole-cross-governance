const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
let app = admin.app();
exports.dao = require('./dao');