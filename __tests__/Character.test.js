import Character from '../src/Character.js';

describe('Character', () => {
  test('should correctly create a character object with four parameters', () => {
    const userCharacter = new Character("Vagabond", "0", "0", "0");
    expect(userCharacter.factionName).toEqual("Vagabond");
    expect(userCharacter.questPoints).toEqual(0);
    expect(userCharacter.battlePoints).toEqual("0");
    expect(userCharacter.totalPoints).toEqual("0");
  });
  test('should correctly return a value of +1 when addQuestPoints is called on', () => {
      const incrementQuestPoints = new Character("Vagabond", "0", "0", "0");
      expect(incrementQuestPoints.addQuestPoints()).toEqual(1);
  });
});


