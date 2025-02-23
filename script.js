document.addEventListener("DOMContentLoaded", function () {
  function setDefaultImage(className, defaultSrc) {
    document.querySelectorAll(`.${className}`).forEach((img) => {
      img.onerror = function () {
        this.src = defaultSrc;
        this.onerror = null;
      };
    });
  }

  setDefaultImage("first-img", "./icon-default-t.svg");
  setDefaultImage("second-img", "./kike-y-nochi-pt.svg");
});

let allImages = [];
let activeImage = null;

async function loadImages() {
  const response = await fetch("images.json");
  allImages = await response.json();
  displayImages(allImages);
}

function displayImages(images) {
  const imageResults = document.getElementById("imageResults");
  imageResults.innerHTML = "";

  if (images.length > 0) {
    images.forEach((img) => {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");

      const imageElement = document.createElement("img");
      imageElement.src = img.src;
      imageElement.alt = img.title;
      imageElement.onclick = () => selectImage(img.src);

      imageCard.appendChild(imageElement);
      imageResults.appendChild(imageCard);
    });
  } else {
    imageResults.innerHTML = `<p>No se encontraron resultados.</p>`;
  }
}

function searchImages() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const filteredImages = allImages.filter(
    (img) =>
      (img.title && img.title.toLowerCase().includes(searchInput)) ||
      (img.description && img.description.toLowerCase().includes(searchInput))
  );

  displayImages(filteredImages);
}

function openModal(imageElement) {
  activeImage = imageElement;
  document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function selectImage(src) {
  if (activeImage) {
    activeImage.src = src;
    closeModal();
  }
}

document.addEventListener("DOMContentLoaded", loadImages);
function selectUser(userId) {
  const userDiv = document.getElementById(userId);
  const userImage = userDiv.querySelector("img").src;

  let targetQuarterId;
  if (userId === "user-1" || userId === "user-2") {
    targetQuarterId = "quarter-n-1";
  } else if (userId === "user-3" || userId === "user-4") {
    targetQuarterId = "quarter-n-2";
  } else if (userId === "user-5" || userId === "user-6") {
    targetQuarterId = "quarter-n-3";
  } else if (userId === "user-7" || userId === "user-8") {
    targetQuarterId = "quarter-n-4";
  } else if (userId === "user-9" || userId === "user-10") {
    targetQuarterId = "quarter-n-5";
  } else if (userId === "user-11" || userId === "user-12") {
    targetQuarterId = "quarter-n-6";
  } else if (userId === "user-13" || userId === "user-14") {
    targetQuarterId = "quarter-n-7";
  } else if (userId === "user-15" || userId === "user-16") {
    targetQuarterId = "quarter-n-8";
  }

  if (targetQuarterId) {
    const targetQuarter = document.getElementById(targetQuarterId);
    const quarterImage = targetQuarter.querySelector(".second-img");
    quarterImage.src = userImage;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 16; i++) {
    const userDiv = document.getElementById(`user-${i}`);
    if (userDiv) {
      userDiv.addEventListener("click", () => selectUser(`user-${i}`));
    }

    const userInput = userDiv.querySelector("input");
    if (userInput) {
      userInput.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
    const userfirstIMG = userDiv.querySelector(".first-img");
    if (userfirstIMG) {
      userfirstIMG.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
  }
});
function selectQuarter(quarterId) {
  const quarterDiv = document.getElementById(quarterId);
  const quarterImage = quarterDiv.querySelector("img").src;

  let targetSemiId;
  if (quarterId === "quarter-n-1" || quarterId === "quarter-n-2") {
    targetSemiId = "semi-n-1";
  } else if (quarterId === "quarter-n-3" || quarterId === "quarter-n-4") {
    targetSemiId = "semi-n-2";
  } else if (quarterId === "quarter-n-5" || quarterId === "quarter-n-6") {
    targetSemiId = "semi-n-3";
  } else if (quarterId === "quarter-n-7" || quarterId === "quarter-n-8") {
    targetSemiId = "semi-n-4";
  }

  if (targetSemiId) {
    const targetSemi = document.getElementById(targetSemiId);
    const semiImage = targetSemi.querySelector(".second-img");
    semiImage.src = quarterImage;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 8; i++) {
    const quarterDiv = document.getElementById(`quarter-n-${i}`);
    if (quarterDiv) {
      quarterDiv.addEventListener("click", () =>
        selectQuarter(`quarter-n-${i}`)
      );
    }
  }
});
function selectFinal(finalId) {
  const finalDiv = document.getElementById(finalId);
  const finalImage = finalDiv.querySelector("img").src;

  let targetWinnerId;
  if (finalId === "final-n-1" || finalId === "final-n-2") {
    targetWinnerId = "winner-1";
  }

  if (targetWinnerId) {
    const targetWinner = document.getElementById(targetWinnerId);
    const winnerImage = targetWinner.querySelector(".second-img");
    winnerImage.src = finalImage;
  }
}

function selectSemi(semiId) {
  const semiDiv = document.getElementById(semiId);
  const semiImage = semiDiv.querySelector("img").src;

  let targetFinalId;
  if (semiId === "semi-n-1" || semiId === "semi-n-2") {
    targetFinalId = "final-n-1";
  } else if (semiId === "semi-n-3" || semiId === "semi-n-4") {
    targetFinalId = "final-n-2";
  }

  if (targetFinalId) {
    const targetFinal = document.getElementById(targetFinalId);
    const finalImage = targetFinal.querySelector(".second-img");
    finalImage.src = semiImage;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 4; i++) {
    const semiDiv = document.getElementById(`semi-n-${i}`);
    if (semiDiv) {
      semiDiv.addEventListener("click", () => selectSemi(`semi-n-${i}`));
    }
  }

  for (let i = 1; i <= 2; i++) {
    const finalDiv = document.getElementById(`final-n-${i}`);
    if (finalDiv) {
      finalDiv.addEventListener("click", () => selectFinal(`final-n-${i}`));
    }
  }
});
//
document.querySelectorAll(".team").forEach(team => {
  const tooltip = team.querySelector(".tooltip");
  const img = team.querySelector(".first-img");
  const input = team.querySelector("input");

  team.addEventListener("mousemove", (e) => {
      if (!img.contains(e.target) && !input.contains(e.target)) { 
          tooltip.style.display = "block";
          let x = e.clientX - team.getBoundingClientRect().left + 10;
          let y = e.clientY - team.getBoundingClientRect().top + 10;
          tooltip.style.transform = `translate(${x}px, ${y}px)`;
      } else {
          tooltip.style.display = "none";
      }
  });

  team.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
  });
});