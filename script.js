document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value,
    gallons: document.getElementById("gallons").value,
    date: document.getElementById("date").value,
  };

  try {
    // For now, just log the order
    console.log("Order placed:", formData);
    alert("Order placed successfully! We will contact you shortly.");
    e.target.reset();
  } catch (error) {
    console.error("Error:", error);
    alert("There was an error placing your order. Please try again.");
  }
});

// Comments logic
function renderComments() {
  const comments = JSON.parse(localStorage.getItem("marksComments") || "[]");
  const userCommentsDiv = document.getElementById("userComments");
  userCommentsDiv.innerHTML = "";
  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.className = "user-comment";
    div.innerHTML = `<span class="comment-name">${comment.name}</span><span>${comment.text}</span>`;
    userCommentsDiv.appendChild(div);
  });
}

document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("commentName").value.trim();
  const text = document.getElementById("commentText").value.trim();
  if (!name || !text) return;
  const comments = JSON.parse(localStorage.getItem("marksComments") || "[]");
  comments.unshift({ name, text });
  localStorage.setItem("marksComments", JSON.stringify(comments));
  renderComments();
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", renderComments);

// Carousel logic for reviews
const carouselItems = document.querySelectorAll(".carousel-item");
let carouselIndex = 0;
function showCarouselItem(idx) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle("active", i === idx);
  });
}
function nextCarouselItem() {
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  showCarouselItem(carouselIndex);
}
if (carouselItems.length > 1) {
  setInterval(nextCarouselItem, 4000);
}
