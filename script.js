// Variabelen en constanten
let naam = "naam van jouw plankton";
let tamagotchiNaam = "";
let honger = 50;
let training = 50;
let geluk = 50;
let interval;

// Invoer naam tamagotchi
document.querySelector('h1').textContent = naam;

// Functie om de naam van de Tamagotchi in te stellen en de startstatus van de balken bij te werken
function verwerkFormulier(event) {
    event.preventDefault();
    tamagotchiNaam = document.querySelector('.naaminput').value;
    document.querySelector('h1').textContent = tamagotchiNaam;
    updateBars();
    startInterval();
}

document.querySelector('form').addEventListener('submit', verwerkFormulier);

// Functie om de voortgangsbalken bij te werken
function updateBars() {
    document.getElementById('hongerWaarde').value = honger;
    document.getElementById('trainWaarde').value = training;
    document.getElementById('aaiWaarde').value = geluk;
    checkStatus();
}

// Functie om de status van de Tamagotchi te controleren en afbeelding dienovereenkomstig te wijzigen

// // bronnen
// // :https://theadventuresofgarythesnail.fandom.com/wiki/Overweight_Plankton, 
// // https://spongebob.fandom.com/wiki/The_Ghost_of_Plankton?file=The_Ghost_of_Plankton_028.png
// // https://www.deviantart.com/redhead64/art/REQUEST-Plank-Ton-977978968
// //https://kidsnextdoorfanfiction.fandom.com/wiki/Sheldon_J._Plankton
// // hulp gekregen van Daan 

function checkStatus() {
    if (honger <= 0 || training <= 0 || geluk <= 0) {
        clearInterval(interval);
        document.querySelector('h2').textContent = "Je Tamagotchi is dood!";
        document.querySelector('img').src = './assets/Plankton_dood.png';
    } else if (honger <= 30) {
        document.querySelector('img').src = './assets/Plankton_boos.png';
    } else if (honger >= 90) {
        document.querySelector('img').src = './assets/Plankton_dik.png';
    } else if (geluk >= 90) {
        document.querySelector('img').src = './assets/Plankton_cute.png';
    } else if (training >= 90) {
        document.querySelector('img').src = './assets/Plankton_gespierd.png';
    } else {
        document.querySelector('img').src = './assets/Plankton_normaal.webp';
    }
}

// Event listeners toevoegen

function voedselOmhoog() {
    honger += 10;
    if (honger > 100) {
        honger = 100;
    }
    updateBars();
};

document.getElementById('voedselButton').addEventListener('click', voedselOmhoog)
document.getElementById('trainButton').addEventListener('click', function () {
    training += 10;
    if (training > 100) {
        training = 100;
    }
    updateBars();
});


document.getElementById('aaiButton').addEventListener('click', function () {
    geluk += 10;
    if (geluk > 100) {
        geluk = 100;
    }
    updateBars();
});

// Functie om de balken langzaam te laten afnemen
function decreaseBars() {
    honger -= 3;
    training -= 3;
    geluk -= 3;
    updateBars();
}

// Functie om interval te starten
function startInterval() {
    interval = setInterval(decreaseBars, 1000); // 1000ms = 1 seconde
}