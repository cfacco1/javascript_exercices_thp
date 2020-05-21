const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70

console.log("Voici les entrepreneurs qui sont nes dans les seventies");

const entrepreneurs70 = entrepreneurs.filter(entrepreneur => entrepreneur.year > 1969 && entrepreneur.year < 1980);

console.log (entrepreneurs70)

// Sors une array qui contient le prénom et le nom des entrepreneurs

console.log("Tableau avec prenom et nom des entrepreneurs");

for( let entrepreneur in entrepreneurs) {
  console.log("" + entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last);
}

// Quel âge aurait chaque inventeur aujourd'hui ?

console.log("Age des entrepreneurs aujourd'hui");

for(let index in entrepreneurs) {
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " a " + (2020 - entrepreneurs[index].year) + " ans aujourd'hui");
}

// Trie les entrepreneurs par ordre alphabétique du nom de famille (https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript)

entrepreneurs.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last > b.last) { return 1; }
    return 0;
})

for( let entrepreneur in entrepreneurs) {
  console.log("" + entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last);
}