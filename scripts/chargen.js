var NO_OF_CLASSES = 20;

var character = { 
	race: "Nord", 
	class: "Warrior",
	motivation: "",
	virtue: "",
	flaw: "",
	fear: "",
	interest: "",
	civilWarSide: "",
	dawnguardSide: "",
	factions: ["Companions", "College of Winterhold", "Thieves Guild", "Dark Brotherhood", "Bards College"],
	skills: ["1-handed", "Heavy Armor", "Block", "Archery", "Speech", "Smithing"]
};

var factions = {
	companions: 1,
	collegeOfWinterhold: 1,
	thievesGuild: 1,
	darkBrotherhood: 1,
	bardsCollege: 1,
	
	setFactions: function() {
		this.companions = getRandomInteger(0, 1);
		this.collegeOfWinterhold = getRandomInteger(0, 1);
		this.thievesGuild = getRandomInteger(0, 1);
		this.darkBrotherhood = getRandomInteger(0, 1);
		this.bardsCollege = getRandomInteger(0, 1);
		
		var joinableFactions = [];
		
		if (this.companions == 1) {
			joinableFactions.push("Companions");
		}
		
		if (this.collegeOfWinterhold == 1) {
			joinableFactions.push("College of Winterhold");
		}
		
		if (this.thievesGuild == 1) {
			joinableFactions.push("Thieves Guild");
		}
		
		if (this.darkBrotherhood == 1) {
			joinableFactions.push("Dark Brotherhood");
		}
		
		if (this.bardsCollege == 1) {
			joinableFactions.push("Bards College");
		}
		
		return joinableFactions;
	}
};

var classes = {
	acrobat: ["Archery", "Sneak", "Light Armor", "Speech", "Alteration", "Illusion"],
	agent: ["1-handed", "Sneak", "Speech", "Light Armor", "Illusion", "Conjuration"],
	archer: ["Archery", "Block", "1-handed", "Light Armor", "Sneak", "Smithing"],
	assassin: ["Archery", "Light Armor", "Sneak", "1-handed", "Lockpicking", "Alchemy"],
	barbarian: ["2-handed", "Light Armor", "Block", "Archery", "Smithing", "Speech"],
	bard: ["Speech", "Archery", "1-handed", "Block", "Light Armor", "Illusion"],
	battlemage: ["Heavy Armor", "Destruction", "1-handed", "Conjuration", "Enchanting", "Alteration"],
	crusader: ["Heavy Armor", "Block", "1-handed", "Destruction", "Restoration", "Smithing"],
	healer: ["Restoration", "Alteration", "Speech", "1-handed", "Alchemy", "Illusion"],
	knight: ["1-handed", "Heavy Armor", "Block", "Speech", "Smithing", "Restoration"],
	mage: ["Alteration", "Destruction", "Illusion", "Restoration", "Conjuration", "Enchanting"],
	monk: ["Sneak", "Block", "1-handed", "Restoration", "Light Armor", "Archery"],
	nightblade: ["Alteration", "Illusion", "1-handed", "Sneak", "Light Armor", "Destruction"],
	pilgrim: ["Light Armor", "Restoration", "Archery", "Speech", "1-handed", "Alchemy"],
	rogue: ["Light Armor", "Speech", "1-handed", "Block", "Lockpicking", "Sneak"],
	scout: ["Block", "1-handed", "Light Armor", "Sneak", "Alchemy", "Alteration"],
	sorcerer: ["Alteration", "Conjuration", "Destruction", "Enchanting", "Illusion", "Heavy Armor"],
	spellsword: ["Alteration", "Destruction", "1-handed", "Light Armor", "Restoration", "Enchanting"],
	thief: ["Light Armor", "Pickpocket", "Lockpicking", "Sneak", "1-handed", "Speech"],
	warrior: ["2-handed", "Heavy Armor", "Smithing", "Archery", "Block", "1-handed"],
	witchhunter: ["Alchemy", "Conjuration", "Archery", "Light Armor", "Block", "1-handed"],
	
	setClass: function(i) {
		switch(i) {
			case 0:
				character.class = "Acrobat";
				character.skills = this.acrobat;
				break;
			case 1:
				character.class = "Agent";
				character.skills = this.agent;
				break;
			case 2:
				character.class = "Archer";
				character.skills = this.archer;
				break;
			case 3:
				character.class = "Assassin";
				character.skills = this.assassin;
				break;
			case 4:
				character.class = "Barbarian";
				character.skills = this.barbarian;
				break;
			case 5:
				character.class = "Bard";
				character.skills = this.bard;
				break;
			case 6:
				character.class = "Battlemage";
				character.skills = this.battlemage;
				break;
			case 7:
				character.class = "Crusader";
				character.skills = this.crusader;
				break;
			case 8:
				character.class = "Healer";
				character.skills = this.healer;
				break;	
			case 9:
				character.class = "Knight";
				character.skills = this.knight;
				break;
			case 10:
				character.class = "Mage";
				character.skills = this.mage;
				break;
			case 11:
				character.class = "Monk";
				character.skills = this.monk;
				break;
			case 12:
				character.class = "Nightblade";
				character.skills = this.nightblade;
				break;
			case 13:
				character.class = "Pilgrim";
				character.skills = this.pilgrim;
				break;
			case 14:
				character.class = "Rogue";
				character.skills = this.rogue;
				break;
			case 15:
				character.class = "Scout";
				character.skills = this.scout;
				break;
			case 16:
				character.class = "Sorcerer";
				character.skills = this.sorcerer;
				break;
			case 17:
				character.class = "Spellsword";
				character.skills = this.spellsword;
				break;
			case 18:
				character.class = "Thief";
				character.skills = this.thief;
				break;
			case 19:
				character.class = "Warrior";
				character.skills = this.warrior;
				break;
			case 20:
				character.class = "Witchhunter";
				character.skills = this.witchhunter;
		}	
	}
};

var raceOptions = [
	"Altmer",
	"Argonian",
	"Bosmer",
	"Breton",
	"Dunmer",
	"Imperial",
	"Khajiit",
	"Nord",
	"Orismer",
	"Redguard"
];

var motivationOptions = [
	"in order to research and learn about the dwemer",
	"in order to research and learn about Nordic ruins",
	"in order to research and learn about the mysterious Word Walls and the Dragon Language",
	"in order to research and learn about mammoths",
	"in order to look for clues about a sudden death of a friend",
	"in order to look for clues about a sudden death of a family member",
	"for vengeance; crossing the border to find and kill the person who murdered a friend",
	"for vengeance; crossing the border to find and kill the person who murdered a family member",
	"to find a lost family heirloom; a weapon or piece of jewelry",
	"because they were exiled from their home region due to a crime that they committed",
	"because they were exiled from their home region due to allegations of a crime",
	"to seek redemption and right a wrong that was committed in the past",
	"in order to recover from a debilitating disease or injury",
	"in order to locate a lost love, who could be alive and well or long dead",
	"on a pilgrimage to see the shrines of the nine divines", 
	"on a pilgrimage to see the temples",
	"on a pilgrimage to see the Gildergreen",
	"on a pilgrimage to collect Daedric artifacts",
	"seeking wealth and power; to become a Thane or leader of a guild",
];

var interestOptions = [
	"agriculture. They learn from farmers and alchemists and collect plants and fungi. When they eventually own a home they would like to add a garden",
	"architecture. They enjoy studying the structural design of buildings, forts, houses, keeps and ruins. Often spends time exploring Dwarven or Nordic ruins",
	"beastiary. They collect the Herbane's Bestiary books and love to study the habits and dwellings of Skyrim's creatures",
	"barter and economics. They worship Zenithar and spends some of their time either looking for or creating their own haggling potions",
	"the culinary arts. They often spend time in inns sampling food and drink or cooking their own recipes",
	"fitness and exercise. They start each day with a morning sprint and will often spend time working at sawmills to improve their strength - lifting logs or chopping wood",
	"history. They collect historical books and will always accept quests pertaining to historical events",
	"horseback riding. They hope to own their own horse one day",
	"mountain climbing. They are hoping to explore some of Skyrim's highest mountains",
	"politics. They are interested in learning peoples' opinions about the Empire, the civil war and political figures in Skyrim",
	"theology. They enjoy studying the Aedric and Daedric religions"
];

var fearOptions = [
	"bears",
	"Daedra",
	"draugr",
	"falmer",
	"ghosts",
	"spiders",
	"spriggans",
	"trolls",
	"vampires",
	"wisp mothers",
	"water"
];

var civilWarOptions = [
	"Imperial",
	"Stormcloak",
	"Does not join the civil war"
];

var dawnguardOptions = [
	"The Dawnguard",
	"The Volkihar Clan"
];

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCharacter() {
	var primary = 0;
	var secondary = 0;
	
	var virtue = 0;
	var flaw = 0;
	
	character.race = raceOptions[ getRandomInteger(0, raceOptions.length - 1) ];
	character.motivation = motivationOptions[ getRandomInteger(0, motivationOptions.length - 1) ];	
	character.interest = interestOptions[ getRandomInteger(0, interestOptions.length - 1) ];
	character.fear = fearOptions[ getRandomInteger(0, fearOptions.length - 1) ];
	character.civilWarSide = civilWarOptions[ getRandomInteger(0, civilWarOptions.length - 1) ];
	character.dawnguardSide = dawnguardOptions[ getRandomInteger(0, dawnguardOptions.length - 1) ];
	character.factions = factions.setFactions();
	
	classes.setClass( getRandomInteger(0, NO_OF_CLASSES) );
}