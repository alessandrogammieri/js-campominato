/* Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero
di volte che l’utente ha inserito un numero consentito. */


// Dichiarazione variabili
var list, number, controln, lose, wins, puntata, numb, tentativi;

// Generazione di 16 numeri random da 1 a 100
function nGenerator () {
  var n = Math.floor(Math.random() * 101);
  return n;
}

// Lista vuota dove inserire per 16 volte il numero random generato
list = [];
console.log(list);

// Generare il numero e pushare nella lista per 16 volte
var i = 1;
while ( i <= 16) {
  number = nGenerator();
  controln = list.indexOf(number);
  if (controln < 0) {
    list.push(number);
    i++;
  }
}

// L'utente deve inserire un numero
lose = 0;
wins = 0;

for (i = 1; i < 84; i++) {
  puntata = parseInt(prompt("Inserisci un numero da 1 a 100"));
  numb = [];
  tentativi = 3 - lose;
  numb.push(puntata);

  if (list.includes(puntata)) {
    alert("BOOM!!!" + " hai ancora" + tentativi + " tentativi")
    lose = lose + 1;
  }
  else {
    wins = wins + 1;
    alert("Complimenti hai vinto per " + wins + " volte");
  }
  if (tentativi == 0){
    alert("GAME OVER!");
    i = 84;
  }
}
