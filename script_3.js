let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu ?"
);

let brick = "#";
let i = 1

// Loop classique

while (i<= number) {
    let line  = "";
    for (let k = 0; k < (number-i); k++) {
        line += " "  
    }
    for (let index = 0; index < i; index++) {
        line = line + brick;
    }
    i++;
    console.log(line);
}