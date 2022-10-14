// Abrir menú mobile
const btnMenu = document.querySelector("#menu");
const btnCloseMenu = document.querySelector("#closeMenu");
const nav = document.querySelector("#navbarMb");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

btnCloseMenu.addEventListener("click", () => {
  nav.classList.remove("show");
});

// Expandir sub items tienda
const collapsibles = document.querySelectorAll(".collapse");
const contents = document.querySelectorAll(".nav-dropdown");
const navshop = document.querySelector(".nav-shop");
const more = document.querySelectorAll(".more");

function activeElement() {
  // Recorre buttons con class "collapse" [collapsibles]
  collapsibles.forEach((collapse) => {
    // Captura el click
    collapse.addEventListener("click", (e) => {
      // Guarda el padre del button clickeado
      const currentFather = e.target.closest("li");
      // Le agrega la clase "active"
      currentFather.classList.toggle("active");
      openDropdown();
      changeSymbol();
    });
  });
}

activeElement();

function openDropdown() {
  if (navshop.parentNode.classList.contains("active")) {
    navshop.classList.add("collapse");
  } else {
    navshop.classList.remove("collapse");
  }

  // Recorre los ul de clase nav-dropdown [contents]
  contents.forEach((content) => {
    // Guarda al padre del ul de clase nav-dropdown [contents] - padre li
    const currentFather2 = content.closest("li");
    // Busca si tiene la clase "active"
    if (currentFather2.classList.contains("active")) {
      // Le agrega la clase "collapse"
      content.classList.add("collapse");
    } else {
      content.classList.remove("collapse");
    }
  });
}

function changeSymbol() {
  // Cambia + por -
  more.forEach((moreItem) => {
    // Busca el li más cercano
    const currentFather3 = moreItem.closest("li");
    if (currentFather3.classList.contains("active")) {
      moreItem.textContent = "-";
    } else {
      moreItem.textContent = "+";
    }
  });
}
