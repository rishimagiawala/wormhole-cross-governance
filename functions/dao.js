const functions = require('firebase-functions');
exports.createDAO = functions.https.onRequest((request, response) => {
  functions.logger.log("Hello this is Rishi");
});
exports.readDAO = functions.https.onRequest((request, response) => {
  // ...
});
exports.updateDAO = functions.https.onRequest((request, response) => {
    // ...
  });
  exports.deleteDAO = functions.https.onRequest((request, response) => {
    // ...
  });