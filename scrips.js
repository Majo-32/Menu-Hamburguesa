(function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (!toggleButton || !menu) return;

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
})();
