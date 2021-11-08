const functions = require('firebase-functions');
const admin = require('firebase-admin');

const FIREBASE_STORAGE_BUCKET = 'fir-recipes-web-app-a347e.appspot.com';

const apiFirebaseOptions = {
  ...functions.config().firebase,
  credential: admin.credential.applicationDefault(),
};

admin.initializeApp(apiFirebaseOptions);

const firestore = admin.firestore();
const firestoreSettings = {
  timestampsInSnapshots: true,
};

firestore.settings(firestoreSettings);

const storageBucket = admin.storage().bucket(FIREBASE_STORAGE_BUCKET);
const auth = admin.auth();

module.exports = {
  functions,
  auth,
  firestore,
  storageBucket,
  admin,
};
