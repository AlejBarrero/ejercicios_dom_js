/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let lista = document.createElement("ul");

countries.forEach(item => {
    let pais = document.createElement("li");

    pais.innerHTML = item;

    lista.appendChild(pais);
});

document.body.appendChild(lista);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let elementoRemove = document.querySelector(".fn-remove-me");

elementoRemove.remove();


/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let listaUl = document.createElement("ul");

cars.forEach(item => {
    let coche = document.createElement("li");

    coche.innerHTML = item;

    listaUl.appendChild(coche);
});

let divPrintHere = document.querySelector('div[data-function="printHere"]');

divPrintHere.appendChild(listaUl);


/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; */

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(item => {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");

    h4.innerHTML = item.title;
    img.src = item.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
});


/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */

let boton = document.createElement("button");

boton.innerHTML = "Eliminar ultimo elemento";

document.body.appendChild(boton);

boton.addEventListener("click", () => {
    let divs = document.querySelectorAll("div");
    let ultimoDiv = divs[divs.length - 1];
    ultimoDiv.remove();
});


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

let divs = document.querySelectorAll("div");

divs.forEach(div => {
    let boton = document.createElement("button");
    boton.innerHTML="Eliminar Elemento";

    div.appendChild(boton);

    boton.addEventListener("click", ()=> {
        div.remove();
    });
});
