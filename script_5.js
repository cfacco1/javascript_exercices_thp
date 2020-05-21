const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?

console.log('Est-ce que tous les livres ont été au moins empruntés une fois ?');
for(let index in books) {;
  if (books[index].rented<= 1) {;
    console.log ("Non, un livre n'a pas été emprunté");
    } else {
      console.log ("tous les livres ont été empruntés au moins une fois");
    };
  };

// Quel est livre le plus emprunté ?

let booksRentedBest = books.sort(function (a, b) {;
  return b.rented - a.rented;
});
console.log("Quel est livre le moins emprunté ?");
console.log(booksRentedBest[0].title);

// Quel est le livre le moins emprunté ?

let booksRentedWorst = books.sort(function (a, b) {;
  return a.rented - b.rented;
});
console.log("Quel est livre le moins emprunté ?");
console.log(booksRentedWorst[0].title);

// Trouve le livre avec l'ID: 873495 ;

let BookFind = books.find(item => item.id == 873495);
console.log("Le livre avec l'ID: 873495 est :" + BookFind.title);

// Supprime le livre avec l'ID: 133712 ;

console.log("Supprime le livre avec l'ID: 133712" )
let bookDelete = books.findIndex(item => item.id === 133712);
books.splice(bookDelete,1);
console.log(books);

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log("Trie des livres par ordre alphabétique")
books.sort((a, b) => (a.title > b.title) ? 1 : -1);
console.log(books);