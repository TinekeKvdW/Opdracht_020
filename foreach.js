const color = ['yellow', 'blue', 'red', 'orange'];
color.forEach(color => console.log(color));

/*
Dit waren simpele oefeningen. De kern van deze oefening zit in het begrijpen van een for loop/ while loop ten opzichte van een array method. Beantwoord de volgende vragen en zet dit als comment onderin je file.

1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
> while loop 6 regels
> for loop 5 regels
2. Hoeveel regels neemt mijn forEach method in beslag?
> forEach 2 regels
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
> overzichtelijker in het toevoegen van waarden (index, value enzo). De kans dat je iets vergeet of verkeerd schrijft is kleiner. forEach vind ik makkelijker, is korter, overzichtelijker.
4. Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
*/
const animals = {
    tiger: '🐅',
    cat: '🐱',
    monkey: '🐒',
    elephant: '🐘',
    dog: 'dog'
};
Object.values(animals).forEach(val => console.log(val));

const number = [multiplier = 0, multiplier <= 10, multiplier++]
number.forEach(number => console.log(number));

let nrs = [1, 2, 3, 4, 5]
for (nrs = 0; nrs < 100; nrs++) {
    console.log(nrs);
}
// nrs.forEach(nrs i < 100; => console.log(nrs));