# Twitter Clone API

A RESTful API for a Twitter-like social media platform built with Node.js, Express, and MongoDB.

## 🚀 Project Status

**Current Progress:** Step 1 Complete ✅

### Completed Features
- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ User Model with Profile Management

---

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)

---

## ✨ Features

### Authentication
- User registration with unique username and email
- User login with JWT token generation
- Password hashing for security
- Cookie-based session management

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Password Security:** Crypto (SHA-256)
- **Environment Management:** dotenv

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd twitter-clone-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory (see [Environment Variables](#environment-variables))

4. **Start the server**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3000`

---


## 📡 API Endpoints

### Authentication Routes

#### Register User
```http
POST /api/auth/register
```


---

## 📁 Project Structure

```
twitter-clone-api/
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   └── auth.controller.js    # Authentication logic
├── models/
│   └── user.model.js         # User schema
├── routes/
│   └── auth.route.js         # Auth routes
├── .env                      # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Dependencies
└── server.js                # Entry point
```

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] User Authentication System
- [x] User Registration
- [x] User Login
- [x] JWT Token Generation

### Phase 2: Tweet System (Upcoming)
- [ ] Create Tweet
- [ ] Get All Tweets
- [ ] Get Single Tweet
- [ ] Delete Tweet
- [ ] Get User's Tweets

### Phase 3: Social Features (Upcoming)
- [ ] Like/Unlike Tweets
- [ ] Follow/Unfollow Users
- [ ] Get Followers/Following List

### Phase 4: Advanced Features (Upcoming)
- [ ] Reply to Tweets
- [ ] User Feed (Personalized)
- [ ] User Profile with Tweets

### Phase 5: Extra Features (Future)
- [ ] Retweets
- [ ] Hashtags
- [ ] Search Tweets
- [ ] Tweet with Images


`
## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with ❤️  By Yugant Singh while learning backend development
 


**Happy Coding! 🚀**