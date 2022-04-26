var firebaseConfig = {
  apiKey: "AIzaSyDjYuxCqtezRREObkT_GWK9aNtQKBxb1Us",
  authDomain: "project-email-b4537.firebaseapp.com",
  projectId: "project-email-b4537",
  storageBucket: "project-email-b4537.appspot.com",
  messagingSenderId: "96833510086",
  appId: "1:96833510086:web:1e76d6a1895636266355c7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Referencing contact collections
let contactInfo = firebase.database().ref("info");

document.querySelector(".form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name = document.querySelector(".name").value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;

    saveContactInfo(name, email, message);

    document.querySelector('.form').reset();

    forwardEmail(name, email, message);
}

function saveContactInfo(name, email, message){
    let newContactInfo =  contactInfo.push();

    newContactInfo.set({
        Username: name,
        Useremail: email,
        message: message,
    });

    retrievInfo();
}

function retrievInfo(){
    let ref = firebase.database().ref('.info');
    ref.on("value", gotData);
}


function gotData(data){
    let dataInfo = data.val();
    let keys = Object.keys(dataInfo);

    for (let i = 0; i < keys.length; i++){
        let info= keys[i];
        let name = dataInfo[info].name;
        let email = dataInfo[info].email;
        let message = dataInfo[info].message;

        console.log(name, email, message);
    }
}


function forwardEmail(name, email, message){
    Email.send({
        Host: "smtp.gmsil.com",
        Username: 'gobaa655@gmail.com',
        Password: 'OptimusPrime@2022',
        To: 'gobaa655@gmail.com',
        From: 'gobaa655@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
    }).then((message) => alert("Message sent successfuly"));
}
