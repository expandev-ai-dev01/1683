# AutoClean Frontend

A React-based frontend application for the AutoClean file cleanup tool.

## Features

- Identify and remove temporary files
- Detect common temporary file extensions (.tmp, .temp, .cache)
- Free up disk space by removing unnecessary files

## Tech Stack

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2
- Zustand 5.0.8

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env` with your API configuration:

```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                 # Application configuration
│   ├── App.tsx         # Root component
│   └── router.tsx      # Routing configuration
├── assets/             # Static assets
│   └── styles/         # Global styles
├── core/               # Core utilities and components
│   ├── components/     # Shared components
│   ├── lib/           # Library configurations
│   ├── types/         # Global types
│   └── utils/         # Utility functions
├── domain/            # Business domains
├── pages/             # Page components
│   ├── layouts/       # Layout components
│   ├── Home/          # Home page
│   └── NotFound/      # 404 page
└── main.tsx           # Application entry point
```

## API Integration

The application uses Axios for API communication with two clients:

- `publicClient`: For public endpoints (no authentication)
- `authenticatedClient`: For protected endpoints (requires token)

API configuration is in `src/core/lib/api.ts`.

## State Management

- **TanStack Query**: Server state and caching
- **Zustand**: Client state (when needed)
- **React Context**: Global app state

## Contributing

1. Follow the existing code structure
2. Use TypeScript for all new files
3. Follow the naming conventions
4. Add JSDoc comments for public APIs
5. Test your changes before committing

## License

MIT