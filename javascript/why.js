function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function adjustFontSize() {
  let width = parseInt(getUrlParameter("width"));
  let height = parseInt(getUrlParameter("height"));

  document.querySelector(".why_container").style.width = width + "px";
  document.querySelector(".why_container").style.height = height + "px";
}

window.onload = adjustFontSize;
