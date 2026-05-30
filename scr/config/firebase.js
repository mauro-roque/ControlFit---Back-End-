const admin = require("firebase-admin");

const serviceAccount = require("../../controlfit-bc6ac-firebase-adminsdk-fbsvc-eaac96dfd3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;