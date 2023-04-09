

  var container = document.querySelector('#content');
var content = document.querySelector('#imgs');
function scrollImages(e) {
  var delta = e.deltaY || e.detail || e.wheelDelta;
  var direction = delta > 0 ? 1 : -1;
  var amount = 30; // adjust this to control the scroll speed
  var content = document.getElementById('content');
  if (content !== null) {
    if (content.scrollWidth > content.clientWidth) {
      content.scrollLeft += direction * amount;



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
        if (dist < minDist) {
          minDist = dist;
          selectedImage = image;
        }else counter++;
      });
      images.forEach(function(image) {
        const num = parseInt(selectedImage.id.match(/\d+/)[0])
        var imageLeft5 = images[0];
        var imageLeft4 = images[0];
        var imageLeft3 = images[0];
        var imageLeft2 = images[0];
        var imageLeft1 = images[0];
        var imageRight1 = images[0];
        var imageRight2 = images[0];
        var imageRight3 = images[0];
        var imageRight4 = images[0];
        var imageRight5 = images[0];
        if (num > 5) {
          imageLeft5 = images[num-5]
          imageLeft4 = images[num-4]
          imageLeft3 = images[num-3]
          imageLeft2 = images[num-2];
          imageLeft1 = images[num-1];
        }else { 
          imageLeft5 = images[0];
          imageLeft4 = images[0];
          imageLeft3 = images[0];
          imageLeft2 = images[0];
          imageLeft1 = images[0];
          imageLeft2 = images[0];
          imageLeft1 = images[0]; 
        }
        
        if (num < images.length-5) {
          imageRight1 = images[num+1]
          imageRight2 = images[num+2]
          imageRight3 = images[num+3]
          imageRight4 = images[num+4]
          imageRight5 = images[num+5]
        }else {
          imageRight1 = images[images.length-1]
          imageRight2 = images[images.length-1]
          imageRight3 = images[images.length-1]
          imageRight4 = images[images.length-1]
          imageRight5 = images[images.length-1]
        }
        
        
        if (image === selectedImage) {
          image.classList.add('middle');
          /*imageLeft5.classList.add('left5')
          imageLeft4.classList.add('left4')
          imageLeft3.classList.add('left3')
          imageLeft2.classList.add('left2')
          imageLeft1.classList.add('left1')
          imageRight1.classList.add('right1')
          imageRight2.classList.add('right2')*/

        }else {
          setTimeout(function() {
          image.classList.remove('middle');
          /*imageLeft5.classList.remove('left5')
          imageLeft4.classList.remove('left4')
          imageLeft3.classList.remove('left3')
          imageLeft2.classList.remove('left2')
          imageLeft1.classList.remove('left1')
          imageRight1.classList.remove('right1')
          imageRight2.classList.remove('right2')
          imageRight3.classList.remove('right3')
          imageRight4.classList.remove('right4')
          imageRight5.classList.remove('right5')*/
          },  100);
        };
      });
      e.preventDefault();
    }
  }
}

function readContainer() {
  
    container.addEventListener('wheel', scrollImages);

}

document.addEventListener('DOMContentLoaded', readContainer)





const thumbnails2 = document.querySelector('.thumbnails');
let isDown = false;
let startX;
let scrollLeft;

thumbnails2.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - thumbnails2.offsetLeft;
  scrollLeft = thumbnails2.scrollLeft;
});

thumbnails2.addEventListener('mouseleave', () => {
  isDown = false;
});

thumbnails2.addEventListener('mouseup', () => {
  isDown = false;
});

thumbnails2.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - thumbnails2.offsetLeft;
  const walk = (x - startX) * 3; // Adjust scroll speed here
  thumbnails2.scrollLeft = scrollLeft - walk;
});