import Character from '../src/Character.js';

describe('Character', () => {
test('should correctly create a character object with four parameters', () => {
    const userCharacter = new Character("Vagabond", "0", "0", "0");
    expect(userCharacter.factionName).toEqual("Vagabond");
    expect(userCharacter.questPoints).toEqual("0");
    expect(userCharacter.battlePoints).toEqual("0");
    expect(userCharacter.totalPoints).toEqual("0");
  });
});


