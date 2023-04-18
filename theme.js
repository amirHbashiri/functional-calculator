let root = document.querySelector("html");
let btn = document.getElementById("stan-click");

btn.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "main") {
    root.setAttribute("data-theme", "green");
  } else if (root.getAttribute("data-theme") === "green") {
    root.setAttribute("data-theme", "blue");
  } else if (root.getAttribute("data-theme") === "blue") {
    root.setAttribute("data-theme", "purple");
  } else if (root.getAttribute("data-theme") === "purple") {
    root.setAttribute("data-theme", "main");
  }
});
