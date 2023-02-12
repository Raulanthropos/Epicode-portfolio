const cardContainer = document.getElementById("cards");
const myForm = document.getElementById("my-form");
const cardContents = document.querySelectorAll('.card');
console.log(cardContents);

cardContents[0].addEventListener("click", function() {
  window.open("https://linked-in-clone-proj.vercel.app/", "_blank");
});
cardContents[1].addEventListener("click", function() {
  window.open("https://linked-in-clone-proj.vercel.app/", "_blank");
});
cardContents[2].addEventListener("click", function() {
  window.open("https://d12-hw-3-raulanthropos.vercel.app/", "_blank");
});

emailjs.init(environment.MY_SERVICE_ID);

myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  fetch("api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${environment.MY_SERVICE_ID}`
    },
  })
  emailjs.sendForm(environment.MY_SERVICE_ID, environment.MY_TEMPLATE, myForm, environment.MY_PUBLIC_KEY)
    .then(function(response) {
      if (response.ok) {
        console.log("Email successfully sent!", response.status);
      }
    }, function(error) {
      console.error("Failed to send email:", error);
    });
});


