// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :party_wizard: ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// PRIMO PROBLEMA
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata

// creazione griglia di gioco esempio difficoltà 1
// dopo posso creare una funzione con un parametro x che determina quante caselle creare in base a x.

const container = document.querySelector('.container');
console.log(container);

for(let i = 1; i<=100; i++){
    container.innerHTML += `
    <div class="box">${i}</div>
    `;
}

// assegno a una variabile box(js) un array di tutti gli elementi con classe box(html) 

let box = document.getElementsByClassName('box');
console.log(box);

// algoritmo di prova per cambiare colore alla casella cliccata perchè scorrendo tutto l'array ad ogni click non è performante
for(let i = 0; i<100; i++){
    box[i].addEventListener('click', function(){
        box[i].classList.add('color');
        console.log(i+1);
    });
}
