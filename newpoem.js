function displayChangeOnClick(id) {
    var wholePoem = document.getElementById(id);
    var intro = document.getElementById(id.toLowerCase()+"_intro");
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
    "https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/poems/renivers_szerelmes_gondolatok.txt",
  ];
  1
  async function downloadPoem(file) {
    return await fetch(file)
      .then((response) => response.text())
      .then((text) => text.split(/\r?\n/));
  }
  const suggestions = [];
  let counter = 0;
  function showPoemInHtml(file) {
    const element = document.getElementById("content");
  
    //WholePOEM
    const containerDiv = document.createElement("div");
    containerDiv.id = file[0].replace(" ", "_") + "_poem";
    element.appendChild(containerDiv);
  
    //title(h2)
    const h2 = document.createElement("h2");
  
    h2.id = file[0].toLowerCase().replace(" ", "_") + "_intro";
    h2.innerText = `${file[0]}\n${file[1]}\n${file[2]}\n${file[3]}\n${file[4]}\n${file[5]}\n`;
    containerDiv.appendChild(h2);
    suggestions[counter] = h2.id;
    counter = counter + 1;
  
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
    button.type = 'button'
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