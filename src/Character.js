export default class Character {
  constructor(factionName, questPoints, battlePoints, totalPoints) {
    this.factionName = factionName;
    this.questPoints = 0;
    this.battlePoints = battlePoints;
    this.totalPoints =  totalPoints;
  }
}
  Character.prototype.addQuestPoints = function() {
    this.questPoints += 1;
    return this.questPoints;
}
