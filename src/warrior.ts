import { Character } from './character';

export class Warrior extends Character {
    constructor ( 
        name: string,
        maxHp: number,
        public weapon: string,
        public attackDamage: number
    ) {
        super(name, maxHp);
    }

    attack ( person: Character ): string {
        person.takeDamage(this.attackDamage);

        return `${this.name} ataca con ${this.weapon} causando ${this.attackDamage} de daño | ${person.getStatus()}`
    }
}

