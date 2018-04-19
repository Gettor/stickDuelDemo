const iconPrefix = "icons/";
const enabledSkills = [
    iconPrefix + "strongAtkActive.png",
    iconPrefix + "swiftAtkActive.png",
    iconPrefix + "mysticAtkActive.png",
    iconPrefix + "strongDefActive.png",
    iconPrefix + "swiftDefActive.png",
    iconPrefix + "mysticDefActive.png"
];

const disabledSkills = [
    iconPrefix + "strongAtkDisabled.png",
    iconPrefix + "swiftAtkDisabled.png",
    iconPrefix + "mysticAtkDisabled.png",
    iconPrefix + "strongDefDisabled.png",
    iconPrefix + "swiftDefDisabled.png",
    iconPrefix + "mysticDefDisabled.png"
];

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

function toggleSkill(skillId) {
    var skills = getSkills();
    skills[0].disabled ^= true;
    skills[1].disabled ^= true;
    skills[2].disabled ^= true;
    skills[3].disabled ^= true;
    skills[4].disabled ^= true;
    skills[5].disabled ^= true;
    setBackgroundImages();

    var info = document.getElementsByClassName("info")[0];
    var div = document.createElement("div");
    div.innerHTML = "Hello " + skillId;
    info.appendChild(div);
    if (info.childNodes.length > 3)
    {
        info.removeChild(info.childNodes[0]);
    }
}

window.onload = function() {
  setBackgroundImages();
};