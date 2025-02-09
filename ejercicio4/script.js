/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

let boton = document.createElement("button");

boton.id = "btnToClick";

boton.innerHTML = "Obtener Informacion Click";

document.body.appendChild(boton);

boton.addEventListener("click", function(event) {
    console.log(event);
});


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let eventoFocus = document.querySelector(".focus");

eventoFocus.addEventListener("focus", function() {
    console.log(eventoFocus.value);
});


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let eventoInput = document.querySelector(".value");

eventoInput.addEventListener("input", function() {
    console.log(eventoInput.value);
});


/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
]; */

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

let listaUl = document.createElement("ul");

albums.forEach(elemento => {
    let listaLi = document.createElement("li");

    listaLi.innerHTML = elemento;

    listaUl.appendChild(listaLi);
});

document.body.appendChild(listaUl);
