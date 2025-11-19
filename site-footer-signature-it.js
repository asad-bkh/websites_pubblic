document.addEventListener("DOMContentLoaded", function() {
  var footer = document.querySelector("footer") || document.body;
  var div = document.createElement("div");
  div.style.textAlign = "center";
  div.style.fontSize = "14px";
  div.style.padding = "6px 0";
  div.innerHTML = 'Sito realizzato da <a href="https://digital1.it" target="_blank" style="color:inherit; text-decoration:underline;">Digital1</a>';
  footer.appendChild(div);
});
