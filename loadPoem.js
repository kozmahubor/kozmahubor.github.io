const urlParams = new URLSearchParams(window.location.search);
const displayParam = urlParams.get('display');

if (displayParam === 'block') {
  const content = document.getElementById('content');
  content.style.display = 'block';
}



function displayChangeOnClick(id) {
  var wholePoem = document.getElementById(id);
  var intro = document.getElementById(id+"_intro");
  var button = document.getElementById(id+"_button");
  if (wholePoem.style.display == "block") {
    wholePoem.style.display = "none";
    intro.style.display = "block";
    button.innerText = "See more..."
  } else {
    wholePoem.style.display = "block";
    intro.style.display = "none";
    button.innerText = "See less..."
  }
}

document.addEventListener("DOMContentLoaded", () => downloadAllPoems(links));

const links = [
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_365_nap.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_alom.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_a_te_napod.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_bizonytan_csend.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_csendes_este.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_egy_elfelejthetetlen_emlek.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_egy_not_szeretek.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_elrejtett_eleredt_erzelmek.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_mama.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_meg_nem_ertett_fajdalom.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_melleted_lenni.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_mirol_nem_beszelek.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_szerelems_uzenet.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_szerelmi_elet.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_szerelmi_vagy.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_tegnap_reggel.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_tizedik_honap.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_varok_rad.txt",
  "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/reniverss_ez_meg_nem_a_veg.txt",
];
1
async function downloadPoem(file) {
  return await fetch(file)
    .then((response) => response.text())
    .then((text) => text.split(/\r?\n/));
}

function showPoemInHtml(file) {
  const element = document.getElementById("content");

  //WholePOEM
  const containerDiv = document.createElement("div");
  containerDiv.id = file[0].replace(" ", "_") + "_poem";
  element.appendChild(containerDiv);

  //title(h2)
  const h2 = document.createElement("h2");
  h2.id = file[0].replace(" ", "_") + "_intro";
  h2.innerText = `${file[0]}\n${file[1]}\n${file[2]}\n${file[3]}\n${file[4]}\n`;
  containerDiv.appendChild(h2);

  //container (div)
  const container = document.createElement("div");
  container.id = file[0].replace(" ", "_");
  container.style.display = "none"
  containerDiv.appendChild(container);

  //poemData (p)
  file.forEach((part) => {
    const p = document.createElement("p");
    p.textContent = part.trim();
    container.appendChild(p);
  });
  //button
  const button = document.createElement("button");
  button.id = file[0].replace(" ", "_") + "_button";
  button.innerText = "Show more..."
  button.addEventListener("click", () => displayChangeOnClick(container.id))
  containerDiv.appendChild(button);
}

function downloadAllPoems(links) {
  for (let i = 0; i < links.length; i++) {
    console.log(links[i]);
    downloadPoem(links[i]).then((fullPoem) => showPoemInHtml(fullPoem));
  }
}


