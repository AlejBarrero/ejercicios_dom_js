// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let div = document.createElement("div");

document.body.appendChild(div);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let div2 = document.createElement("div");

let p = document.createElement("p");

div2.appendChild(p);

document.body.appendChild(div2);


/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */

let div6p = document.createElement("div");

let parrafo = () => {
    let contador = 0;
    while (contador < 6) {
        let p = document.createElement("p");
        div6p.appendChild(p);
        contador++;
    }
}

parrafo();

document.body.appendChild(div6p);


/* 2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */

let pDinamico = document.createElement("p");

pDinamico.innerHTML = "Soy dinámico!";

document.body.appendChild(pDinamico);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector("h2.fn-insert-here");

h2.innerHTML = "Wubba Lubba dub dub";


/* 2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let lista = document.createElement("ul");

document.body.appendChild(lista);

for (let item of apps) {
    let li = document.createElement("li");
    
    let texto = document.createTextNode(item);
    
    li.appendChild(texto);
    
    lista.appendChild(li);
}


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let elementos = document.querySelectorAll(".fn-remove-me");

elementos.forEach(elemento => {
    elemento.remove();
});


/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

let parrafoMedio = document.createElement("p");
parrafoMedio.innerHTML = "Voy en medio!";

let primerDiv = document.querySelectorAll("div")[0];

primerDiv.insertAdjacentElement("afterend", parrafoMedio);


/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */

let parrafoDentro = document.createElement("p");
parrafoDentro.innerHTML = "Voy dentro!";
    
let divInsertHere = document.querySelectorAll(".fn-insert-here");
    
divInsertHere.forEach(elemento => {
    let parrafoClonado = parrafoDentro.cloneNode(true);

    elemento.insertAdjacentElement("afterbegin", parrafoClonado);
});
