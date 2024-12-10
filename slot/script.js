// Lista slika tvojih prijatelja (ovde stavljaš imena svojih slika)
const symbols = [
    "friend1.jpg",  // Prvi prijatelj
    "friend2.jpg",  // Drugi prijatelj
    "friend3.jpg",  // Treći prijatelj
    "friend4.jpg",  // Četvrti prijatelj
    "friend5.jpg"   // Peti prijatelj
];

// Funkcija za generisanje nasumičnih simbola (slika)
function generateReel() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

// Funkcija za spin
function spinReels() {
    // Generišemo nasumične slike za 3 kolone
    const reel1 = generateReel();
    const reel2 = generateReel();
    const reel3 = generateReel();

    // Prikazujemo slike na ekranu
    document.getElementById('reel1').innerHTML = `<img src="images/${reel1}" alt="${reel1}">`;
    document.getElementById('reel2').innerHTML = `<img src="images/${reel2}" alt="${reel2}">`;
    document.getElementById('reel3').innerHTML = `<img src="images/${reel3}" alt="${reel3}">`;

    // Izračunavamo rezultat
    calculatePrize(reel1, reel2, reel3);
}

// Funkcija za izračunavanje dobitka
function calculatePrize(reel1, reel2, reel3) {
    // Ako su svi simboli isti, igrač pobedi
    if (reel1 === reel2 && reel2 === reel3) {
        document.getElementById('prize').innerText = "100"; // Pobedni iznos
    } else {
        document.getElementById('prize').innerText = "0"; // Nema dobitka
    }
}

// Povezivanje dugmeta sa funkcijom spin
document.getElementById('spinButton').addEventListener('click', spinReels);
