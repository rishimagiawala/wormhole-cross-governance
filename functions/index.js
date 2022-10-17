const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
let app = admin.app();
exports.addDAO = functions.https.onRequest((request, response) => {
    var ref = app.database("https://dao.firebaseio.com").ref("daos");
    
    var childRef = ref.push();
    childRef.set
    (
        {
            title: "test",
            pay: 100
        }
    );
    functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Wormhole - Rishi!");
})

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Wormhole - Rishi!");
});
