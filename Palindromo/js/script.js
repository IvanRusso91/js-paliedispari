/*
Palindromo
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/

//-------------------------------------------------------

// let utente = prompt('inserisci una parola');
let paliNo = 'amala';
let paliSi = 'otto';

function palindromo(parola){

  let serbatoio = [];
  let output= false;

  for(let i = 0; i < parola.length; i++){
    if(parola[i] === parola[parola.length - i - 1]){
      output = true;
      serbatoio.push(output);
    }else{
      output= false;
      serbatoio.push(output);
    }
    
  }

  return output;
}


palindromo(paliSi);
palindromo(paliNo);
