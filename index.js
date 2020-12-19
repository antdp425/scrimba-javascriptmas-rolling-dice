/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const dice = document.querySelector(".dice");

  dice.addEventListener("click", () => updateDice(diceRoll()));

  function diceRoll() {
    return Math.floor(Math.random() * 5 + 1);
  }

  function updateDice(roll) {
    dots.forEach((dot) => dot.classList.remove(...dot.classList));
    switch (roll) {
      case 6:
        dots[0].classList.add("dot");
        dots[2].classList.add("dot");
        dots[3].classList.add("dot");
        dots[5].classList.add("dot");
        dots[6].classList.add("dot");
        dots[8].classList.add("dot");
        break;
      case 5:
        dots[0].classList.add("dot");
        dots[2].classList.add("dot");
        dots[4].classList.add("dot");
        dots[6].classList.add("dot");
        dots[8].classList.add("dot");
        break;
      case 4:
        dots[0].classList.add("dot");
        dots[2].classList.add("dot");
        dots[6].classList.add("dot");
        dots[8].classList.add("dot");
        break;
      case 3:
        dots[0].classList.add("dot");
        dots[4].classList.add("dot");
        dots[8].classList.add("dot");
        break;
      case 2:
        dots[0].classList.add("dot");
        dots[8].classList.add("dot");
        break;
      case 1:
        dots[4].classList.add("dot");
        break;
      default:
        break;
    }
  }
});
/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
