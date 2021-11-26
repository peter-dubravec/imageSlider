function hideImages(ifInitial) {
  let middleImgs = document.querySelectorAll(".middle img");
  middleImgs.forEach((img) => {
    img.style.transition = "all 0.7s";
    if (ifInitial) {
      img.style.opacity = "1";
      ifInitial = false;
      return;
    }
    img.style.opacity = "0";
  });
}

function showPicture(key) {
  let picture = document.querySelector(`.middle img[data-key='${key}']`);
  picture.style.opacity = "1";
}

function showSlide(e) {
  let dataKey = e.target.getAttribute("data-key");
  hideImages();
  showPicture(dataKey);
}

function moveSlide() {
  let lengthOfImgList = document.querySelectorAll(".middle img").length;
  let displayedPicKey = document.querySelector(
    '.middle img[style*="opacity: 1;"]'
  );
  let nextPictureKey = parseInt(displayedPicKey.getAttribute("data-key"));

  hideImages();

  if (this.className == "right") {
    nextPictureKey += 1;
  } else {
    nextPictureKey -= 1;
  }

  if (nextPictureKey > lengthOfImgList) {
    nextPictureKey = 1;
  } else if (nextPictureKey < 1) {
    nextPictureKey = lengthOfImgList;
  }

  showPicture(nextPictureKey);
}

function setDataKeys() {
  let middleImgs = document.querySelectorAll(".middle img");
  let navigation = document.querySelector(".navigation");
  let i = 1;
  let navigationImage;

  middleImgs.forEach((img) => {
    img.setAttribute("data-key", i);
    navigationImage = img.cloneNode(true);
    navigation.append(navigationImage);
    i++;
  });
}

let initialSetting = (() => {
  setDataKeys();
  hideImages(true);

  let rightArrow = document.querySelector(".right");
  let leftArrow = document.querySelector(".left");
  rightArrow.addEventListener("click", moveSlide);
  leftArrow.addEventListener("click", moveSlide);

  let imgs = document.querySelectorAll(".navigation img");
  imgs.forEach((img) => {
    img.addEventListener("click", showSlide);
  });
})();
