import Faction from '../src/Faction.js';

describe('Faction', () => {
  let faction;

  
  beforeEach(() => {
    faction = new Faction();
  });
  
  test('should correctly create a faction object with six parameters', () => {
    faction.marquise();
    expect(faction.factionName).toEqual("Marquise De Cat");
    expect(faction.hitPoints).toEqual(100);
    expect(faction.strength).toEqual(10);
    expect(faction.luck).toEqual(20);
    expect(faction.intelligence).toEqual(20);
    expect(faction.stealth).toEqual(40);
    expect(faction.charisma).toEqual(5);
  });
  test('should correctly create a faction object with six parameters', () => {
    faction.woodland();
    expect(faction.factionName).toEqual("Woodland Alliance");
    expect(faction.hitPoints).toEqual(100);
    expect(faction.strength).toEqual(20);
    expect(faction.luck).toEqual(20);
    expect(faction.intelligence).toEqual(25);
    expect(faction.stealth).toEqual(20);
    expect(faction.charisma).toEqual(15);
  });
  test('should correctly create a faction object with six parameters', () => {
    faction.vagabond();
    expect(faction.factionName).toEqual("Vagabond");
    expect(faction.hitPoints).toEqual(100);
    expect(faction.strength).toEqual(20);
    expect(faction.luck).toEqual(35);
    expect(faction.intelligence).toEqual(20);
    expect(faction.stealth).toEqual(15);
    expect(faction.charisma).toEqual(10);
  });
  test('should correctly create a faction object with six parameters', () => {
    faction.lizards();
    expect(faction.factionName).toEqual("Lizard Cult");
    expect(faction.hitPoints).toEqual(100);
    expect(faction.strength).toEqual(20);
    expect(faction.luck).toEqual(10);
    expect(faction.intelligence).toEqual(30);
    expect(faction.stealth).toEqual(10);
    expect(faction.charisma).toEqual(30);
  });
  test('should correctly create a faction object with six parameters', () => {
    faction.corvid();
    expect(faction.factionName).toEqual("Corvid Conspiracy");
    expect(faction.hitPoints).toEqual(100);
    expect(faction.strength).toEqual(5);
    expect(faction.luck).toEqual(10);
    expect(faction.intelligence).toEqual(25);
    expect(faction.stealth).toEqual(20);
    expect(faction.charisma).toEqual(40);
  });
});

