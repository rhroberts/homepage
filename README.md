# Homepage

My personal website.

## Development

Requires [Node.js](https://nodejs.org/).

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (TypeScript + Vite bundle)
npm run build

# Generate static HTML files
npm run generate

# Build everything for production (build + generate)
npm run build:prod

# Preview production build locally
npm run preview
```

The development server runs at `http://localhost:5173` with hot module replacement.

## Deployment

Run `npm run build:prod` to create a complete production build. The `dist/` folder contains the static website ready for deployment to any static hosting service.
