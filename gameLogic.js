const p_idx = 0;
const e_idx = 1;

function getAttackTypeName (skillId) {
	switch (skillId % 3) {
		case 0:
			return "Strong ";
		case 1:
			return "Swift ";
		case 2:
			return "Magic ";
		default:
			return "Unknown ";
	};
}

function resolveFullyBlockedAttack(skillId) {
	return "It dealt 0 " + getAttackTypeName(skillId) + "damage (10 blocked).";
}

function makeRoundWithDamageMessage(skillId, otherSkillId) {
	// ids 0-2 are attacks, 3-5 are defences; active index is that of defending player (to address his health bar)
	var active_idx = skillId > otherSkillId ? p_idx : e_idx;
	var attacking_id = skillId > otherSkillId ? otherSkillId : skillId;
	if (skillId % 3 == otherSkillId % 3)
	{
		return resolveFullyBlockedAttack(skillId);
	}
	var message = "It dealt 10 " + getAttackTypeName(attacking_id) + "damage (0 blocked).";
	onHit(active_idx, 10);
	return message;
}