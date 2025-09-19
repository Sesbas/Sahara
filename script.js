onload = () => {
  document.body.classList.remove("container");
};

document.getElementById("start-btn").addEventListener("click", function() {
  this.style.display = "none"; // ocultar botón
  document.getElementById("love-message").style.display = "block"; // mostrar mensaje
  document.getElementById("love-message2").style.display = "block";
});
