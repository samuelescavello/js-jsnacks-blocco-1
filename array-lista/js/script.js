// 1. TuttiFrutti
// Cartella array-lista
// Descrizione:
// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"



let fgame = document.getElementById('fruitgame')
fgame.addEventListener('click', function(){
 let frigo = ['banana', 'mela', 'pera', 'ciliegia', 
'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'
 ]
frigo.unshift('pesca');
let search = document.getElementById('searchfruit').value

let trovato = false;


for(let i = 0 ; i < frigo.length ; i++){
    if(search === frigo[i]){
        trovato = true;
    }
}

let fruttaEs = document.getElementById('frutta')

if (trovato){
    fruttaEs.innerHTML= 'Trovato! Devo solo preparare il cocktail.'
}else{
    fruttaEs.innerHTML= 'Oh no, devo uscire a comprare la frutta!'
}

}) 
