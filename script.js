function displayChangeOnClick() {
  var element = document.getElementById("poem1");
  var element2 = document.getElementById("intro")
  if (element.style.display == "block") {
      element.style.display = "none";
      element2.style.display = "block";
  }else {
      element.style.display = "block"; element2.style.display = "none";
  }

  
}

const links = [
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_365_nap.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_alom.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_a_te_napod.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_bizonytan_csend.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_csendes_este.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_egy_elfelejthetetlen_emlek.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_egy_not_szeretek.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_elrejtett_eleredt_erzelmek.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_mama.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_meg_nem_ertett_fajdalom.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_melleted_lenni.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_mirol_nem_beszelek.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_szerelems_uzenet.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_szerelmi_elet.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_szerelmi_vagy.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_tegnap_reggel.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_tizedik_honap.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_varok_rad.txt",
  "https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/reniverss_ez_meg_nem_a_veg.txt]",
]

async function downloadPoem(file) {
  return await fetch(file)
    .then(response => response.text())
    .then(text => text.split(/\r?\n/))
};
function showPoemInHtml(file) {
const element = document.getElementById("content");
//WholePOEM
  const containerDiv = document.createElement('div');
  containerDiv.id = file[0].replace(" ", "_") + "_poem";
  element.appendChild(containerDiv);
//title(h2)
  const h2 = document.createElement('h2');
  h2.id = file[0].replace(" ", "_") + "_intro";
  h2.innerText = `${file[0]}\n${file[1]}\n${file[2]}\n${file[3]}\n${file[4]}\n`;
  containerDiv.appendChild(h2)
//container (div)
  const container = document.createElement('div');
  container.id = file[0].replace(" ", "_");
  containerDiv.appendChild(container);
//poemData (p)
  file.forEach(part => {
    const p = document.createElement("p");
    p.textContent = part.trim();
    container.appendChild(p);
//button
  const button = document.createElement('button');
  button.id = file[0].replace(" ", "_") + "_button";
  containerDiv.appendChild(button);
  });
} 

function downloadAllPoems(links) {
  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    downloadPoem(links[i])
    .then(fullPoem => showPoemInHtml(fullPoem));
  }
}


//amikor betöltött az oldal
document.addEventListener("DOMContentLoaded", () => downloadPoem(links));


  /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
  fetch('https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers.txt')
  .then(response => response.text())
    .then(data => {
      const text = data;
      console.log(text);
      const parts = text.split(/\r?\n/);

      const container = document.getElementById("container");
      parts.forEach(part => {
        const p1 = document.createElement("p1");
        p1.textContent = part.trim();
        container.appendChild(p1);
      });
    });1
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
  fetch('https://raw.githubusercontent.com/Hubor-Hunor/hubor-hunor.github.io/main/poems/renivers_365_nap.txt')
  .then(response => response.text())
    .then(data => {
      const text = data;
      console.log(text);
      const parts = text.split(/\r?\n/);

      const container = document.getElementById("container");
      parts.forEach2(part => {
        const p2 = document.createElement("p2");
        p2.textContent = part.trim();
        container.appendChild(p2);
      });
    });
});
/*
fetch('./renivers_csendes_este.txt')
  .then(response => response.text())
  .then(data => {
    const text = data;
    console.log(text);
    const parts = text.split("#");

    document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById("container");
        parts.forEach(part => {
        const div = document.createElement("div");
        div.textContent = part.trim(); // remove any leading or trailing whitespace
        container.appendChild(div)})});
  })
*/