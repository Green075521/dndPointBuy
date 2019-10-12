var gameData = {
	points: 27,
	abilities: ['Strength', 'Dexterity', 'Constitution', 'Intelligence','Wisdom', 'Charisma'],
	abilAbbr: ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha']
}

function updateText() {
	document.getElementById("points").innerHTML = "Points: " + gameData.points
	document.getElementById("Strength").innerHTML = "Strength: " + strength.value
	document.getElementById("Dexterity").innerHTML = "Dexterity: " + dexterity.value
	document.getElementById("Constitution").innerHTML = "Constitution: " + constitution.value
	document.getElementById("Intelligence").innerHTML = "Intelligence: " + intelligence.value
	document.getElementById("Wisdom").innerHTML = "Wisdom: " + wisdom.value
	document.getElementById("Charisma").innerHTML = "Charisma: " + charisma.value
}

function Ability(abbr, name){
	this.abbr = abbr;
	this.name = name;
	this.value = 8;
	this.modifier = function() {
		return Math.floor((this.value-10)/2)
	};
}

function increaseAbility(abil){
	if(abil.value<15){
		let cost = 0;
		switch(abil.value){
			case 8: cost = 1; break;
			case 9: cost = 1; break;
			case 10: cost = 1; break;
			case 11: cost = 1; break;
			case 12: cost = 1; break;
			case 13: cost = 2; break;
			case 14: cost = 2; break;
		}
		if(cost <= gameData.points){
			gameData.points -= cost;
			abil.value++;
		}
	}
	updateText()
}

function decreaseAbility(abil){
	if(abil.value > 8){
		let cost = 0;
		switch(abil.value){
			case 9: cost = 1; break;
			case 10: cost = 1; break;
			case 11: cost = 1; break;
			case 12: cost = 1; break;
			case 13: cost = 1; break;
			case 14: cost = 2; break;
			case 15: cost = 2; break;
		}
		abil.value--;
		gameData.points += cost
	}
	updateText()
}

const strength = new Ability("Str", "Strength")
const dexterity = new Ability("Dex", "Dexterity")
const constitution = new Ability("Con", "Constitution")
const intelligence = new Ability("Int", "Intelligence")
const wisdom = new Ability("Wis", "Wisdom")
const charisma = new Ability("Cha", "Charisma")