var enabled = true;

document.addEventListener("DOMContentLoaded", (event) => {
  if (document.getElementById("name")) {
    awake();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let button = document.getElementById("warningbtn");

    button.addEventListener("click", (event) => {
      let container = document.getElementById("warningcontainer");
      if (!container.classList.contains("hidden")) {
        container.classList.toggle("hidden");
      }
    });
    document.getElementById("send").addEventListener("click", (event) => {
      if (enabled) {
        phone.value = phone.value.replace(/^0+/, "");
        if (validatePhone(phone.value)) {
          if (validateEmail(email.value)) {
            sendata(name.value, email.value, phone.value);
          } else {
            showwarning("invalid Email");
          }
        } else {
          showwarning("Invalid Phone");
        }
      }
    });
  }
});

function awake() {
  fetch("https://stockdock.glitch.me/awake")
    .then((response) => {
      // console.log(response);
    })
    .catch((err) => {
      // console.log(err);
    });
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(String(phone));
}

function showwarning(text) {
  let container = document.getElementById("warningcontainer");
  let warinig = document.getElementById("warning");
  if (text) {
    warinig.innerText = text;
  } else {
    warinig.innerText = "Something went wrong";
  }
  if (container.classList.contains("hidden")) {
    container.classList.toggle("hidden");
    setTimeout(() => {
      if (!container.classList.contains("hidden")) {
        container.classList.toggle("hidden");
      }
    }, 3000);
  }
}

function sendata(name, email, phone) {
  enabled = false;
  document.getElementById("send").classList.toggle("cursor-pointer");
  let text = document.querySelector(".loadertext");
  let loader = document.querySelectorAll(".loader");
  let delay = 0;
  text.classList.toggle("hidden");
  loader.forEach((element) => {
    element.classList.toggle("hidden");
    element.style.animation = "loading 0.8s infinite " + delay + "s";
    delay += 0.1;
  });

  fetch("https://stockdock.glitch.me/new", {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "*/*",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
    }),
  })
    .then((response) => {
      if (response.status == 201) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        text.classList.toggle("hidden");
        loader.forEach((element) => {
          element.classList.toggle("hidden");
        });
        document.getElementById("send").classList.toggle("cursor-pointer");
        enabled = true;
        window.location.href = "/thankyou";
      } else if (response.status == 400) {
        text.classList.toggle("hidden");
        loader.forEach((element) => {
          element.classList.toggle("hidden");
        });
        document.getElementById("send").classList.toggle("cursor-pointer");
        enabled = true;
        showwarning("invalid Phone");
      } else if (response.status == 401) {
        text.classList.toggle("hidden");
        loader.forEach((element) => {
          element.classList.toggle("hidden");
        });
        document.getElementById("send").classList.toggle("cursor-pointer");
        enabled = true;
        showwarning("invalid Email");
      } else {
        text.classList.toggle("hidden");
        loader.forEach((element) => {
          element.classList.toggle("hidden");
        });
        document.getElementById("send").classList.toggle("cursor-pointer");
        enabled = true;
        showwarning("something went wrong try again letter");
      }
    })
    .catch((err) => {
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      text.classList.toggle("hidden");
      loader.forEach((element) => {
        element.classList.toggle("hidden");
      });
      document.getElementById("send").classList.toggle("cursor-pointer");
      enabled = false;
    });
}