const cards = document.querySelectorAll(".card");
const cardContainer = document.getElementById("cards");
const myForm = document.getElementById("my-form");

const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

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



