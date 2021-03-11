let timesPressed = 0;

const easterEgg = () => {
  timesPressed += 1;

  if (timesPressed >= 3) {
    const triforce = document.getElementById("triforce");
    triforce.classList.add("spin");
  }
};
