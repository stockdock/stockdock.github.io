var unsendmail = document.getElementById("unsendemail");
var mailsend = document.getElementById("mailsend");

document.addEventListener("DOMContentLoaded", (event) => {
  getEmails();
});

function sendEmail(name, email) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "stockdock7@gmail.com",
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
    https://chat.whatsapp.com/EhhdVvrvTsGKj9BFJP9Guq  <br><br>

    Session Details <br>
    Date : April 10, 2021 <br>
    Time : 3pm to 4pm <br><br>

    Zoom link to join the session : <br>
    https://edflylearn.zoom.us/j/89044094279?pwd=R2w5eTBmc1VqbTV6U1A3OUgzYWFoQT09 <br><br>

    Meeting ID- 890 4409 4279 <br>
    Password- 754749 <br><br>

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
  data = [
    {
      "College / institute": "Manibain Nanavati women's college",
      "Name": "Pallavi Rambhau Gopale",
      "Email": "pallavigopale61@gmail.com",
      "WhatsApp No.": 7304272397,
      "Course": 2021,
      "Year": "TY"
    },
    {
      "College / institute": "Maniben Nanavati women's college",
      "Name": "Shemina Lakhani",
      "Email": "seminalakhani728@gmail.com",
      "WhatsApp No.": 7738010781,
      "Course": "TYBAFI",
      "Year": "TY"
    },
    {
      "College / institute": "Maniben nanavati woman's college",
      "Name": "sadhana gupta",
      "Email": "sadhana9650@gmail.com",
      "WhatsApp No.": 9082000893,
      "Course": "Bcom (AFI)",
      "Year": "TY"
    },
    {
      "College / institute": "Maniben Nanavati Women's College",
      "Name": "Devyanshi",
      "Email": "devyanshimakwana83@gmail.com",
      "WhatsApp No.": 7208595675,
      "Course": "Fybafi",
      "Year": "FY"
    },
    {
      "College / institute": "The D. G. Ruparel college",
      "Name": "Priya Sunil Suryavanshi",
      "Email": "priyasuryavanshi2003@gmail.com",
      "WhatsApp No.": 9004535440,
      "Course": "BMS",
      "Year": "SY"
    },
    {
      "College / institute": "D.G.Ruparel college of arts science and commerce",
      "Name": "Priyanka prabhakar patil",
      "Email": "Priyankapatil2984@gmail.com",
      "WhatsApp No.": 9967679824,
      "Course": "BMS",
      "Year": "SY"
    },
    {
      "College / institute": "D.G Ruparel College",
      "Name": "Suresh Hanumantha Mhatre",
      "Email": "mhatresuresh895@gmail.com",
      "WhatsApp No.": 9136584506,
      "Course": "Bachelor of Management Studies",
      "Year": "TY"
    },
    {
      "College / institute": "D.G.Ruparel College",
      "Name": "Shivani Chitre",
      "Email": "shivanichitre01@gmail.com",
      "WhatsApp No.": 9833882651,
      "Course": "BMS",
      "Year": "SY"
    },
    {
      "College / institute": "D. G. Ruparel college",
      "Name": "Anuj",
      "Email": "anujpawar900@gmail.com",
      "WhatsApp No.": 8928822703,
      "Course": "Bms",
      "Year": "FY"
    },
    {
      "College / institute": "Maniben nanavati womens collage",
      "Name": "vidhya poojary",
      "Email": "vidhupoojary007@gmail.com",
      "WhatsApp No.": 8850154759,
      "Course": "Bcom.afi",
      "Year": "SY"
    }
  ]
  data.forEach((reg, index) => {
    if (index >= 0 && index < 20) {
      // sendEmail(reg.Name.toString(), reg.Email.toString());
    }
  });
}