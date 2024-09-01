function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function openWhyFile(i) {
  let randomPosX = getRandomInt(window.innerWidth);
  let randomPosY = getRandomInt(window.innerHeight - 100) + 100;
  let randomWindowSize = getRandomInt(300) + 200;
  let windowFeatures = `width = ${randomWindowSize}, height = ${randomWindowSize}, top = ${randomPosX}, left = ${randomPosY}`;
  let url = `why.html?width=${randomWindowSize}&height=${randomWindowSize}`;

  window.open(url, `WHY${i}`, windowFeatures, "popup");
}

for (let i = 0; i < 5; i++) {
  openWhyFile(i);
}
