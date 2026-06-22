import { Character } from './character';

export class Mage extends Character {
    constructor (
        name: string,
        maxHp: number,
        public mana: number,
        public spellDamage: number
    ) {
        super(name, maxHp);
    }   

    castSpell ( person: Character ): string {
        if (this.mana < 30) {
            person.takeDamage(10);

            return `${this.name} no tiene maná suficiente - ataque básico de 10 | ${person.getStatus()}`;
        }

        person.takeDamage(this.spellDamage);
        this.mana -= 30;

        return `${this.name} lanza un hechizo causando ${this.spellDamage} de daño | ${person.getStatus()}`;
    }
}

