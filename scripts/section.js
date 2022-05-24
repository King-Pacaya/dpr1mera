let uslideIndex = 1;
ushowSlides(uslideIndex);

function uplusSlides(n) {
  ushowSlides(uslideIndex += n);
}

function ucurrentSlide(n) {
  ushowSlides(uslideIndex = n);
}

function ushowSlides(n) {
  let i;
  let uslides = document.getElementsByClassName("uslides");
  let udots = document.getElementsByClassName("udot");
  if (n > uslides.length) {uslideIndex = 1}    
  if (n < 1) {uslideIndex = uslides.length}
  for (i = 0; i < uslides.length; i++) {
    uslides[i].style.display = "none";  
  }
  for (i = 0; i < udots.length; i++) {
    udots[i].className = udots[i].className.replace(" uactive", "");
  }
  uslides[uslideIndex-1].style.display = "block";  
  udots[uslideIndex-1].className += " uactive";
}