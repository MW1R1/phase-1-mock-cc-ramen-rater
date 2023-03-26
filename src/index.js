// write your code here
// Get the DOM elements
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const newRamenForm = document.querySelector("#new-ramen");

// Load all ramen data from server
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    // Display all ramen images in the ramen-menu div
    ramens.forEach((ramen) => {
      const ramenImage = document.createElement("img");
      ramenImage.src = ramen.image;
      ramenImage.alt = ramen.name;
      ramenImage.addEventListener("click", () => {
        // Display ramen details in the ramen-detail div when clicked
        ramenDetail.querySelector(".detail-image").src = ramen.image;
        ramenDetail.querySelector(".name").textContent = ramen.name;
        ramenDetail.querySelector(".restaurant").textContent = ramen.restaurant;
        ramenDetail.querySelector("#rating-display").textContent = ramen.rating;
        ramenDetail.querySelector("#comment-display").textContent = ramen.comment;
      });
      ramenMenu.appendChild(ramenImage);
    });
  });

// Add event listener for new ramen form submission
newRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Create a new ramen object from the form data
  const newRamen = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target.comment.value,
  };

  // Display the new ramen in the ramen-menu div
  const newRamenImage = document.createElement("img");
  newRamenImage.src = newRamen.image;
  newRamenImage.alt = newRamen.name;
  newRamenImage.addEventListener("click", () => {
    // Display ramen details in the ramen-detail div when clicked
    ramenDetail.querySelector(".detail-image").src = newRamen.image;
    ramenDetail.querySelector(".name").textContent = newRamen.name;
    ramenDetail.querySelector(".restaurant").textContent = newRamen.restaurant;
    ramenDetail.querySelector("#rating-display").textContent = newRamen.rating;
    ramenDetail.querySelector("#comment-display").textContent = newRamen.comment;
  });
  ramenMenu.appendChild(newRamenImage);

  // Reset the form inputs
  event.target.reset();
});
