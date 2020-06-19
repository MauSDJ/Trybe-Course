const button = document.getElementsByTagName("button")[0];
const counter = document.getElementsByTagName("p")[0];
let count = 0;

const clickCount = () => {
  count += 1;
  counter.innerText = count;
}

button.addEventListener("click", clickCount);
