const view = document.getElementById("pageviews");
const price = document.getElementById("dollar-price");
const thumb = document.getElementById("thumb-range");
const line = document.getElementById("colore-line");
const circle = document.getElementById("small-circle");
const mainCircle = document.getElementById("main-circle");
const btn = document.getElementById("btn");

let range = 3;
let discount = false;
thumb.addEventListener("input", (event) => {
  range = event.target.value;
  beqa();
});
mainCircle.addEventListener("click", () => {
  discount = !discount;
  circle.classList.toggle("circle-don");
  mainCircle.classList.toggle("circle-up");
  beqa();
});

function beqa() {
  console.log(discount);
  if (discount == false) {
    if (range == 1) {
      view.innerText = "10K pageviews";
      price.innerText = "$8.00";
      line.style.width = "0%";
    } else if (range == 2) {
      view.innerText = "50K pageviews";
      price.innerText = "$12.00";
      line.style.width = "25%";
    } else if (range == 3) {
      view.innerText = "100K pageviews";
      price.innerText = "$16.00";
      line.style.width = "50%";
    } else if (range == 4) {
      view.innerText = "500K pageviews";
      price.innerText = "$24.00";
      line.style.width = "75%";
    } else if (range == 5) {
      view.innerText = "1M pageviews";
      price.innerText = "$36.00";
      line.style.width = "100%";
    }
  } else {
    if (range == 1) {
      view.innerText = "10K pageviews";
      price.innerText = "$2.00";
      line.style.width = "0%";
    } else if (range == 2) {
      view.innerText = "50K pageviews";
      price.innerText = "$3.00";
      line.style.width = "25%";
    } else if (range == 3) {
      view.innerText = "100K pageviews";
      price.innerText = "$4.00";
      line.style.width = "50%";
    } else if (range == 4) {
      view.innerText = "500K pageviews";
      price.innerText = "$6.00";
      line.style.width = "75%";
    } else if (range == 5) {
      view.innerText = "1M pageviews";
      price.innerText = "$9.00";
      line.style.width = "100%";
    }
  }
}
