function login() {
  let endMail = "@protonmail.com";
  let user = document.getElementById('inputUser').value;
  firebase.auth().signInWithEmailAndPassword(user + endMail, "code1234")
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

    const dbRef = database.ref();
    dbRef.child(user.uid).get().then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        let body = document.getElementsByTagName("body")[0];
        body.className = '';
        body.innerHTML = snapshot.val();
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    });
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
    });
}