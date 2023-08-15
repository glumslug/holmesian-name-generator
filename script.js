function vowel() {
  const vl = ["A", "E", "I", "O", "U", "Y"][Math.floor(Math.random() * 6)];
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
  [
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
  ],
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
let prevChoice = "";
function generateTitle() {
  if (firstClick) {
    nameSpace.classList.remove("hidden");
    copyButton.classList.remove("hidden");
    pinButton.classList.remove("hidden");

    firstClick = false;
  }
  let choice = titles[Math.floor(Math.random() * 20)];
  if (choice === prevChoice) {
    generateTitle();
    return;
  }
  prevChoice = choice;
  let titleContainer = document.getElementById("characterTitle");
  titleContainer.innerHTML = "";

  if (Array.isArray(choice)) {
    const cont = document.createElement("div");
    cont.classList.add("rel");
    const p = document.createElement("p");
    let i = Math.floor(Math.random() * choice.length);
    p.innerText = choice[i];
    p.classList.add("syl", "option");
    const changer = document.createElement("button");
    changer.classList.add("changer");
    changer.innerHTML = refSym;

    changer.addEventListener("click", () => {
      if (i < choice.length - 1) {
        i++;
      } else {
        i = 0;
      }
      p.innerText = choice[i];
    });
    cont.appendChild(p);
    cont.appendChild(changer);
    p.addEventListener("click", () => {
      titleContainer.innerHTML = "";
      tt = true;
      if (nameSpace.innerText.length === 0) {
        resetAll();
      }
    });
    titleContainer.appendChild(cont);
  } else {
    const p = document.createElement("p");
    p.innerText = choice;
    p.classList.add("syl");
    p.addEventListener("click", () => {
      titleContainer.innerHTML = "";
      if (nameSpace.innerText.length === 0) {
        resetAll();
      }
    });
    titleContainer.appendChild(p);
  }
}

let firstClick = true;
function generateName(position) {
  if (firstClick) {
    nameSpace.classList.remove("hidden");
    copyButton.classList.remove("hidden");
    pinButton.classList.remove("hidden");

    firstClick = false;
  }

  let nameContainer = document.getElementById(position);
  nameContainer.innerText = "";

  let numSyl = Math.floor(Math.random() * 100);
  numSyl = numSyl < 11 ? 1 : numSyl < 71 ? 2 : numSyl < 71 ? 3 : 4;

  for (let i = 0; i < numSyl; i++) {
    const rn = Math.floor(Math.random() * 100);
    let syl = syllables[rn];

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

      p.addEventListener("click", () => {
        nameContainer.innerHTML = "";
        nameContainer.classList.remove("strike");
        position === "last" ? (ls = true) : (fs = true);
        if (nameSpace.innerText.length === 0) {
          resetAll();
        }
      });
      p.addEventListener("mouseover", () => {
        nameContainer.classList.add("strike");
      });
      p.addEventListener("mouseout", () => {
        nameContainer.classList.remove("strike");
      });

      nameContainer.appendChild(cont);
    } else {
      const p = document.createElement("p");
      p.innerText = i === 0 ? syl : syl.toLowerCase();
      p.classList.add("syl");

      p.addEventListener("click", () => {
        nameContainer.innerHTML = "";
        nameContainer.classList.remove("strike");
        if (nameSpace.innerText.length === 0) {
          resetAll();
        }

        position === "last" ? (ls = true) : (fs = true);
      });
      p.addEventListener("mouseover", () => {
        nameContainer.classList.add("strike");
      });
      p.addEventListener("mouseout", () => {
        nameContainer.classList.remove("strike");
      });

      nameContainer.appendChild(p);
    }
  }
}
// Get containers and buttons
const nameSpace = document.getElementById("name-space");
const pinContainer = document.getElementById("pin-container");

const buttonGroup = document.getElementById("button-group");
const copyButton = document.getElementById("copy-button");
const pinButton = document.getElementById("pin-button");
const reroll = document.querySelectorAll(".reroll");
let fr = true;
let ls = true;
let tt = true;
reroll.forEach((node) => {
  const ogText = node.innerText;

  node.addEventListener("click", () => {
    node.innerText = ogText;
    ogText === "First Name"
      ? (fr = false)
      : ogText === "Last Name"
      ? (ls = false)
      : ogText === "Title"
      ? (tt = false)
      : null;
  });
  node.addEventListener("mouseover", () => {
    switch (ogText) {
      case "First Name":
        node.style.width = "125px";
        fr ? (node.innerText = "Roll") : (node.innerText = "Re-Roll");
        break;
      case "Last Name":
        node.style.width = "120px";
        ls ? (node.innerText = "Roll") : (node.innerText = "Re-Roll");
        break;
      case "Title":
        node.style.width = "60px";
        tt ? (node.innerText = "Roll") : (node.innerText = "Re-");
        break;
      default:
        break;
    }
  });
  node.addEventListener("mouseout", () => {
    node.innerText = ogText;
  });
});
const copyBtnSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b09475" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>';
// regenerate pinned names from local storage
function displayPinned() {
  localStorage.getItem("names") || localStorage.setItem("names", "[]");
  pinContainer.innerHTML = "";
  //   console.log(localStorage.getItem("names"));
  const pinList = JSON.parse(localStorage.getItem("names"));
  if (pinList.length === 0) {
    pinContainer.classList.add("hidden");

    return;
  }
  pinContainer.classList.remove("hidden");

  pinList.forEach((name) => {
    let d = document.createElement("div");
    d.classList.add("flex-row");
    let p = document.createElement("p");
    let b = document.createElement("button");
    let c = document.createElement("button");
    c.setAttribute("id", "copy-pinned");
    c.innerHTML = copyBtnSvg;
    c.addEventListener("click", () => {
      navigator.clipboard.writeText(name);
    });
    b.innerHTML = "&times;";
    b.classList.add("remove");
    b.addEventListener("click", () => {
      let currNames = JSON.parse(localStorage.getItem("names"));
      currNames.splice(currNames.indexOf(name), 1);
      //   console.log(currNames);
      localStorage.setItem("names", JSON.stringify(currNames));
      displayPinned();
    });
    p.innerText = name;
    d.append(p, c, b);
    pinContainer.append(d);
  });
}
displayPinned();
function copyName() {
  navigator.clipboard.writeText(
    [...nameSpace.querySelectorAll(".nameIdv")]
      .map((idv) => idv.textContent.replace(/[^a-zA-Z ]/g, ""))
      .join(" ")
  );
}
function pinName() {
  const nameToPin = [...nameSpace.querySelectorAll(".nameIdv")]
    .map((idv) => idv.textContent.replace(/[^a-zA-Z ]/g, ""))
    .join(" ");
  let currNames = JSON.parse(localStorage.getItem("names")) || [];
  currNames.push(nameToPin);
  //   console.log(currNames);
  localStorage.setItem("names", JSON.stringify(currNames));
  displayPinned();
}

function resetAll() {
  nameSpace.querySelectorAll("div").forEach((idv) => (idv.innerHTML = ""));
  nameSpace.classList.add("hidden");
  copyButton.classList.add("hidden");
  pinButton.classList.add("hidden");
  firstClick = true;

  fr = true;
  ls = true;
  tt = true;
}
