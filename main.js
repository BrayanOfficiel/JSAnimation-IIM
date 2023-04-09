// Récupération des éléments HTML
const boxes = document.querySelectorAll(".box");
const colors_btn = document.getElementById("c_button");
const random_btn = document.getElementById("r_button");
const reset_btn  = document.getElementById("n_button");

// Fonction pour changer la couleur d'une box avec les classes 'rouge', 'vert' et 'bleu'
function changeColor(box) {
  const colors = ["rouge", "vert", "bleu"];
  const currentColor = box.classList[1];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  while (randomColor == currentColor) {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
  }
  box.style = '';
  box.classList.remove(currentColor);
  box.classList.add(randomColor);
  box.textContent = randomColor;
}

// Fonction pour changer la couleur d'une box au hasard
function changeColorRandom(box) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = "#" + randomColor;
  box.textContent = "#" + randomColor;
}

// Fonctiin pour supprimer toutes les couleurs
function resetColors(box) {
  box.style = '';
  box.className = "box blank";
  box.textContent = "Cliquer-ici";
}

// Ajout des écouteurs d'événements pour chaque box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    changeColor(box);
  });
});

colors_btn.addEventListener("click", () => {
  for (let i = 0; i < boxes.length; i++) {
    changeColor(boxes[i]);
  }
});

random_btn.addEventListener("click", () => {
  for (let i = 0; i < boxes.length; i++) {
    changeColorRandom(boxes[i]);
  }
});

reset_btn.addEventListener("click", () => {
  for (let i = 0; i < boxes.length; i++) {
    resetColors(boxes[i]);
  }
});