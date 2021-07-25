class PointSystem {
  constructor(questPoints, battlePoints, totalPoints) {
    this.questPoints = questPoints;
    this.battlePoints = battlePoints;
    this.totalPoints =  totalPoints;
  }
}

class Faction {
  constructor(factionName, hitPoints, strength, luck, intelligence, stealth) {
    this.factionName = factionName;
    this.hitPoints = hitPoints;
    this.strength = strength;
    this.luck = luck;
    this.intelligence = intelligence;
    this.stealth = stealth;
  }
}

const marquisDeCat = new Faction("Marquis de Cat", 100, 15, 25, 20, 40,);



Classes/Characters:
* Marquise de Cat (cats - scores by building things/combat + points)
(Marquise rolls for wood(3 or higher), 3 wood can build towers which = 1 quest point)

* Woodland Alliance (mice - score by gaining followers --> sympathy + points) (The alliance rolls for followers- 3 or higher = 1 follower, 3 followers = quest 1 point) 

* Vagabond (Raccoon - score by completing quests/fame + points)
(Vagabond rolls to complete quests- 3 or higher = quest complete + 1 quest point)

* Lizard Cult (lizards - score by indoctrinating people into cult + points) (Lizards roll to indoctrinate - 3 or higher = 1 new member + 1 quest point)

* Corvid Conspiracy (Ravens/Crows - spreading conspiracies + points)
(Corvids roll to spread conspiracies, 3 or higher = 1 new conspiracy + 1 point)