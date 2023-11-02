const div1 = document.getElementById("div1");
const bigImage = document.getElementById("big-img");

const div2 = document.getElementById("div2");
const div4 = document.getElementById("div4");
const para = document.getElementById("p4");
const imagesElements1 = document.getElementsByClassName("images"); // array like but it is not an array
const imagesElements = Array.from(imagesElements1); // creating array of above
const btnSlider1 = document.getElementsByClassName("btnSlider");
const btnSlider = Array.from(btnSlider1);
// registering click event to every element (bottom 3 images)
imagesElements.forEach((elem) => {
  elem.addEventListener("click", displayImageOnSlide);
});

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
plusBtn.addEventListener("click", plusHandler);
minusBtn.addEventListener("click", minusHandler);
function plusHandler() {
  if (bigImage.src === imagesElements[0].src) {
    bigImage.src = imagesElements[1].src;
    btnSlider[1].classList = "highlightColor";
    btnSlider[0].classList = "btnSlider";
    btnSlider[2].classList = "btnSlider";
    para.innerHTML = "Billed-2";
  } else if (bigImage.src === imagesElements[1].src) {
    bigImage.src = imagesElements[2].src;
    btnSlider[2].classList = "highlightColor";
    btnSlider[0].classList = "btnSlider";
    btnSlider[1].classList = "btnSlider";
    para.innerHTML = "Billed-3";
  } else if (bigImage.src === imagesElements[2].src) {
    bigImage.src = imagesElements[0].src;
    btnSlider[0].classList = "highlightColor";
    btnSlider[1].classList = "btnSlider";
    btnSlider[2].classList = "btnSlider";
    para.innerHTML = "Billed-1";
  }
}

function minusHandler() {
  if (bigImage.src === imagesElements[0].src) {
    bigImage.src = imagesElements[2].src;
    btnSlider[2].classList = "highlightColor";
    btnSlider[0].classList = "btnSlider";
    btnSlider[1].classList = "btnSlider";
    para.innerHTML = "Billed-3";
  } else if (bigImage.src === imagesElements[2].src) {
    bigImage.src = imagesElements[1].src;
    btnSlider[1].classList = "highlightColor";
    btnSlider[0].classList = "btnSlider";
    btnSlider[2].classList = "btnSlider";
    para.innerHTML = "Billed-2";
  } else if (bigImage.src === imagesElements[1].src) {
    bigImage.src = imagesElements[0].src;
    btnSlider[0].classList = "highlightColor";
    btnSlider[1].classList = "btnSlider";
    btnSlider[2].classList = "btnSlider";
    para.innerHTML = "Billed-1";
  }
}

window.addEventListener("load", (e) => {
  bigImage.src = imagesElements[0].src;
  btnSlider[0].classList = "highlightColor";
  para.innerHTML = "Billed-1";
});

function displayImageOnSlide(e) {
  let id = e.target.getAttribute("id");
  switch (id) {
    case "img1":
      bigImage.src = document.getElementById(id).src;
      para.innerHTML = "Billed-1";
      btnSlider[0].classList = "highlightColor";
      btnSlider[1].classList = "btnSlider";
      btnSlider[2].classList = "btnSlider";
      break;
    case "img2":
      bigImage.src = document.getElementById(id).src;
      para.innerHTML = "Billed-2";
      btnSlider[1].classList = "highlightColor";
      btnSlider[0].classList = "btnSlider";
      btnSlider[2].classList = "btnSlider";
      break;
    case "img3":
      bigImage.src = document.getElementById(id).src;
      para.innerHTML = "Billed-3";
      btnSlider[2].classList = "highlightColor";
      btnSlider[0].classList = "btnSlider";
      btnSlider[1].classList = "btnSlider";
      break;
  }
}

// slide show

setInterval(plusHandler, 2000);
