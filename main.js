// Initialize Firebase
var config = {
    apiKey: "AIzaSyCyyqD1uOVo3vvQQSMLoWiAC-mGrhhv3_8",
    authDomain: "contact-c5e1c.firebaseapp.com",
    databaseURL: "https://contact-c5e1c.firebaseio.com",
    projectId: "contact-c5e1c",
    storageBucket: "contact-c5e1c.appspot.com",
    messagingSenderId: "34026755279"
};
firebase.initializeApp(config);

// Reference messages collection
let messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    
    // Get values
    let name = getInput('name');
    let company = getInput('company');
    let email = getInput('email');
    let phone = getInput('phone');
    let message = getInput('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Reset form
    document.getElementById('contactForm').reset();

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
}

// Function to get form values
function getInput(id) {
    return document.getElementById(id).value;
}

// Save the message to firebase
function saveMessage(name, company, email, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}