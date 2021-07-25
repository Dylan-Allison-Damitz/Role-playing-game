import Faction from '../src/Faction.js';

describe('Faction', () => {
  let faction;

  
  beforeEach(() => {
    faction = new Faction();
  });
  
  test('should correctly create a faction object with six parameters', () => {
    faction.marquis
    expect(faction.factionName).toEqual("Marquise de Cat");
    expect(faction.hitPoints).toEqual(100);
    expect(faction.strength).toEqual(15);
    expect(faction.luck).toEqual(25);
    expect(faction.intelligence).toEqual(20);
    expect(faction.stealth).toEqual(40);
  })
});

