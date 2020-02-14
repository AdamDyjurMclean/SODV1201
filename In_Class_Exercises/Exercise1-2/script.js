// Can you make this function perform a count
// operation using a button and then display
// the results to the webpage?

const app = document.getElementById("app");
app.textContent = "0";

const btn = document.getElementById("count");

btn.addEventListener("click", () => {
  app.textContent++;
});
