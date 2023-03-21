/* Consegna
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let message = document.getElementById('message');
// console.log(message);
let rndNumberContainer = document.getElementById('rndNumberContainer');
// console.log(rndNumberContainer);
let inputBoxes = document.getElementById('inputboxes');
let inputs = '';

btn = document.getElementById('play');
// console.log(btn);

//funzione per generare numeri interi random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//funzione per generare ed inserire nell'array di numeri casuali, 5 numeri random da 1 a 100
function generateRndNumbers () {
    const rndNumbers = [];
    while (rndNumbers.length < 5) {
        let rndNumber = getRandomNumber(1, 100);
        rndNumbers.push(rndNumber);
    }
    return rndNumbers;
}

// funzione per cancellare i numeri nell'html, mostrare il bottone e inserire gli input box

setTimeout(deleteNumbers, 3000);

function deleteNumbers () {
    message.innerHTML = 'Adesso scrivi nei box tutti i numeri che ricordi';
    rndNumberContainer.innerHTML = '';
    btn.classList.remove('d-none');
    for (let i = 0; i <= 5; i++){
        inputs += `<input type="number" min="1" max="100">`
    }
    inputBoxes.innerHTML += inputs;
    
    
}



//genero i numeri e li stampo nell'html
let rndNumbers = generateRndNumbers(1, 100);
rndNumberContainer.innerHTML = `${rndNumbers}`;


