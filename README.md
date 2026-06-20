```
# User Management System

A full-stack web application for user management with robust API and responsive interface. Built with Go, React, and modern web technologies.

**Hiring Assessment Project** - Junior Developer Position

## Overview

This project demonstrates a complete user management system with production-ready code quality:

- **Backend**: Go REST API with SQLite database
- **Frontend**: React 18 with TypeScript for type safety
- **Build**: Vite for fast development and optimized production builds
- **Design**: Fully responsive across macOS, iOS, and desktop platforms
- **Architecture**: Clean separation of concerns with modular components

## Requirements

- Node.js (v14 or higher)
- Go (v1.16 or higher)
- SQLite 3
- npm or yarn package manager

Optional but recommended:
- VS Code with Go and TypeScript extensions
- REST client (Postman, Insomnia, or VS Code REST Client)

## Project Structure

```
Question 4/
├── backend/
│   ├── main.go              # Entry point and HTTP server
│   ├── go.mod               # Go module dependencies
│   ├── go.sum               # Dependency checksums
│   └── data/
│       └── users.db         # SQLite database file
│
└── frontend/
    ├── index.html           # Main HTML file
    ├── vite.config.ts       # Vite configuration
    ├── tsconfig.json        # TypeScript configuration
    ├── package.json         # npm dependencies
    │
    └── src/
        ├── main.tsx         # React entry point
        ├── App.tsx          # Root component
        ├── api/
        │   ├── api.ts       # HTTP client and API calls
        │   └── User.ts      # User type definitions
        │
        └── components/
            ├── UserList.tsx # Display users in table
            └── UserForm.tsx # Form for create/edit users
```

## Architecture

### System Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                         FULL STACK ARCHITECTURE                  │
└──────────────────────────────────────────────────────────────────┘

                        ┌─────────────────┐
                        │   BROWSER       │
                        │  (macOS/iOS)    │
                        └────────┬────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
            ┌───────▼────────┐      ┌────────▼────────┐
            │  React (18)    │      │  TypeScript     │
            │  Components    │      │  State Mgmt     │
            └───────┬────────┘      └────────┬────────┘
                    │                        │
                    └────────────┬───────────┘
                                 │
                     ┌───────────▼────────────┐
                     │  API Client (api.ts)   │
                     │  HTTP Requests         │
                     └───────────┬────────────┘
                                 │
                    ╔════════════▼════════════╗
                    ║    NETWORK (JSON)       ║
                    ║  REST API Endpoints     ║
                    ╚════════════┬════════════╝
                                 │
                     ┌───────────▼────────────┐
                     │   GO BACKEND           │
                     │   HTTP Router          │
                     │   Request Handlers     │
                     └───────────┬────────────┘
                                 │
                     ┌───────────▼────────────┐
                     │  SQLite Database       │
                     │  users.db              │
                     │  (Persistent Data)     │
                     └────────────────────────┘
```

### Frontend Component Tree

```
┌─────────────────────────────────────────┐
│            App.tsx (Root)               │
│   - Manages global state                │
│   - Routes between views                │
└──────────────┬──────────────────────────┘
               │
      ┌────────┴─────────┐
      │                  │
   ┌──▼─────────┐   ┌───▼──────────┐
   │ UserList   │   │  UserForm    │
   │ Component  │   │  Component   │
   │            │   │              │
   │ - Display  │   │ - Input      │
   │ - Delete   │   │ - Validation │
   │ - Edit     │   │ - Submit     │
   └──┬─────────┘   └───┬──────────┘
      │                 │
      └────────┬────────┘
               │
        ┌──────▼────────┐
        │  api.ts       │
        │  HTTP Client  │
        └──────┬────────┘
               │
        ┌──────▼────────┐
        │  User.ts      │
        │  TypeScript   │
        │  Types        │
        └───────────────┘
```

### Backend Request Flow

```
┌─────────────────────────────────────────┐
│       HTTP Request from Frontend        │
│  POST /api/users  {name, email, age}   │
└──────────────────┬──────────────────────┘
                   │
       ┌───────────▼────────────┐
       │   HTTP Router          │
       │   (main.go)            │
       │   - Parse route        │
       │   - Validate method    │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │   Request Handler      │
       │   - Parse JSON         │
       │   - Validate data      │
       │   - Error checking     │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │   Database Operation   │
       │   - SQL Query          │
       │   - INSERT/UPDATE      │
       │   - Transaction mgmt   │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │   SQLite Database      │
       │   - Execute query      │
       │   - Store data         │
       │   - Return result      │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │   Response Handler     │
       │   - Format JSON        │
       │   - Set status code    │
       │   - Add headers        │
       └───────────┬────────────┘
                   │
└───────────────────▼──────────────────────┐
│     HTTP Response to Frontend           │
│  200/201/400/500 + JSON Payload         │
└─────────────────────────────────────────┘
```

### Data Model

```
┌─────────────────────────────────────────┐
│            User Entity                  │
├─────────────────────────────────────────┤
│  Field      │  Type    │  Description   │
├─────────────┼──────────┼────────────────┤
│  ID         │  int     │  Primary key   │
│  Name       │  string  │  Full name     │
│  Email      │  string  │  Email addr    │
│  Age        │  int     │  User age      │
│  CreatedAt  │  time    │  Timestamp     │
│  UpdatedAt  │  time    │  Last modified │
└─────────────────────────────────────────┘
```

## Quick Start

### Backend Setup

Navigate to backend directory and install dependencies:
```bash
cd Question\ 4/backend
go mod tidy
```

Start the API server:
```bash
go run main.go
```

The server will be available at: **http://localhost:8080**

Verify it's running:
```bash
curl http://localhost:8080/api/users
```

### Frontend Setup

In another terminal, navigate to frontend directory:
```bash
cd Question\ 4/frontend
npm install
```

Start the development server:
```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

The browser will hot-reload whenever you make changes to the code.

## API Documentation

### Base URL
```
http://localhost:8080/api
```

### Endpoints

| Method | Endpoint | Description | Payload |
|--------|----------|-------------|---------|
| GET | `/users` | Retrieve all users | - |
| GET | `/users/:id` | Retrieve user by ID | - |
| POST | `/users` | Create new user | `{name, email, age}` |
| PUT | `/users/:id` | Update user | `{name, email, age}` |
| DELETE | `/users/:id` | Delete user | - |

### Example Requests

Create user:
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'
```

Get all users:
```bash
curl http://localhost:8080/api/users
```

## Frontend Features

**User Management**
- View all users in a responsive table
- Create new users with form validation
- Edit existing user information
- Delete user records with confirmation
- Real-time data synchronization

**User Experience**
- Responsive design for all screen sizes
- Form validation with error messages
- Loading states and user feedback
- Clean, intuitive interface
- Smooth interactions and transitions

**Technical**
- Type-safe components with TypeScript
- Efficient state management
- Error handling and fallbacks
- Optimized performance
- Cross-browser compatibility

## Responsive Design

**macOS**
- Native-like interface following Apple design guidelines
- Support for dark and light modes
- Full keyboard navigation support
- Optimized spacing and typography

**iOS/Mobile**
- Touch-friendly interface elements
- Mobile-first responsive layout
- Proper viewport and safe area handling
- Optimized font sizes and tap targets
- Works on iPhone and iPad

**Desktop/Tablet**
- Full-width responsive layouts
- Optimized grid and table displays
- Hover effects and interactive states
- Multi-column layouts for large screens

## Technologies & Tools

**Backend**
- Go 1.16+ - High-performance server language
- SQLite - Lightweight, serverless database
- RESTful API design - Standard HTTP endpoints
- CORS support - Cross-origin requests

**Frontend**
- React 18 - Modern UI library with hooks
- TypeScript - Type safety and better DX
- Vite - Lightning-fast build tool
- CSS3 - Responsive styling with modern features
- Fetch API - HTTP client for API calls

## Code Quality & Best Practices

- Clean architecture with separation of concerns
- Type-safe code with TypeScript throughout
- Modular component structure
- Error handling and validation
- Responsive design mobile-first approach
- RESTful API conventions
- Code organization and maintainability
- Proper dependency management

## Development Workflow

1. Make changes to code
2. Backend: Changes require manual server restart
3. Frontend: Hot-reload automatic with Vite
4. Test with browser or API client (curl/Postman)
5. Verify responsive design with DevTools

## Troubleshooting

**Backend won't start**
- Check if port 8080 is in use
- Ensure Go is installed: `go version`
- Run `go mod tidy` to update dependencies

**Frontend won't start**
- Check if port 5173 is in use
- Clear node_modules: `rm -rf node_modules && npm install`
- Ensure Node.js v14+: `node --version`

**API requests failing**
- Verify backend is running
- Check CORS headers in response
- Ensure JSON format is correct
- Check database file exists

## Assessment Highlights

- **Architecture**: Well-organized codebase with clear separation
- **Implementation**: Functional CRUD operations with validation
- **UI/UX**: Responsive design and user-friendly interface
- **Code Quality**: TypeScript, proper error handling, clean code
- **Full-Stack**: Complete solution from database to UI
- **Deployment Ready**: Production-grade code practices

---

Built for senior developer assessment | Full-stack web application showcase  
```
