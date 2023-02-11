import { cardsImage } from './const';

describe('Check switch/case', () => {
  it('Check correct value', () => {
    const scorpion = 'Great Spiders';
    expect(cardsImage(scorpion) === 'scorpion');
    const nan = 'NaN';
    expect(cardsImage(nan) === 'nan');
    const ainur = 'Ainur';
    expect(cardsImage(ainur) === 'ainur');
    const horse = 'Horse';
    expect(cardsImage(horse) === 'horse');
    const maiar = 'Maiar';
    expect(cardsImage(maiar) === 'maiar');
    const elf = 'Elf';
    expect(cardsImage(elf) === 'elf');
    const hobbit = 'Hobbit';
    expect(cardsImage(hobbit) === 'hobbit');
  });

  it('Check equal value', () => {
    const man1 = 'Man';
    const man2 = 'Human';
    expect(cardsImage(man1) === cardsImage(man2));
    const dwarf1 = 'Dwarf';
    const dwarf2 = 'Dwarfs';
    expect(cardsImage(dwarf1) === cardsImage(dwarf2));
    const orc1 = 'Orc';
    const orc2 = 'Orcs';
    expect(cardsImage(orc1) === cardsImage(orc2));
    const ent1 = 'Ent';
    const ent2 = 'Ents';
    expect(cardsImage(ent1) === cardsImage(ent2));
    const dragon1 = 'Dragon';
    const dragon2 = 'Dragon';
    expect(cardsImage(dragon1) === cardsImage(dragon2));
    const volf1 = 'Werevolves';
    const volf2 = 'Wolfhound';
    expect(cardsImage(volf1) === cardsImage(volf2));
    const bird1 = 'Great Eagles';
    const bird2 = 'Eagle';
    const bird3 = 'Eagles';
    const bird4 = 'Raven';
    expect(
      cardsImage(bird1) === cardsImage(bird2) &&
        cardsImage(bird3) === cardsImage(bird4) &&
        cardsImage(bird2) === cardsImage(bird3)
    );
    const demon1 = 'Balrog';
    const demon2 = 'Maiar,Balrogs';
    expect(cardsImage(demon1) === cardsImage(demon2));
  });

  it('Check wrong value', () => {
    const test = 'aaa';
    expect(cardsImage(test) === 'other');
  });
});
