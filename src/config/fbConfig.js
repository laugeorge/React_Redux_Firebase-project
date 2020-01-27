import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var Config = {
    apiKey: "AIzaSyAltfXx7oDaXK0nPAmAd9mCprFQYvIk5s8",
    authDomain: "simpleplan-687b3.firebaseapp.com",
    databaseURL: "https://simpleplan-687b3.firebaseio.com",
    projectId: "simpleplan-687b3",
    storageBucket: "simpleplan-687b3.appspot.com",
    messagingSenderId: "829523404646",
    appId: "1:829523404646:web:cda6daaa67ecefad968aa7",
    measurementId: "G-YDV9BEW6CM"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  //firebase.analytics();
// firebase.firestore().settings({timestampsInSnapshots: true});
firebase.firestore().settings({});


  export default firebase