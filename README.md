# Homepage

My personal website.

## Development

Requires [Node.js](https://nodejs.org/).

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Vite preview
npm run preview

# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Format code
npm run format

# Lint code
npm run lint
```

The development server runs at `http://localhost:5173` with hot module replacement.

## Deployment

This is a Single Page Application (SPA) with client-side routing. Run `npm run build` to create the production build.

### Deployment Options:

- **Netlify/Vercel**: Will automatically handle SPA routing
- **GitHub Pages**: Includes 404.html fallback for routing
- **Other static hosts**: The `_redirects` file configures SPA routing
