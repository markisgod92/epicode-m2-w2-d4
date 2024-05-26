// Esercizio 1: Trova il numero più grande
// Descrizione: Scrivi una funzione maxNumber che prende in input un ARRAY di numeri e restituisce il 
// numero più grande nell'array.

// es: maxNumber([1, 2, 3, 4, 5]); // -> l'output dovrebbe essere 5

function maxNumber(array) {
    let highest = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > highest) {
            highest = array[i];
        };
    }
    return highest;
};

console.log(maxNumber([1, 2, -15, 40, -75, 120]))



/*
Esercizio 2: Palindromo
Descrizione: Scrivi una funzione isPalindrome che prende in input una stringa e restituisce true se la stringa è un palindromo (si legge uguale da entrambi i lati) e false altrimenti.
*/

/*
isPalindrome("anna"); // true
isPalindrome("hello"); // false
*/

// suggerimento: metodi delle stringhe e degli array ti torneranno utili come ad esempio il metodo 
// reverse() (googlalo su MDN)

function isPalindrome(stringa) {
    let stringReversed = ``;
    
    for (i = stringa.length - 1; i >= 0; i--) {
        stringReversed += stringa[i];
    };

    return stringa === stringReversed;

}

console.log(isPalindrome("anna"))



/*
Esercizio 4: Somma di numeri pari
Descrizione: Scrivi una funzione sumEvenNumbers che prende in input un array di numeri e restituisce la somma di tutti i numeri pari nell'array.

sumEvenNumbers([10, 20, 30, 40]); // 100
*/

function sumEvenNumbers(array) {
    let sum = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    };

    return sum;

}

console.log(sumEvenNumbers([11, 22, 33, 44]))

/*
Esercizio 5: Rimuovi duplicati
Descrizione: Scrivi una funzione removeDuplicates che prende in input un array di numeri e restituisce un nuovo array senza duplicati.

suggerimento... includes() potrebbe essere il metodo che fa per te...o forse no?  

es: removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
*/

function removeDuplicates(array) {
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    };

    return newArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

/*
Esercizio 7: Contare vocali
Descrizione: Scrivi una funzione countVowels che prende in input una stringa e restituisce il numero di vocali presenti nella stringa.

countVowels("javascript"); // 3
*/

function countVowels(parola) {
    parola = parola.toLowerCase()
    const vocali = "aeiou";
    let vocaliParola = [];
    let contatore = 0;

    for (i = 0; i < parola.length; i++) {
        if (vocali.includes(parola[i]) && !vocaliParola.includes(parola[i])) {
            vocaliParola.push(parola[i]);
            contatore++;
        };
    };

    return `La parola contiene ${contatore} vocali: ${vocaliParola}.`;
};

console.log(countVowels("aiuola"))