document.addEventListener("scroll", function() {
  var scrollTop = window.scrollY;

  if (scrollTop >= window.innerHeight) {
    document.querySelector(".tela2").style.display = "flex";
  } else {
    document.querySelector(".tela2").style.display = "none";
  }
});
