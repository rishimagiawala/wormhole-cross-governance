const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config(functions).firebase);
let app = admin.app();

exports.createDAO = functions.https.onRequest((request, response) => {
  let ref = app.database('https://heynow.firebaseio.com').ref();
  ref.push({"hey" : "yo"})
  response.send("Completed").status(200);

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