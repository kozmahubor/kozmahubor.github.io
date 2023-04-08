const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');
const thumbnails = document.querySelectorAll('.thumbnails img');
const images = 
[
"1.jpg"
];
let count = 0;
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    count++;
    const largeImage = document.createElement('img');
    largeImage.id = 'img'+count
    largeImage.src = thumbnail.src;
    largeImage.style.width = '30em';
    largeImage.style.height = '40em';
    overlayContent.style.width = '30em';
    overlayContent.style.height = '40em';
    overlayContent.appendChild(largeImage);
    overlay.style.display = 'grid';
    overlay.style.gridTemplateColumns = 'repeat(30, 1fr)';
    

  });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayContent.innerHTML = '';
    document.body.style.overflow = 'auto';
  });