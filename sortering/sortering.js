
 // Function til kategori baserede billeder
 function displayPictures(category) {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach(pic => {
    if (category === 'all' || pic.classList.contains(category)) {
      pic.style.display = 'block';
    } else {
      pic.style.display = 'none';
    }
  });
}

// vis alle pictures
function showAll() {
  displayPictures('all');
}

// vis morgenmad
function Morgenmad() {
  displayPictures('Morgenmad');
}

// vis frokost
function Frokost() {
  displayPictures('Frokost');
}

// vis drikkevare
function Drikkevare() {
  displayPictures('Drikkevare');
}
// vis snacks
function Snacks() {
  displayPictures('Snacks');
}

// vi alle billeder per default
showAll();


function openLightbox() {
  document.getElementById("myModal").style.display = "block"
}
  function closeLightbox() {
  document.getElementById("myModal").style.display = "none"
}

function openLightbox1() {
  document.getElementById("sandwich").style.display = "block"
}
  function closeLightbox1() {
  document.getElementById("sandwich").style.display = "none"
}
function openLightbox2() {
  document.getElementById("kaffe").style.display = "block"
}
  function closeLightbox2() {
  document.getElementById("kaffe").style.display = "none"
}
function openLightbox3() {
  document.getElementById("kanelsnegl").style.display = "block"
}
  function closeLightbox3() {
  document.getElementById("kanelsnegl").style.display = "none"
}
function openLightbox4() {
  document.getElementById("apple").style.display = "block"
}
  function closeLightbox4() {
  document.getElementById("apple").style.display = "none"
}
function openLightbox5() {
  document.getElementById("kat").style.display = "block"
}
  function closeLightbox5() {
  document.getElementById("kat").style.display = "none"
}