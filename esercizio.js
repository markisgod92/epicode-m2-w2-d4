// 23/05/2024

// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
    cart: [10, 20, 30]
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
    cart: [50, 18, 5]
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
    cart: [65, 210, 130]
}

const ila = {
    name: "Ila",
    lastName: "Mooney",
    isAmbassador: true,
    cart: [80, 16, 44]
}

const shippingCost = 50
let user = paul //cambia il valore qui per provare se il tuo algoritmo funziona!


// funzione per l'acquisto

function buy(user) {

    let carrello = 0;
    let subtotale;
    let checkout;

    // somma degli articoli nel carrello
    for (i = 0; i < user.cart.length; i++) {
        carrello += user.cart[i];
    }

    // applicazione sconto se ambassador
    if (user.isAmbassador === true) {
        subtotale = carrello - (carrello * 0.3);
    } else {
        subtotale = carrello;
    };

    // applicazione spedizione se < 100
    if (subtotale < 100) {
        checkout = subtotale + shippingCost;
        console.log(`${user.name} paga ${checkout.toFixed(2)}, spedizione compresa. Dovrebbe spendere altri ${(100 - subtotale).toFixed(2)} per usufruire della spedizione gratuita.`);
    } else {
        checkout = subtotale;
        console.log(`${user.name} paga ${checkout.toFixed(2)} con la spedizione gratuita.`);
    }
};

buy(marco)


// array di utenti
let users = [];

users.push(marco, paul, amy, ila);

console.log(users)


// loop di stampa e array di ambassador
let ambassadors = [];

for (i = 0; i < users.length; i++) {
    if (users[i].isAmbassador === true) {
        console.log(`${users[i].name} ${users[i].lastName} è un ambassador.`);
        ambassadors.push(users[i]);
    } else {
        console.log(`${users[i].name} ${users[i].lastName} non è un ambassador.`);
    };
};

console.log(ambassadors)