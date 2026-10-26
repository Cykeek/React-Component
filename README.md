# React Components

A Vite + React workspace for crafting reusable UI components with
[Tailwind CSS](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com).

## Getting started

```bash
npm install
npm run dev
```

## What's included

- **`src/components/users-table.jsx`** — a shadcn `Card` wrapping a 5×5 data
  table. The header row is sticky while the body scrolls.
- **`src/components/ui/`** — shadcn Card, Table, and Button primitives.
- Tailwind CSS v4 via `@tailwindcss/vite`, with the shadcn `base-nova` preset
  and neutral theme tokens.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build |
| `npm run lint` | Run oxlint |
| `npm run preview` | Preview the production build |

## Adding more shadcn components

```bash
npx shadcn@latest add <component>
```
