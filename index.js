const cards = document.querySelectorAll(".card");
const cardContainer = document.getElementById("cards");

const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of cards) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}

// cardContainer.onmousemove = (e) => {
//   for (const card of cards) {
//     const rect = target.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   }
// };
