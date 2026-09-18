# Ved Vyas, portfolio

My personal site. It's a normal portfolio with a game layer sitting on top of it,
so there's an XP bar, a set of achievements you unlock by scrolling around, and a
trophy case built out of things that actually happened.

Live at https://ved-vyas.vercel.app

## Stack

Next.js, React, Tailwind, and lucide-react for icons. Nothing else at runtime.
Every animation is hand-written CSS plus `IntersectionObserver`.

## Changing the content

All of it lives in one file, [`lib/config.ts`](lib/config.ts), with the types in
[`lib/types.ts`](lib/types.ts). Adding a project or rewriting a bullet means
editing that config. You shouldn't need to touch a component.

| Field | What it drives |
| --- | --- |
| `stats` | The attribute block, where each bar opens to the evidence behind it |
| `quests` | Experience, as a quest log you can expand |
| `artifacts` | Projects, with rarity tiers and a strip of headline numbers |
| `skillTree` | The skill tree branches |
| `trophies` | The trophy case |
| `education` | The loadout section |
| `achievements`, `levels` | The visitor XP system |

## The game layer

Visitors earn XP for exploring. Progress is saved to `localStorage`, so it
survives a reload. There are ten achievements and two of them are hidden. The
trophy chip up in the header opens the full list.

The Konami code turns on dev mode, which reveals anything marked `.dev-only`.

Dark theme by default, light if you toggle it. A small inline script applies the
saved theme before the first paint so you never see the wrong one flash.

That same script sets `data-motion`, which is what gates the scroll animations.
If JavaScript is off, the flag never gets set and every section just renders
visible instead of sitting at `opacity: 0` forever.

## Running it

```bash
npm install
npm run dev
```

```bash
npm run build && npx eslint .
```
