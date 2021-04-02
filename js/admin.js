var enabled = true;

document.addEventListener("DOMContentLoaded", (event) => {
    awake();
    let id = document.getElementById("id");
    let pass = document.getElementById("pass");
    let button = document.getElementById("warningbtn");

    button.addEventListener("click", (event) => {
      let container = document.getElementById("warningcontainer");
      if (!container.classList.contains("hidden")) {
        container.classList.toggle("hidden");
      }
    });

    document.getElementById("send").addEventListener("click", (event) => {
      if (enabled) {
        var main = new Vue({
          el: "#main",
          data: {
            regs: [],
          },
          mounted: function () {
            fetch(
              "https://stockdock.glitch.me/admin/" + id.value + "/" + pass.value
            )
              .then((response) => response.json())
              .then((data) => {
                this.regs = data;
              })
              .catch((err) => {
                showwarning("invalid id pass");
                setTimeout(() => {
                  window.location.reload();
                }, 200);
              });
          },
          template: `
            <div class="p-5 w-full md:w-1/2 md:mx-auto space-y-5">
              <div v-for="reg , index in regs" class="flex items-center bg-gray-100 rounded-md">
                <div class="m-2">{{ index }}</div>
                <div class="flex-1 m-1">
                  <p><span class="font-bold">Name</span> : {{ reg.name.toString() }} </p>
                  <p><span class="font-bold">Email</span> : {{ reg.email.toString() }} </p>
                  <p><span class="font-bold">Number</span> : {{ reg.phone.toString() }} </p>
                </div>
              </div>
            </div>
          `,
        });
      }
    });
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