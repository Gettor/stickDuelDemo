function setBackgroundImages() {
    var skills = getSkills();
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].disabled)
        {
            skills[i].style.backgroundImage = "url(" + disabledSkills[i] + ")";
        }
        else
        {
            skills[i].style.backgroundImage = "url(" + enabledSkills[i] + ")";
        }
    }
}

function getSkills() {
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");
    return [a1, a2, a3, d1, d2, d3];
}

function onClick() {
    var ph1 = document.getElementsByClassName("ph1");
    var ph2 = document.getElementsByClassName("ph2");
    var fight = document.getElementsByClassName("fight");
    var startBtn = document.getElementsByClassName("startButton");

    ph1[0].style.visibility = "visible";
    ph2[0].style.visibility = "visible";
    fight[0].style.visibility = "visible";
    startBtn[0].disabled = true;
    startBtn[0].className = "duelInProgressButton";
}

function manageInfos(skillId) {
    var subInfos = [];
    subInfos[0] = document.getElementById("info_one");
    subInfos[1] = document.getElementById("info_two");
    subInfos[2] = document.getElementById("info_three");

    subInfos[0].innerHTML = subInfos[1].innerHTML;
    subInfos[0].className = subInfos[1].className;
    subInfos[0].style.background = subInfos[1].style.background;

    subInfos[1].innerHTML = subInfos[2].innerHTML;
    subInfos[1].className = subInfos[2].className;
    subInfos[1].style.background = subInfos[2].style.background;

    var otherSkill = Math.floor((Math.random() * 3) );
    if (getSkillNumberById(skillId) < 3)
    {
        subInfos[2].className = "";
        otherSkill += 3;
    }
    else
    {
        subInfos[2].className = "info-def";
    }
    subInfos[2].style.background = getBackgroundGradient(skillId, otherSkill);

    var message = "Used " + getSkillNameById(skillId) + " versus " + getSkillNameById(otherSkill);

    subInfos[2].innerHTML = message;
}

function toggleSkill(skillId) {
    var skills = getSkills();
    skills[0].disabled ^= true;
    skills[1].disabled ^= true;
    skills[2].disabled ^= true;
    skills[3].disabled ^= true;
    skills[4].disabled ^= true;
    skills[5].disabled ^= true;
    setBackgroundImages();

    manageInfos(skillId);
}

// health bar related

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

// global properties set on window load

setBackgroundImages();
