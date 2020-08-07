// Initialize Firebase (ADD YOUR OWN DATA)0
 var firebaseConfig = {
    apiKey: "AIzaSyBGrgfZbm5KFbXgi6ce-zr1hWrHXP9K07A",
  authDomain: "medwebdoc.firebaseapp.com",
  databaseURL: "https://medwebdoc.firebaseio.com",
  projectId: "medwebdoc",
  storageBucket: "medwebdoc.appspot.com",
  messagingSenderId: "267380675560",
  appId: "1:267380675560:web:920759981fa98dc0438a5d",
  measurementId: "G-XLQF1S83Z2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('Patient');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var address = getInputVal('address');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var blood = getInputVal('blood');
var date = getInputVal('date');

    var password = getInputVal('password');



  // Save message
  saveMessage(name, address, email, phone, blood, date, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, address, email, phone, blood, date, password){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    address:address,
    email:email,
    phone:phone,
    blood:blood,
    date:date
  });
  location.replace("index.html")
}
