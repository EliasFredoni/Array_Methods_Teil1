let adresse = ["In den Birken", 42113, "Wuppertal", "NRW"];
let besteFreunde = ["Fred", "Lorena", "Chriz", "Riccarda"];
let person = ["Elias", "Fredoni", "Yles", 37, "Sport & Natur", "Wuppertal", "SuperCode"];

console.log([adresse], [besteFreunde], [person]);

person.push([besteFreunde], [adresse]);

console.log(person);

/*-------------------LEV 1.2---------------------*/

console.log(person.length);
console.log(adresse.length);
console.log(besteFreunde.length);

/*----------------LEV 1.2 3 ARRAY MÖGLICHKEITEN ! -------*/

let meineTrainer1 = ["Eric", "Steffen", "Simon", "Ahmed"];
console.log(meineTrainer1);

let meineTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed");
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";
console.log(meineTrainer3);

/*-----------LEV 1.3-------------------------*/

let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);
numberArray[4];
console.log(numberArray[4]);
numberArray[0]
console.log(numberArray[0]);
numberArray[5]
console.log(numberArray[5]);

/*------------Lev 1.4----------------------*/

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.";
let meinText2 = "Wie geht es dir heute?";
let meinText3 = "Heute ist ein großer Tag für uns.";

let split1 = meinText1.split();
let split2 = meinText2.split("");
let split3 = meinText3.split(" ");
console.log(meinText1.split());
console.log(meinText2.split(""));
console.log(meinText3.split(" "));

/*---------------LEV 1.5-------------------*/

let songs = ["Bohemian Rhapsody", "Stairway To Heaven", "Hotel California"];
console.log(songs);
let totalSongs = songs.push("Sweet Child O'Mine");
console.log(totalSongs);

let artists = ["michael", "elvis"];
let newArtist = artists.push("justin", "charlie");
console.log(artists);
artists.push("Maxman", "Steffen", "Mr. X");
console.log(artists);

let besteFussballerAllerZeiten = ["Die besten fünf Fußballer", "Füge drei Torhüter hinzu"];
console.log(besteFussballerAllerZeiten);

let fussballer = besteFussballerAllerZeiten.push("Linoel Messi");
console.log(besteFussballerAllerZeiten);

/*-----------------LEV 1.6---------------------*/

console.log(songs.pop());

/*----------------LEV 1.7--------------------*/

let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
console.log(deutscheGerichte.unshift("Rinderbrateneintopf", "Krustenbraten", "Kartoffelsalat", "Spätzle", "Maultaschen"));
console.log(deutscheGerichte);

/*---------------LEV 1.8----------------------*/

//deutscheGerichte[5];


let nichtGut = deutscheGerichte.shift(deutscheGerichte[1, 3]);
console.log(nichtGut); // ?? Funktioniert nicht wie es soll

// console.log(deutscheGerichte.shift())

/*----------------LEV 1.9--------------------*/

let pushPop = [23, 54, 75];
let push = pushPop.push(5);
pushPop.unshift(5);
pushPop.pop();
pushPop.pop();
pushPop.shift([1, 3]); // ??
console.log(pushPop);

/*---------------LEV 1.12---------------------*/

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let array1 = array.slice(0);
let Img1 = array.slice(5, 10);
let Img2 = array.slice(2, 9);
console.log(Img1);
console.log(Img2);

/*---------------LEV 5.2--------------------*/

let heroUndEnemy = [["Batman", "The Joker"], ["Professor X, Magneto"], ["Thor, Loki"]];
console.log(heroUndEnemy);

let heroUndGegner = heroUndEnemy.push(["Spiderman", "Lex Luthor"], ["Wolverine", "Sabretooth"], ["Ghost Rider", "Mephisto"]);
console.log(heroUndEnemy);

/*
let heroUndEnemy1 = ["Batman, The Joker"];
let heroUndEnemy2 = ["Professor X, Magneto"];
let heroUndEnemy3 = ["Thor, Loki"];

let heroUndGegner1 = ["Spiderman", "Lex Luthor"];
let heroUndGegner2 = ["Wolverine", "Sabretooth"];
let heroUndGegner3 = ["Ghost Rider", "Mephisto"];

console.log([heroUndEnemy1], [heroUndGegner2], [heroUndGegner3], [heroUndGegner1], [heroUndGegner2], [heroUndGegner3]);
*/



