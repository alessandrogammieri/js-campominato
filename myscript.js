/* Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero
di volte che l’utente ha inserito un numero consentito. */


// Dichiarazione variabili
var list, number;

// Generazione di 16 numeri random da 1 a 100
function nGenerator () {
  var number = Math.floor(Math.random() * 101);
  return number;
}

// Lista vuota dove inserire per 16 volte il numero random generato
list = [];
console.log(list);

// Generare il numero e pushare nella lista per 16 volte
for (var i = 0; i < 16; i++) {
  number = nGenerator();
  list.push(number);
}
