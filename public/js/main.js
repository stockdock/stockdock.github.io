function sendata(name, email) {
  fetch("https://stockdock.glitch.me/", {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "*/*",
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      window.location.href = "/thankyou";
      // console.log(data);
    })
    .catch((err) => {
      console.log('err');
    });
}

function awake() {
  fetch("https://stockdock.glitch.me/awake")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
  awake();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  document.getElementById("send").addEventListener("click", (event) => {
    sendata(name.value, email.value);
  });
});
