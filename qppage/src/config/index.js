import firebase from 'firebase';
import 'firebase/storage';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFPFhF5QENrX0RaH8b5irTJ8IVznr5K1A",
    authDomain: "qppage.firebaseapp.com",
    databaseURL: "https://qppage.firebaseio.com",
    projectId: "qppage",
    storageBucket: "gs://qppage.appspot.com",
    messagingSenderId: "347320865702",
    appId: "1:347320865702:web:4aee23501e329b4f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage=firebase.storage()
export{
    storage,firebase as default
}