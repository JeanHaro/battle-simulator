import { Character } from './character';
import { Healer } from './healer';
import { Mage } from "./mage";
import { Warrior } from "./warrior";

const startBattle = ( teamA: Character[], teamB: Character[] ) => {
    let turnos = 0;

    const bajaA: string[] = [];
    const bajaB: string[] = [];

    while ( teamA.length > 0 && teamB.length > 0 ) {
        turnos += 1;

        if ( !teamA[0].isAlive() ) {
            bajaA.push(teamA[0].name);
            teamA.shift();
        }

        if ( !teamB[0].isAlive() ) {
            bajaB.push(teamB[0].name);
            teamB.shift();
        }

        for (const member of teamA) {
            if (!member.isAlive()) continue;
            if (teamB.length === 0) break;

            if ( member instanceof Warrior ) {
                console.log(member.attack(teamB[0]));
            }

            if ( member instanceof Mage ) {
                console.log(member.castSpell(teamB[0]));
            }

            if ( member instanceof Healer ) {
                const characterWeak = [...teamA].sort((a, b) => a.getHp() - b.getHp())[0];

                console.log(member.healAlly(characterWeak));
            } 
        }

        for (const member of teamB) {
            if (!member.isAlive()) continue;
            if (teamA.length === 0) break;

            if ( member instanceof Warrior ) {
                console.log(member.attack(teamA[0]));
            }

            if ( member instanceof Mage ) {
                console.log(member.castSpell(teamA[0]));
            }

            if ( member instanceof Healer ) {
                const characterWeak = [...teamB].sort((a, b) => a.getHp() - b.getHp())[0];

                console.log(member.healAlly(characterWeak));
            } 
        }
    }

    const personajesB: string[] = [];
    const personajesA: string[] = [];

    if ( teamA.length > 0) {
        for ( const a of teamA ) {
            personajesA.push(a.getStatus())
        }

        console.log(`════════════════════════════
    ⚔️  BATALLA FINALIZADA
════════════════════════════
🏆 Ganador: Equipo A
📊 Turnos totales: ${turnos}
💀 Bajas del equipo perdedor: ${ bajaB.join(', ') }
❤️  Supervivientes: ${ personajesA.join(', ') }
════════════════════════════`);
    }

    if ( teamB.length > 0) {
        for ( const b of teamB ) {
            personajesB.push(b.getStatus())
        }

        console.log(`════════════════════════════
    ⚔️  BATALLA FINALIZADA
════════════════════════════
🏆 Ganador: Equipo B
📊 Turnos totales: ${turnos}
💀 Bajas del equipo perdedor: ${ bajaA.join(', ') }
❤️  Supervivientes: ${ [personajesB].join(', ') }
════════════════════════════`);
    }
}

// Equipo A
const thor   = new Warrior('Thor', 200, 'Mjolnir', 85);
const vision = new Healer('Vision', 150, 70, 100);

// Equipo B
const loki   = new Mage('Loki', 120, 90, 60);
const thanos = new Warrior('Thanos', 300, 'Guantelete', 120);

startBattle([thor, vision], [loki, thanos]);