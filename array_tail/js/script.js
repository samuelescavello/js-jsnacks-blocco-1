// Creiamo un array chiedendo all'utente quanti elementi dovrà 
// contenere e generando tanti numeri casuali 
// (compresi nell'intervallo da 1 a 100) per quanti sono gli 
// elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della 
// coda non sia più grande del numero di elementi totali dell'array

let bottone = document.getElementById('btncoda')
let testo = document.getElementById('testo')
bottone.addEventListener('click', function(){

    let numarray = [];
    let user = parseInt(document.getElementById('inputcoda').value);
    let user2 = parseInt(document.getElementById('inputcoda2').value);
    for (let i = 0 ; i < user ; i++ ){
        numarray.push( getRndInteger(1, 100));
    }
    if (user < user2){
        testo.innerHTML = 'ATTENZIONE il numero da stampare deve essere minore del numero totale'
    }else {
        let newarray = numarray.slice(-user2);
        testo.innerHTML = newarray
    }

    

})







function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}