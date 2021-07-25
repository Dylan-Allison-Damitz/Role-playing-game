export default class PointSystem  {
  constructor(questPoints, battlePoints, totalPoints) {
    this.questPoints = 1;
    this.battlePoints = 1;
    this.totalPoints =  2;
  }

  addQuestPoints = () => {
    this.questPoints += 1;
    return this.questPoints;
  } 
  addBattlePoints = () => {
    this.battlePoints += 1;
    return this.battlePoints;
  }
  addTotalPoints= () => {
    this.totalPoints += this.questPoints + this.battlePoints;
    return this.totalPoints;
  }
}
