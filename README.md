let questMap = new Map(
  [
    [1, "You come across a wagon full of magic potions, protected by a hoard of ogres."],(require:stealth(+30))
    [2, "Your journey leads to a guarded bridge over dangerously fast moving water torrents, you must persuade the troll to let you cross."],(required: charisma(+25))
    
    [3, "You've outwitted the orcs! Attempt to steal their pot of dinner."],(require: intelligence(+20))
    [4, "You must convince the schemeing leprechauns you mean them no harm, or else, they'll steal your gold!"],(require:charisma(+10))
    
    [5, "What luck! You secretly stumble upon a dragons hoard, take what you can before he returns"],(require: luck(+20))
    [6, "You weren't paying attention and step in a giant pile of dragon deuce."],(require: charisma(+9))
    
    [7, "While searching ruins for loot, you stumble into a pack of hungry boars. You've mere seconds until you're a pig's dinner..."], (require: luck(+20))
    [8, "Your camp is visited by a cloaked stranger seeking shelter. Provide them respite, or turn them back into the harsh elements?"], (require: luck(+35))
    
    [9, "A swarm of faes approach you after entering a magical field. Do not ignore this oppurtunity"],(required: charisma(+35))
    [10, "Rescue a damsel in distress or get choked out by her menacing minotaur lover"],(required: strength(+15))
    
    [11, "Entering a haunted forrest can have its perks! Sneak through to drink from the healing oasis"], (require: stealth(+40))
    [12, ""],
    [13, ""],
    [14, ""],
    [15, ""],
    [16, ""],

  ]
)
let marquisQuestReaction = new Map(
  [
    [1, "You wait until the middle of the night and successfully steal it while the ogres are asleep."], (Gain one quest point)
    [2, "The troll becomes irritated with your catty disposition and throws you into the violent waters."],(lose one quest point)
    
    [3, "The orcs are slow and stupid! You've taken enough food to eat for a week!"], (Gain one quest point)
    [4, "Your persuasion skills are incompetent, and the leprechauns steal your gold!"], (Lose one quest point)

    [5, "The dragon must be away on a business trip.. You've taken as much gold as you can carry."] (Gain one quest point)
    [6, "That's rough, buddy."](Lose one quest point)
    
    [7, "You notice an unstable stone terrace perched above the angry boars. You sling a hot fire arrow into the stonework, toppling the heavy stones onto the pack. You didn't find any loot, but dinner is served!"],(gain one quest point)
    [8, "You welcome the cloaked stranger into your camp with open arms, hoping to employ him as a scout. Unfortunately for you, the stranger was an enemy scout who robbed you of the camp's medicinal supplies while you slept."](Lose one quest point)
    
    [9, "The faes misundestand you and in a rage fit, hoist you into the air and drop you miles behind schedule."],(lose one quest point)
    [10, "You wake up in a daze. Turns out your feeble body was no match for the Minotaur's rear-naked-choke."](lose one quest point)
    
    [11, ""]
    [12, ""]
    [13, ""]
    [14, ""]
    [15, ""]
    [16, ""]
  ]
)

}
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



USER EXPERIENCE:
-Page opens
-radio buttons to select faction
-"