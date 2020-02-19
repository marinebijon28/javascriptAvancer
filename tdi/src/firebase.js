import firebase from "firebase";
const config = {
        apiKey: "AIzaSyCQgZiDlkrrWAFFRlezNrnhAZ_uYJQuU2o",
        authDomain: "td3-js.firebaseapp.com",
        databaseURL: "https://td3-js.firebaseio.com",
        projectId: "td3-js",
        storageBucket: "td3-js.appspot.com",
        messagingSenderId: "341243044018",
        appId: "1:341243044018:web:00c6be52e0562ab50969ab",
        measurementId: "G-W43HHKQPL2"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
    firebase.analytics();
    export default firebase;


