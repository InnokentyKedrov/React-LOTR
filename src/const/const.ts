import dwarfs from '../assets/dwarfs.png';
import humans from '../assets/humans.png';
import elfs from '../assets/elfs.png';
import hobbits from '../assets/hobbits.png';
import maiar from '../assets/maiar.png';
import ent from '../assets/ent.png';
import dragon from '../assets/dragon.png';
import nan from '../assets/nan.png';
import ainur from '../assets/ainur.png';
import horse from '../assets/horse.png';
import scorpion from '../assets/scorpion.png';
import werevolf from '../assets/werevolf.png';
import orc from '../assets/orc.png';
import bird from '../assets/bird.png';
import demon from '../assets/demon.png';
import other from '../assets/other.png';

export const cardsImage = (race: string): string => {
  let img = '';
  switch (race) {
    case 'Human':
    case 'Men':
    case 'Men,Wraith':
      img = humans;
      break;
    case 'Dwarf':
    case 'Dwarves':
      img = dwarfs;
      break;
    case 'Elf':
    case 'Elves':
    case 'Half-elven':
      img = elfs;
      break;
    case 'Hobbit':
    case 'Hobbits':
      img = hobbits;
      break;
    case 'Maiar':
      img = maiar;
      break;
    case 'Ent':
    case 'Ents':
      img = ent;
      break;
    case 'Dragon':
    case 'Dragons':
    case 'Urulóki':
      img = dragon;
      break;
    case 'NaN':
      img = nan;
      break;
    case 'Ainur':
      img = ainur;
      break;
    case 'Horse':
      img = horse;
      break;
    case 'Great Spiders':
      img = scorpion;
      break;
    case 'Werewolves':
    case 'Wolfhound':
      img = werevolf;
      break;
    case 'Orc':
    case 'Orcs':
    case 'Uruk-hai,Orc':
    case 'Uruk-hai':
    case 'Goblin,Orc':
    case 'Black Uruk':
    case 'Orc,Goblin':
      img = orc;
      break;
    case 'Great Eagles':
    case 'Eagle':
    case 'Eagles':
    case 'Raven':
      img = bird;
      break;
    case 'Balrog':
    case 'Maiar,Balrogs':
      img = demon;
      break;
    default:
      img = other;
  }

  return img;
};
