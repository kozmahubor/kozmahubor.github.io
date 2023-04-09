const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');
const thumbnails = document.querySelectorAll('.thumbnails img');

const images = 
[
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/1.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/2.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/3.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/4.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/5.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/6.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/7.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/8.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/9.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/1.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/2.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/3.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/4.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/5.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/6.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/7.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/8.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/9.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/1.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/2.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/3.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/4.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/5.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/6.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/7.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/8.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/9.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/1.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/2.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/3.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/4.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/5.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/6.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/7.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/8.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/9.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/1.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/2.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/3.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/4.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/5.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/6.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/7.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/8.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/9.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/1.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/2.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/3.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/4.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/5.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/6.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/7.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/8.jpg",
"https://raw.githubusercontent.com/kozmahubor/kozmahubor.github.io/main/test/9.jpg",
];

const imageDiv = document.getElementById('imgs')
for (let i = 0; i < images.length; i++) {
  const picElement = document.createElement('img')
  picElement.src = images[i];
  picElement.id = 'img'+i;
  picElement.className = 'image';
  picElement.display = 'inline-block';
  picElement.style.padding = '2em'
  if (i === 0) {
    picElement.style.marginLeft = "85em";
  }
  if (i === images.length-1) {
    picElement.style.marginRight = '105em'
  }
  picElement.onclick = function() {
    openImage(i);
  };
  imageDiv.appendChild(picElement)
}

function openImage(imageId) {
    const largeImage = document.createElement('img');
    largeImage.id = 'img'+imageId;
    largeImage.src = images[imageId];
    largeImage.style.width = '30em';
    largeImage.style.height = '39.9em';
    overlayContent.style.width = '30em';
    overlayContent.style.height = '40em';
    overlayContent.appendChild(largeImage);
    overlay.style.display = 'grid';
    overlay.style.gridTemplateColumns = 'repeat(30, 1fr)';
  }

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayContent.innerHTML = '';
    document.body.style.overflow = 'auto';
  });

  
//-----------------------------------------------------------------
var content = document.getElementById('content');





var isReached = false;  
function autoScroll() {

  var images = content.querySelectorAll('.image');
  var contentRect = content.getBoundingClientRect();
  var contentCenter = contentRect.left + contentRect.width / 2;
  var minDist = Infinity;
  var selectedImage = null;
  var counter = 0;
  images.forEach(function(image) {
    var imageRect = image.getBoundingClientRect();
    var imageCenter = imageRect.left + imageRect.width / 2;
    var dist = Math.abs(contentCenter - imageCenter);
    counter++;
    if (dist < minDist) {
      minDist = dist;
      selectedImage = image;
    }
  });
  images.forEach(function(image) {
    const num = parseInt(selectedImage.id.match(/\d+/)[0])
    if (image === selectedImage) {
      image.classList.add('middle');

    }else {
      setTimeout(function() {
      image.classList.remove('middle');
      },  50);
    };
  });

  
  if (selectedImage !== images[images.length-1] && isReached === false) {
    content.scrollLeft += 10;
    isReached = false;
    setTimeout(autoScroll, 30);
  }
  else if (selectedImage === images[images.length-1] && isReached === false) {
    isReached = true;
    setTimeout(autoScroll, 30);
  }
  else if (selectedImage !== images[0] && isReached === true) { 
    content.scrollLeft -= 10;
    isReached = true;
    setTimeout(autoScroll, 30);
  }
  else if (selectedImage === images[0] && isReached === true) {
    isReached = false;
    setTimeout(autoScroll, 30);
  }
}

window.addEventListener('load', function() {
  autoScroll();
});



