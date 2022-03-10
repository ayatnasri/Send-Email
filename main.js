function sendEmail() {
    var mailSubject = document.getElementById("mailSubject").value
    var mailBody = document.getElementById("mailBody").value
    var to = document.getElementById("mailTo").value

    Email.send({
    Host : "smtp.gmail.com",
    Username : "testemailayat@gmail.com",
    Password : "ynctoqnfcrxxwobe",
    To : to,
    From : "testemailayat@gmail.com",
    Subject : mailSubject,
    Body : mailBody
    })
    .then(function(message) {
    alert("mail sent seccessfully")
    });
}