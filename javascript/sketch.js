if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
  alert("모바일 기기에서 접속 중입니다. 효과적인 '물음표 괴물' 팝업 환경을 위해서 PC 브라우저로 접속해주시기 바랍니다.");
}

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
