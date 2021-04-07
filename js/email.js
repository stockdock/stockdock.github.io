var unsendmail = document.getElementById("unsendemail");
var mailsend = document.getElementById("mailsend");

document.addEventListener("DOMContentLoaded", (event) => {
  getEmails();
});

function sendEmail(name, email) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "rahulgupta.ra.com@gmail.com@gmail.com",
    Password: "adiwsfptbbdnooik",
    To: email,
    From: "stockdock7@gmail.com",
    Subject:
      "You have successfully registered for the live session - Decoding Stock Market",
    Body: `
    <p>Hello ${name},<br><br>

    You have successfully registered for the live session - Decoding Stock Market <br><br>

    We appreciate your interest in stock markets and are looking forward to see you in the session.<br><br>

    If you haven't yet joined the WhatsApp group do join through the below link for further updates:<br>
    https://chat.whatsapp.com/HBA4iYh9nQ32zqMbF2mSo1  <br><br>

    Session Details <br>
    Date : April 3, 2021 <br>
    Time : 3pm to 4pm <br><br>

    Zoom link to join the session : <br>
    https://edflylearn.zoom.us/j/88239948439?pwd=V1loc2hkTGVKeXlPTjVBSnJDNkU1QT09 <br><br>

    Meeting ID- 882 3994 8439 <br>
    Password- 341788 <br><br>

    Thank You,<br>
    Regards,<br>
    Team Stock Dock<p>
    `,
  })
    .then((message) => {
      mailsend.innerHTML += "<p>" + email + "<p>";
    })
    .catch((err) => {
      unsendmail.innerHTML += "<p>" + email + "<p>";
    });
}

function getEmails() {
  fetch("https://stockdock.glitch.me/admin/admin123/pass123")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((reg, index) => {
        if (index >= 240 && index < 263) {
          // sendEmail(reg.name.toString(), reg.email.toString());
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
}