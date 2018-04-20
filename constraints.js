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

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getSkillNumberById(skillId) {
    switch(skillId) {
        case "a1":
            return 0;
        case "a2":
            return 1;
        case "a3":
            return 2;
        case "d1":
            return 3;
        case "d2":
            return 4;
        case "d3":
            return 5;
        default:
            return -1;
    }
}

function getSkillNameById(skillId) {
    if (!isNumber(skillId))
    {
        skillId = getSkillNumberById(skillId);
    }
    switch(skillId) {
        case 0:
            return "Strong Attack";
        case 1:
            return "Swift Attack";
        case 2:
            return "Mystic Attack";
        case 3:
            return "Strong Defence";
        case 4:
            return "Swift Defence";
        case 5:
            return "Mystic Defence";
        default:
            return -1;
    }
}
