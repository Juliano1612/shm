import * as firebase from 'firebase';
 
// const config = {
//     apiKey: "xxx",
//     authDomain: "jsa-react-redux-firebase.firebaseapp.com",
//     databaseURL: "https://jsa-react-redux-firebase.firebaseio.com",
//     projectId: "jsa-react-redux-firebase",
//     storageBucket: "jsa-react-redux-firebase.appspot.com",
//     messagingSenderId: "xxx"
// };
 
const gcconfig = {
    projectId: "casorio-2206",
    storageBucket: "gs://casorio-2206.appspot.com",
    databaseURL: "https://casorio-2206.firebaseio.com/",
    keyFilename: "../../../casorio-2206-firebase-adminsdk-ktre4-9ed49f387b.json"
};

firebase.initializeApp(gcconfig);
const database = firebase.database();
 
export { firebase, database as default };