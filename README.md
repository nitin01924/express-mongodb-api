# Express MongoDB Authentication API

A RESTful backend API built with **Node.js, Express, and MongoDB** that implements a secure authentication system using **JWT access tokens and refresh tokens**.

This project demonstrates backend architecture with **controllers, routes, middleware, and utilities**, along with **role-based authorization and ownership protection**.

---

## Features

- User registration
- Secure login system
- JWT authentication
- Refresh token authentication
- Logout with token invalidation
- Role-based authorization (admin / user)
- Ownership-based access control
- Error handling middleware
- Modular backend architecture

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (authentication)
- bcrypt (password hashing)

---

## Project Structure

controllers/
auth.controller.js
user.controller.js

routes/
auth.routes.js
user.routes.js

middleware/
authMiddleware.js
ownershipMiddleware.js
errorMiddleware.js
asyncHandler.js

models/
User.js

utils/
generateTokens.js

config/
db.js

.env

.gitignore

index.js

package.json

---

## Installation

Clone the repository:

```bash
git clone https://github.com/nitin01924/express-mongodb-api
```

## Install dependencies:

npm install

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Run The Server

```bash
npm run dev
or
node index.js
```

---

## API Endpoints

```markdown
## Authentication Routes

POST /auth/login  
POST /auth/refresh  
POST /auth/logout

## User Routes

POST /users  
GET /users  
GET /users/:id  
PUT /users/:id  
DELETE /users/:id

---

## Security

- Password hashing with bcrypt
- JWT authentication
- Short-lived access tokens
- Refresh token rotation
- httpOnly cookie storage
- Role-based authorization
- Ownership validation middleware
```
