# 🔐 Express MongoDB Authentication API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-REST_API-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens"/>
</p>

<p align="center">
  <strong>A secure REST API built with Node.js, Express, and MongoDB featuring JWT Authentication, Refresh Tokens, Role-Based Authorization, and Ownership Protection.</strong>
</p>

---

# ✨ Features

<p align="center">

🔐 Secure Authentication
🎟️ JWT Access Tokens
♻️ Refresh Token Authentication
🚪 Secure Logout
👤 User Management
🛡️ Role-Based Authorization
🔒 Ownership-Based Access Control
⚠️ Centralized Error Handling
📦 Modular Backend Architecture

</p>

---

# 🛠️ Tech Stack

## 🚀 Backend

<p align="left">
<img src="https://skillicons.dev/icons?i=nodejs,express,javascript" />
</p>

| Technology | Description                    |
| ---------- | ------------------------------ |
| Node.js    | JavaScript Runtime Environment |
| Express.js | REST API Framework             |
| JavaScript | Backend Programming Language   |

---

## 🗄️ Database

<p align="left">
<img src="https://skillicons.dev/icons?i=mongodb" />
</p>

| Technology | Description    |
| ---------- | -------------- |
| MongoDB    | NoSQL Database |
| Mongoose   | MongoDB ODM    |

---

## 🔐 Authentication & Security

<p align="left">

<img src="https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens"/>

<img src="https://img.shields.io/badge/bcrypt-Password_Hashing-blue?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Role_Based-Authorization-green?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Ownership-Protection-orange?style=for-the-badge"/>

</p>

---

## 🧰 Development Tools

<p align="left">
<img src="https://skillicons.dev/icons?i=git,github,vscode,postman" />
</p>

---

# 🏗️ Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services / Utilities
   │
   ▼
MongoDB Database
```

---

# 📂 Project Structure

```bash
controllers/
├── auth.controller.js
└── user.controller.js

routes/
├── auth.routes.js
└── user.routes.js

middleware/
├── authMiddleware.js
├── ownershipMiddleware.js
├── errorMiddleware.js
└── asyncHandler.js

models/
└── User.js

utils/
└── generateTokens.js

config/
└── db.js

.env
.gitignore
index.js
package.json
```

---

# 🔑 Authentication Flow

```text
Register User
      │
      ▼
   Login
      │
      ▼
Generate JWT
Access Token + Refresh Token
      │
      ▼
Protected Routes
      │
      ▼
Refresh Token
      │
      ▼
New Access Token
```

---

# ⚙️ Installation

## 📥 Clone Repository

```bash
git clone https://github.com/nitin01924/express-mongodb-api.git
```

## 📦 Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 🚀 Run Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
node index.js
```

---

# 📡 API Endpoints

## 🔐 Authentication Routes

| Method | Endpoint        |
| ------ | --------------- |
| POST   | `/auth/login`   |
| POST   | `/auth/refresh` |
| POST   | `/auth/logout`  |

---

## 👤 User Routes

| Method | Endpoint     |
| ------ | ------------ |
| POST   | `/users`     |
| GET    | `/users`     |
| GET    | `/users/:id` |
| PUT    | `/users/:id` |
| DELETE | `/users/:id` |

---

# 🛡️ Security Features

<p align="center">

✅ Password Hashing (bcrypt)

✅ JWT Authentication

✅ Refresh Token Authentication

✅ Secure Route Protection

✅ Ownership Middleware

✅ Role-Based Authorization

✅ Error Handling Middleware

</p>

---

# 📬 API Testing

<p align="left">
<img src="https://skillicons.dev/icons?i=postman" />
</p>

Use Postman to test:

* Login
* Register
* Refresh Token
* Protected Routes
* User CRUD Operations

---

# 🚀 Future Improvements

🔹 Email Verification

🔹 Password Reset System

🔹 Rate Limiting

🔹 API Documentation

🔹 Docker Support

🔹 Unit Testing

🔹 Refresh Token Rotation

🔹 Account Verification

---

<div align="center">

### ❤️ Built with Node.js, Express & MongoDB

**Created by Nitin Kumar**

</div>
