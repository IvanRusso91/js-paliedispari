/*
Palindromo
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/

//-------------------------------------------------------
const stampa= document.getElementById('box');
let utente = prompt('inserisci una parola');
let paliSi = palindromo(utente);

function palindromo(parola){

  let output= true;

  for(let i = 0; i < parola.length; i++){
    if(parola[i] != parola[parola.length - i - 1]){
      output = false;
    }
    
  }
  return output;
}

if(paliSi){
  output = true
  stampa.innerHTML = `il numero che hai scelto è un palindromo`;
}else{
  stampa.innerHTML = `il numero che hai scelto non è un palindromo`;
}





