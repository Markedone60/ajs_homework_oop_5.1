export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new error('name shall be in string format and not less than 2 or more than 10 characters in length');
    } else {
      this.name = name;
    }

    if (Character.types.includes(type) === false) {
      throw new error('type is not properly defined');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
