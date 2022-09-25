var images = [
    "Images/menu1.webp", "Images/nen10.webp", "Images/nen8.webp", "Images/nen11.webp", "Images/nen12.webp", "Images/nen9.webp"
];
var num = 0;

function nextFunction() {
    var slider = document.getElementById("Slider");
    num++;
    if (num >= images.length) {
        num = 0;
        dots: true;
  infinite: true;
  speed: 500;
  fade: true;
  cssEase: 'linear'
    }
    slider.src = images[num];
}

function preFunction(){
    var slider = document.getElementById("Slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
        dots: true;
  infinite: true;
  speed: 500;
  fade: true;
  cssEase: 'linear'
    }
    slider.src = images[num];
}