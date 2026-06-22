import { Character } from './character';

export class Healer extends Character {
    constructor (
        name: string,
        maxHp: number,
        public healPower: number,
        public mana: number
    ) {
        super(name, maxHp);
    }

    healAlly ( person: Character ): string {
        if ( this.mana < 20 ) {
            const halfHeal = this.healPower / 2;
            const actualHeal = Math.min(
                halfHeal, 
                person.maxHp - person.getHp()
            ); 
            
            person.heal(halfHeal);

            return `${this.name} cura a ${person.name} por ${actualHeal} HP (sin maná) | ${person.name} HP: ${person.getHp()}/${person.maxHp}`;
        }

        this.mana -= 20;
        person.heal(this.healPower);

        return `${this.name} cura a ${person.name} por ${this.healPower} HP | ${person.name} HP: ${person.getHp()}/${person.maxHp}`;
    }
}