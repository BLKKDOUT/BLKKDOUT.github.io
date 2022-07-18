var quoteArray = ["WE MAKE GLASS WORK!"];
var textPosition = 0;
// speed in milliseconds
var speed = 50;
typewriter = () => {
  document.querySelector("#quote").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u007C</span>';

  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)
