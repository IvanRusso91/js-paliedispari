/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
*/

// ----------------------------------------------------

//Variabili

let scelta = prompt('scegli pari o dispari')
let utente = parseInt(prompt('scegliendo un numero da 1 a 5'));
let sommaTot = sumNumb(utente);
const esito = document.getElementById('esit');
let divisibile = false;
pariDispari(sommaTot);

//-----------------------------------------------------

console.log(utente);
console.log(sommaTot);


//Funzioni

function numberRandom(min, max){

  return Math.floor(Math.random()* (max - min + 1) - min);
}

function numberGenerator(){

  const numeri = [1,2,3,4,5];
  let numbCasual = 0;
  const generato = numberRandom(1, 5);
  numbCasual = numeri[numberRandom(0, numeri.length - 1)];

  return numbCasual;
}

function sumNumb(utente){

  let numbCasual = numberGenerator();
  let total = utente + numbCasual;

  return total;   
}


function pariDispari(sommaTot){
  
  const stampa = document.getElementById('box');
  if(sommaTot % 2){
    divisibile= false;
    stampa.innerHTML = `il risultato è dispari`;
  }else{
    divisibile= true;
    stampa.innerHTML = `il risultato è pari`;
  }

  return divisibile; 
}
 
if(scelta === 'pari' && divisibile){
  esito.innerHTML = `Congratulazioni hai vinto`; 
}
else if(scelta === 'dispari' && !divisibile){
  esito.innerHTML = `Congratulazioni hai vinto`; 
}else{
  esito.innerHTML = `Spiacente hai perso`; 

}