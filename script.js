//hvilket bilde er vi på nå

let currentImage = 0;

// Elementene vi trenger fra HTML

let allImages = document.querySelectorAll('.carusell img');

function showImage(imageIndex) {}

function moveImage(offset) {
  let newIndex = currentImage + offset;
  let totalImages = allImages.length - 1;

  // Hvilket bilde er vi på nå

  // Regn ut hvilket bilde som blir neste

  // Og oppdater nåværende bilde

  if (newIndex < 0) {
    // Viss vi prøver å gå under null
    // gå til siste bildet
    currentImage = totalImages;
  } else if (newIndex > totalImages) {
    // Viss vi prøver å gå til over antall bilder vi har
    // gå til start bildet
    currentImage = 0;
  } else {
    // Viss vi vi har bildet
    // gå til bildet
    currentImage = newIndex;
  }

  //for hvert bilde element kjør denne koden

  //
  allImages.forEach((image, index) => {
    if (index === currentImage) {
      image.className = 'current-image';
    } else {
      image.className = '';
    }
  });
}
function specifikbuttons(desiredIndex) {
allImages.forEach((image, index)=> {

if (index === desiredIndex) {
  image.className = 'current-image';
} else {
  image.className = '';


}
})
}
// Fjern curret-image klassen fra nåværende bilde

// Legg til current-image på det nye bildet

let previousButton = document.querySelector('#previous-button');
let nextButton = document.querySelector('#next-button');

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

btn1.addEventListener('click', () => {
specifikbuttons(0)

});

btn2.addEventListener('click', () => {
  specifikbuttons(1)
  
  });

  btn3.addEventListener('click', () => {
    specifikbuttons(2)
    
    });


    btn4.addEventListener('click', () => {
      specifikbuttons(3)
      
      });

previousButton.addEventListener('click', () => {
  moveImage(-1);
});

nextButton.addEventListener('click', () => {
  moveImage(1);
});
