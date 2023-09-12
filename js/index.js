// div que contiene a los iconos
const containerIcons = document.getElementById("container__icons");

// list icon
const listIcon = document.getElementById("list__icon");

// close icon 
const closeIcon = document.getElementById("close__icon");

// ul que contiene a los links de nuestra nav
const ulLinks = document.getElementById("ul__links");


const mostrar_ocultar_nav = () => {

    ulLinks.classList.toggle("ul__links--show");

    listIcon.classList.toggle("icon--hidden");
    closeIcon.classList.toggle("icon--show");
    
}

containerIcons.addEventListener("click", mostrar_ocultar_nav)




