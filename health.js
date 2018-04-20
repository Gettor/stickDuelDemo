const  maxHealth = 40;
const  maxHealthWidth = 190;
const  healthColors = [
  "#3EC072FF",
  "#BEAC40FF",
  "#DE3020FF"
];

function getRandomHit() {
  return maxHealth*(Math.floor(Math.random() * 8) + 1);
}

function onHit(barId) {
  var boxOne = document.getElementsByClassName('bar')[barId];
  var step = getRandomHit();
  var curWidth = boxOne.getAttribute("curValue") - step;
  if (curWidth < 0){
    curWidth = 0;
  }
  var maxWidthFromProperty = boxOne.getAttribute("maxValue");
  boxOne.setAttribute("curValue", curWidth);
  var percentage = (curWidth / maxWidthFromProperty);
  var newWidth = percentage * maxHealthWidth;
  var display = newWidth.toString().concat("px");
  boxOne.style.width = display;

  if (percentage < 0.7)
    boxOne.style.backgroundColor = healthColors[1];
  if (percentage < 0.2)
    boxOne.style.backgroundColor = healthColors[2];

  var hpText = document.getElementsByClassName('healthText')[barId];
  hpText.innerHTML = Math.floor((percentage*maxHealth)).toString().concat("/").concat(maxHealth.toString());

}

function onReset(barId) {
  var boxOne = document.getElementsByClassName('bar')[barId];
  var maxWidthFromProperty = boxOne.getAttribute("maxValue");
  boxOne.setAttribute("curValue", maxWidthFromProperty);
  boxOne.style.width = maxHealthWidth.toString().concat("px");
  boxOne.style.backgroundColor = healthColors[0];

  var hpText = document.getElementsByClassName('healthText')[barId];
  hpText.innerHTML = maxHealth.toString().concat("/").concat(maxHealth.toString());

}