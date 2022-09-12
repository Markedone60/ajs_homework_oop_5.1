import Character from './character';
import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const warrior = new Character('warrior', 'Swordsman', 100, 1, 20, 20);
console.log(warrior);

const bowman = new Bowman('bowman');
console.log(bowman);

const sword = new Swordsman('sword');
console.log(sword);

const magicman = new Magician('magicman');
console.log(magicman);

const ghoul = new Undead('ghoul');
console.log(ghoul);

const notdead = new Daemon('notdead');
console.log(notdead);

const brainz = new Zombie('brainz');
console.log(brainz);
