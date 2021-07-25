import PointSystem from '../src/PointSystem.js';

describe('PointSystem', () => {
  let vagaBond;

  
  beforeEach(() => {
    vagaBond = new PointSystem(1, 1, 2);
  });
  
  test('should correctly create a character object with three parameters', () => {
    expect(vagaBond.questPoints).toEqual(1);
    expect(vagaBond.battlePoints).toEqual(1);
    expect(vagaBond.totalPoints).toEqual(2);
  });
  test('should correctly return a value of +1 when addQuestPoints is called on', () => {
      expect(vagaBond.addQuestPoints()).toEqual(2);
  });
  test('should correctly return a value of +1 when battlePoints is called on', () => {
      expect(vagaBond.addBattlePoints()).toEqual(2); 
  });
  test('should correctly return the value of battlePoints + questPoints within the totalPoints', () => {
      expect(vagaBond.addTotalPoints()).toEqual(4);
  })
});

