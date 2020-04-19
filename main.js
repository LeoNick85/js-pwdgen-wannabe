//Richiedo il nome all'utente, dopo aver definito la relativa variabile
var nome_utente = "";
nome_utente = prompt("Inserisci il tuo nome:");

//Richiedo il cognome all'utente, dopo aver definito la relativa variabile
var cognome_utente = "";
cognome_utente = prompt("Inserisci il tuo cognome:");

//Richiedo il colore preferito all'utente, dopo aver definito la relativa variabile
var colore_preferito_utente = "";
colore_preferito_utente = prompt("Inserisci il tuo colore preferito:");

//Combino le variabili per formare la password nella relativa variabile password e la stampo a video
var password_generated = nome_utente + cognome_utente + colore_preferito_utente + "20"
console.log(password_generated);
document.getElementById('password').innerHTML = password_generated;
