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
    var a1 = document.querySelector("#a1");
    var a2 = document.querySelector("#a2");
    var a3 = document.querySelector("#a3");
    var d1 = document.querySelector("#d1");
    var d2 = document.querySelector("#d2");
    var d3 = document.querySelector("#d3");
    return [a1, a2, a3, d1, d2, d3];
}

function insertNewSkillImages(skillId, otherSkillId) {
    var p_img = document.querySelector("#mySkillImg");
    var e_img = document.querySelector("#hisSkillImg");
    p_img.src = enabledSkills[skillId];
    e_img.src = enabledSkills[otherSkillId];
}

function manageInfos(skillId) {
    var subInfos = [];
    subInfos[0] = document.querySelector("#info_one");
    subInfos[1] = document.querySelector("#info_two");
    subInfos[2] = document.querySelector("#info_three");

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

    message += ". " + makeRoundWithDamageMessage(getSkillNumberById(skillId), otherSkill);

    subInfos[2].innerHTML = message;
    insertNewSkillImages(getSkillNumberById(skillId), otherSkill);
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

// global properties set on window load

setBackgroundImages();
