``` User Management System

Requirements

To run the project, you need the following technologies:
- Node.js (v14 or higher)
- Go (v1.16 or higher)
- SQLite

Project Structure

user-management/
├── backend/
│   ├── main.go
│   └── go.mod
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── UserList.tsx
    │   │   └── UserForm.tsx
    │   └── App.tsx
    ├── package.json
    └── vite.config.ts

Running the Project

Backend

1. Navigate to the backend folder:
   cd backend

2. Install Go dependencies:
   go mod tidy

3. Start the server:
   go run main.go

The server will run at: http://localhost:8080

Frontend

1. Navigate to the frontend folder:
   cd frontend

2. Install Node modules:
   npm install

3. Start the development server:
   npm start

The application will run at: http://localhost:3000

API Endpoints

GET /api/users           → Retrieves all users  
GET /api/users/:id       → Retrieves a specific user  
POST /api/users          → Creates a new user  
PUT /api/users/:id       → Updates a user  
DELETE /api/users/:id    → Deletes a user

Features

- List users in a table  
- Add new user  
- Edit existing user  
- Delete user  
```
