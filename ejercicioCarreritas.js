posicionInicial = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia" ];
console.log(posicionInicial); // Roberto Andrea Jorge Ramiro Sofía

posicionInicial.splice(2,1);
posicionInicial.unshift("Jorge");
console.log(posicionInicial); // Jorge Roberto Andrea Ramiro Sofia

posicionInicial.splice(3,1);
posicionInicial.unshift("Ramiro");
console.log(posicionInicial); // Ramiro Jorge Roberto Andrea Sofia

posicionInicial.splice(2,1); // Ramiro Jorge Andrea Sofia

posicionInicial[2]="Sofía"; // Ramiro Jorge Sofia Sofia

posicionInicial[3]="Andrea"; // Ramiro Jorge Sofia Andrea

console.log(posicionInicial); // Ramiro Jorge Sofia Andrea

posicionInicial.push="José";
console.log(posicionInicial); // Ramiro Jorge Sofia Andrea José