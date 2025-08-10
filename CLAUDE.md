# Claude Instructions for Homepage Project

## Code Formatting

- **ALWAYS** run `npm run format` after editing or creating any files
- This project uses Prettier for code formatting with default settings
- All code must be properly formatted before considering a task complete

## Development Workflow

- Run tests with `npm run test:run` after making changes
- Use `npm run lint` to check for linting issues
- Use `npm run generate` to build the static site
- Use `npm run build:prod` for production builds

## Project Structure

- This is a static site generator using React + TypeScript + Vite
- Static files are generated to `/dist/` directory
- Source files are in `/src/`
- Static assets are in `/static/`

## URLs

- Use clean URLs without file extensions or trailing slashes
- Home: `/`
- Projects: `/projects`
- Resume: `/resume`
