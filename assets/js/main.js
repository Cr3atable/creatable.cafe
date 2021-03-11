/* 
  Website design and developed by DEVLOOSKIE
  Abuse contact: hello@looskie.com
  
  2021 - All rights reserved to creatable
*/

/* Preloader */
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".loader");
  setTimeout(() => {
    preloader.classList.add("slideDown");
  }, 1500);
});

/* Easter egg */

let timesPressed = 0;
const easterEgg = () => {
  timesPressed += 1;

  if (timesPressed >= 3) {
    const triforce = document.getElementById("triforce");
    triforce.classList.add("spin");
  }
};
