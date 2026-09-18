# Ved Vyas — Portfolio

A personal site with a game layer: a clean, typography-led base with an XP bar,
unlockable achievements and a trophy case built out of real accomplishments.

Live: https://my-portfolio-xi-azure-53.vercel.app

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · lucide-react.
No other runtime dependencies — every animation is hand-rolled CSS plus
`IntersectionObserver`.

## Editing the content

Everything on the page comes from one file: [`lib/config.ts`](lib/config.ts).
Types live in [`lib/types.ts`](lib/types.ts). Changing a bullet, adding a
project, or adding a trophy means editing that config — no component changes.

| Field        | Drives                                        |
| ------------ | --------------------------------------------- |
| `stats`      | The attribute block (bar + evidence on hover) |
| `quests`     | Experience, as an expandable quest log        |
| `artifacts`  | Projects, with rarity tiers and stat readouts |
| `skillTree`  | The skill tree branches                       |
| `trophies`   | The trophy case                               |
| `education`  | The loadout section                           |
| `achievements` / `levels` | The visitor XP system            |

## The game layer

- **XP and levels** — visitors earn XP for exploring; progress persists in
  `localStorage` and survives a reload.
- **Achievements** — ten of them, two secret. The trophy chip in the header
  opens the full list.
- **Konami code** — `↑ ↑ ↓ ↓ ← → ← → B A` unlocks dev mode, which reveals
  anything marked `.dev-only`.
- **Theme** — dark by default, light on toggle, applied before first paint by a
  small inline script so there is no flash.

Everything degrades: with JavaScript off, the inline script never sets
`data-motion`, so every section renders visible rather than stuck at
`opacity: 0`.

## Development

```bash
npm install
npm run dev
```

```bash
npm run build && npm run lint
```
