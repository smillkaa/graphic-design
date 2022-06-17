function navBar() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("hidden")
    
  }

  const icon = document.getElementById("icon")
  icon.addEventListener("click", navBar)