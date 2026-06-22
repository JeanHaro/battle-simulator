# Battle Simulator

Sistema de batallas por turnos construido con **TypeScript** y **ES6**, como práctica de clases, herencia, encapsulamiento y lógica de iteración.

---

## Arquitectura

```
src/
├── character.ts   → Clase base con HP, daño y curación
├── warrior.ts     → Extiende Character — ataca con arma
├── mage.ts        → Extiende Character — lanza hechizos con maná
├── healer.ts      → Extiende Character — cura al aliado más débil
└── app.ts         → Lógica de batalla y reporte final
```

---

## Conceptos practicados

| Concepto | Dónde se aplica |
|---|---|
| Clases ES6 | `Character`, `Warrior`, `Mage`, `Healer` |
| Herencia (`extends` + `super`) | Las 3 subclases |
| Encapsulamiento (`private` + getter) | `hp` privado con `getHp()` e `isAlive()` |
| `Math.max` / `Math.min` | Límites de HP y maná |
| `for...of` | Iteración de equipos en cada turno |
| `instanceof` | Determinar acción según tipo de personaje |
| Destructuring + `const`/`let` | A lo largo de toda la lógica |
| Template literals | Todos los mensajes de batalla y reporte |

---

## 🎮 Cómo funciona

Cada turno, todos los personajes vivos actúan en orden:

- **Warrior** → ataca al primer enemigo vivo del equipo contrario
- **Mage** → lanza hechizo (cuesta 30 de maná) o ataque básico si no hay maná
- **Healer** → cura al aliado con menos HP de su propio equipo

La batalla termina cuando todos los miembros de un equipo llegan a 0 HP.

---

## Cómo correrlo

```bash
pnpm start
```

---

## Equipos de prueba

```typescript
// Equipo A
const thor   = new Warrior('Thor',   200, 'Mjolnir',     85);
const vision = new Healer ('Vision', 150,  70,           100);

// Equipo B
const loki   = new Mage   ('Loki',   120,  90,            60);
const thanos = new Warrior('Thanos', 300, 'Guantelete',  120);

startBattle([thor, vision], [loki, thanos]);
```

---

## Ejemplo de output

```
Thor ataca con Mjolnir causando 85 de daño | Loki | HP: 35/120
Vision cura a Thor por 70 HP | Thor HP: 200/200
Loki lanza un hechizo causando 60 de daño | Thor | HP: 140/200
...
════════════════════════════
    ⚔️  BATALLA FINALIZADA
════════════════════════════
🏆 Ganador: Equipo B
📊 Turnos totales: 5
💀 Bajas del equipo perdedor: Thor, Vision
❤️  Supervivientes: Thanos | HP: 300/300
════════════════════════════
```