let cards = [];
let currentIndex = 0;
let wrongPile = [];

async function loadCards() {
  const res = await fetch("/cards");
  const files = await res.json();

  for (let file of files) {
    const r = await fetch(`cards/${file}`);
    const t = await r.text();
    const data = jsyaml.load(t);

    // YAML enthält direkt eine Liste von Karten
    data.forEach(card => {
      card.id = card.thema + "|" + card.frage;
      cards.push(card);
    });
  }

  nextCard();
}

function nextCard() {
  currentIndex = weightedRandomIndex();
  showCard();
}

function showCard() {
  if (currentIndex >= cards.length) {
    if (wrongPile.length > 0) {
      cards = [...wrongPile];
      wrongPile = [];
      currentIndex = 0;
    } else {
      alert("Fertig");
      return;
    }
  }

  const card = cards[currentIndex];

  document.getElementById("front").innerText =
    `${card.thema}\n\n${card.frage}`;

  document.getElementById("back").innerText =
    card.antwort.join("\n");

  document.getElementById("front").classList.remove("hidden");
  document.getElementById("back").classList.add("hidden");
  document.getElementById("controls").classList.add("hidden");
}

function weightedRandomIndex() {
  let weights = cards.map(card => {
    let stats = JSON.parse(localStorage.getItem(card.id)) || {
      richtig: 0,
      falsch: 0
    };

    return 1 + (stats.falsch * 3) - (stats.richtig * 0.5);
  });

  let total = weights.reduce((a,b) => a+b, 0);
  let random = Math.random() * total;

  for (let i = 0; i < weights.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      return i;
    }
  }

  return 0;
}

function saveResult(card, correct) {
  let stats = JSON.parse(localStorage.getItem(card.id)) || {
    richtig: 0,
    falsch: 0
  };

  if (correct) {
    stats.richtig++;
  } else {
    stats.falsch++;
  }

  localStorage.setItem(card.id, JSON.stringify(stats));
}

document.getElementById("card").addEventListener("click", () => {
  document.getElementById("front").classList.add("hidden");
  document.getElementById("back").classList.remove("hidden");
  document.getElementById("controls").classList.remove("hidden");
});

document.getElementById("correct").addEventListener("click", () => {
  saveResult(cards[currentIndex], true);
  nextCard();
});

document.getElementById("wrong").addEventListener("click", () => {
  wrongPile.push(cards[currentIndex]);
  saveResult(cards[currentIndex], false);
  nextCard();
});

loadCards();
