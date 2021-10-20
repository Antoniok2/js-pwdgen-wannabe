// Chiedere all'utente Nome, Cognome e colore preferito per generare una password con alla fine il numero predefinito 21

// Chiedo all'utente il suo nome
let nome = prompt("Inserisci il tuo nome");
console.log(nome);

// Chiedo all'utente il suo cognome
let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

// Chiedo all'utente il suo colore preferito
let colorePreferito = prompt("Il tuo colore preferito? ")
console.log(colorePreferito);

// Numero predefinito inserito alla fine della password
const numeroPredefinito = 21;

// Mostrerò la password all'utente
const password = nome + cognome + colorePreferito + numeroPredefinito;

document.getElementById("password").innerHTML =  `La tua password è: ${password}`;


