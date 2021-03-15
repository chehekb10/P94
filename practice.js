  // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCBb0Nd-OmG_zdvproD9h3EcNyFUOmzu7c",
    authDomain: "kwitter1-3319a.firebaseapp.com",
    databaseURL: "https://kwitter1-3319a-default-rtdb.firebaseio.com",
    projectId: "kwitter1-3319a",
    storageBucket: "kwitter1-3319a.appspot.com",
    messagingSenderId: "791144662884",
    appId: "1:791144662884:web:4b983964eb1a57ef9adc71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    username= document.getElementById("user_name1").value;
    firebase.database().ref("/").child(username).update(
        {
             food: "sushi"
        }
    );
}