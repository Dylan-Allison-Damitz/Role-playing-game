export default class Faction {
  constructor() {
    this.factionName = factionName;
    this.hitPoints = 100;  
    this.strength = 0; 
    this.luck = 0;
    this.intelligence = 0;
    this.stealth = 0;
    this.charisma = 0;
  }
  marquise = () => {
    this.factionName = "Marquise De Cat";
    this.strength = 10;
    this.luck = 20;
    this.intelligence = 20;
    this.stealth = 40;
    this.charisma = 5;
  }
  woodland = () => {
    this.factionName = "Woodland Alliance";
    this.strength = 20;
    this.luck = 20;
    this.intelligence = 25;
    this.stealth = 20;
    this.charisma = 15;
  }
  vagabond = () => {
    this.factionName = "Vagabond";
    this.strength = 20;
    this.luck = 35;
    this.intelligence = 20;
    this.stealth = 15;
    this.charisma = 10;
  }
  lizards = () => {
    this.factionName = "Lizard Cult";
    this.strength = 20;
    this.luck = 10;
    this.intelligence = 30;
    this.stealth = 10;
    this.charisma = 30;
  }  
  corvid = () => {
    this.factionName = "Corvid Conspiracy";
    this.strength = 5;
    this.luck = 10;
    this.intelligence = 25;
    this.stealth = 20;
    this.charisma = 40;
  };
}
      