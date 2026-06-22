export class Character {
    private hp: number;

    constructor ( 
        public name: string, 
        public maxHp: number 
    ) {
        this.hp = maxHp;
    }

    getHp(): number {
        return this.hp;
    }

    isAlive(): boolean {
        return this.hp > 0;
    }

    takeDamage ( amount: number ): void {
        this.hp = Math.max(0, this.hp - amount);
    }

    heal ( amount: number ): void {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    getStatus(): string {
        return `${this.name} | HP: ${this.hp}/${this.maxHp}`;
    }
}

