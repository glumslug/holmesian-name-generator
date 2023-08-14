function vowel() {
  const vl = [["A", "E", "I", "O", "U", "Y"]][Math.floor(Math.random() * 6)];
  return vl;
}
const syllables = [
  "Af",
  ["Al", "Ael"],
  "Baf",
  "Bel",
  ["Ber", "Berd"],
  "Bes",
  "Bo",
  "Bor",
  "Bran",
  "Bru",
  "Car",
  "Chor",
  "Cig",
  "Cla",
  "Da",
  ["Do", "Doh"],
  "Don",
  "Dor",
  ["Dre", "Dreb"],
  ["Eg", "Feg"],
  "Er",
  "Es",
  "Ev",
  ["Fal", "Ful"],
  ["Fan", "Fen"],
  "Far",
  "Fum",
  ["Ga", "Gahn"],
  "Gaith",
  "Gar",
  ["Gen", "Glen"],
  "Go",
  "Gram",
  "Ha",
  ["Hag", "Harg"],
  "Ho",
  "Ig",
  "Ka",
  "Kar",
  ["Kra", "Krac"],
  "Ky",
  "Lag",
  "Lap",
  "Le",
  "Lef",
  "Lis",
  "Lo",
  "Lu",
  "Mal",
  "Mar",
  "Me",
  "Mez",
  "Mich",
  ["Mil", "Mul"],
  "Mo",
  "Mun",
  "Mus",
  "Ned",
  "Nic",
  "No",
  "Nor",
  "Nu",
  "Os",
  "Pal",
  "Pen",
  "Phil",
  ["Po", "Poy"],
  ["Pos", "Pus"],
  "Pres",
  "Quas",
  "Que",
  "Rag",
  "Ralt",
  "Ram",
  ["Rin", "Ron"],
  "Ris",
  "Ro",
  "Sa",
  "See",
  ["Ser", "Sur"],
  "Sho",
  "Sit",
  "Spor",
  "Tar",
  "Tas",
  ["Ten", "Ton"],
  "To",
  "Tra",
  ["Treb", "Tred"],
  "Tue",
  "Vak",
  "Ven",
  "Web",
  "Wil",
  "Yor",
  "Zef",
  "Zell",
  "Zen",
  "Zo",
  vowel(),
];
function getGen() {
  const vl = [
    "the First",
    "the Second",
    "the Third",
    "the Fourth",
    "the Fifth",
    "the Sixth",
    "the Seventh",
    "the Eighth",
    "the Ninth",
    "the Tenth",
    "the Eleventh",
    "the Twelfth",
    "the Thirteenth",
    "the Fourteenth",
    "the Fifteenth",
    "the Sixteenth",
    "the Seventeenth",
    "the Eighteenth",
    "the Nineteenth",
    "the Twentieth",
  ][Math.floor(Math.random() * 20)];
  return vl;
}
let titles = [
  [
    "of the North",
    "of the South",
    "of the East",
    "of the West",
    "of the City",
    "of the Hills",
    "of the Mountains",
    "of the Plains",
    "of the Woods",
    "of the Coast",
  ],
  "the Bold",
  "the Daring",
  ["the Barbarian", "the Civilized"],
  "the Battler",
  ["the Black", "the Blue", "the Brown", "the Green", "the Red", "the Yellow"],
  ["the Fearless", "the Brave"],
  ["the Fair", "the Foul", "the Lovely", "the Loathsome"],
  getGen(),
  ["the Gentle", "the Cruel"],
  "the Great",
  ["the Merciful", "the Merciless"],
  "the Mighty",
  ["the Mysterious", "the Unknown"],
  ["the Old", "the Young", "the Boy", "the Girl"],
  ["the Quick", "the Slow"],
  ["the Quiet", "the Silent", "the Loud"],
  ["the Steady", "the Unready"],
  ["the Traveller", "the Wanderer"],
  "the Unexpected",
  ["the Hooded", "the Cloaked", "the Robed"],
];
const refSym =
  '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#525252" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg>';
function generateTitle() {
  let choice = titles[Math.floor(Math.random() * 20)];
  let titleContainer = document.getElementById("characterTitle");
  titleContainer.innerHTML = "";

  if (Array.isArray(choice)) {
    const cont = document.createElement("div");
    cont.classList.add("rel");
    const p = document.createElement("p");
    p.innerText = choice[0];
    p.classList.add("syl", "option");
    const changer = document.createElement("button");
    changer.classList.add("changer");
    changer.innerHTML = refSym;
    changer.addEventListener("click", () => {
      if (p.innerText === choice[0]) {
        p.innerText = choice[1];
      } else {
        p.innerText = choice[0];
      }
    });
    cont.appendChild(p);
    cont.appendChild(changer);
    p.addEventListener("click", () => {
      titleContainer.innerHTML = "";
    });
    titleContainer.appendChild(cont);
  } else {
    const p = document.createElement("p");
    p.innerText = choice;
    p.classList.add("syl");
    p.addEventListener("click", () => {
      titleContainer.innerHTML = "";
    });
    titleContainer.appendChild(p);
  }
}

let firstClick = true;
function generateName(position) {
  if (firstClick && position === "first") {
    nameSpace.classList.remove("hidden");
    copyButton.classList.remove("hidden");
    document.getElementById("generateLast").disabled = false;
    document.getElementById("generateTitle").disabled = false;
    firstClick = false;
  }

  let nameContainer = document.getElementById(position);
  nameContainer.innerText = "";

  let numSyl = Math.floor(Math.random() * 100);
  numSyl = numSyl < 11 ? 1 : numSyl < 71 ? 2 : numSyl < 71 ? 3 : 4;

  for (let i = 0; i < numSyl; i++) {
    let syl = syllables[Math.floor(Math.random() * 100)];
    console.log(syl);
    if (Array.isArray(syl)) {
      const cont = document.createElement("div");
      cont.classList.add("rel");
      const p = document.createElement("p");
      p.innerText = i === 0 ? syl[0] : syl[0].toLowerCase();
      p.classList.add("syl", "option");
      const changer = document.createElement("button");
      changer.classList.add("changer");
      changer.innerHTML = refSym;
      changer.addEventListener("click", () => {
        if (p.innerText.toLowerCase() === syl[0].toLowerCase()) {
          p.innerText = i === 0 ? syl[1] : syl[1].toLowerCase();
        } else {
          p.innerText = i === 0 ? syl[0] : syl[0].toLowerCase();
        }
      });
      cont.appendChild(p);
      cont.appendChild(changer);
      if (position === "last") {
        p.addEventListener("click", () => {
          nameContainer.innerHTML = "";
        });
      }
      nameContainer.appendChild(cont);
    } else {
      const p = document.createElement("p");
      p.innerText = i === 0 ? syl : syl.toLowerCase();
      p.classList.add("syl");
      if (position === "last") {
        p.addEventListener("click", () => {
          nameContainer.innerHTML = "";
        });
      }
      nameContainer.appendChild(p);
    }
  }
}

const nameSpace = document.getElementById("name-space");
const buttonGroup = document.getElementById("button-group");
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(
    [...nameSpace.querySelectorAll(".nameIdv")]
      .map((idv) => idv.textContent.replace(/[^a-zA-Z ]/g, ""))
      .join(" ")
  );
});
let nameList = [];
function resetAll() {
  nameSpace.querySelectorAll("div").forEach((idv) => (idv.innerHTML = ""));
  nameSpace.classList.add("hidden");
  copyButton.classList.add("hidden");
  firstClick = true;
  document.getElementById("generateLast").disabled = true;
  document.getElementById("generateTitle").disabled = true;
}
