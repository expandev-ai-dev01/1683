# AutoClean Backend API

## Description
Backend API for AutoClean - A file management system that identifies and removes temporary or duplicate files from selected folders.

## Features
- Identify and remove temporary files
- RESTful API architecture
- Multi-tenancy support
- Comprehensive error handling
- Type-safe with TypeScript

## Technology Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MS SQL Server
- **Validation**: Zod

## Prerequisites
- Node.js 18.x or higher
- MS SQL Server
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd autoclean-backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run database migrations
```bash
# Execute SQL scripts in database/ folder
```

## Development

### Start development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Run tests
```bash
npm test
```

### Lint code
```bash
npm run lint
npm run lint:fix
```

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## API Documentation

### Base URL
- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check
```
GET /health
```

## Environment Variables

See `.env.example` for all available configuration options.

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## License

ISC