# Homepage

My personal website.

## Development

Requires [Node.js](https://nodejs.org/).

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Vite build for development
npm run build

# Generate static HTML files
npm run generate

# Build everything for production (build + generate)
npm run build:prod

# Preview production build locally
npm run preview

# Run tests in watch mode
npm test

# Run tests once
npm run test:run
```

The development server runs at `http://localhost:5173` with hot module replacement.

## Deployment

Run `npm run build:prod` to create a complete production build. The `dist/` folder contains the static website ready for deployment to any static hosting service.
