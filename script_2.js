let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorielle (number)
{
    if (number === 0)
      { return 1; }
    else
      { return number * factorielle( number - 1 ); }
}

console.log(`Le Resultat est, ${factorielle(number)} !`)