# Twitter Clone API

A RESTful API for a Twitter-like social media platform built with Node.js, Express, and MongoDB.

## 🚀 Current Progress: Step 3 Complete

### Completed Features
- ✅ User Authentication (Register/Login)
- ✅ Tweet CRUD Operations
- ✅ Like/Unlike System
- ✅ Image Upload (ImageKit)
- ✅ JWT Authentication

---

---

## 📡 API Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "bio": "Software Developer"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password123"
}
```

---

### Tweets

#### Create Tweet (Protected)
```http
POST /api/tweets
Content-Type: multipart/form-data
Cookie: token=<jwt_token>

Fields:
- image: [file]
- content: "Your tweet text"
```

#### Get All Tweets
```http
GET /api/tweets
```

#### Get Tweet By ID
```http
GET /api/tweets/:tweetId
```

#### Get User's Tweets
```http
GET /api/tweets/user/:userId
```

#### Delete Tweet (Protected)
```http
DELETE /api/tweets/:tweetId
Cookie: token=<jwt_token>
```

---

### Like/Unlike

#### Like Tweet (Protected)
```http
POST /api/tweets/:tweetId/like
Cookie: token=<jwt_token>
```

#### Unlike Tweet (Protected)
```http
DELETE /api/tweets/:tweetId/unlike
Cookie: token=<jwt_token>
```

---

## 📁 Project Structure

```
twitter-clone-api/
├── config/
│   └── db.js
├── controllers/
│   ├── auth.controller.js
│   └── tweet.controller.js
├── models/
│   ├── user.model.js
│   └── tweet.model.js
├── routes/
│   ├── auth.route.js
│   └── tweet.route.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## 🗺️ Roadmap

### ✅ Completed
- [x] User Authentication (Register/Login)
- [x] Create Tweet with Image
- [x] Get All Tweets
- [x] Get Single Tweet
- [x] Get User Tweets
- [x] Delete Tweet
- [x] Like Tweet
- [x] Unlike Tweet

### 🔜 Upcoming
- [ ] Follow/Unfollow Users
- [ ] Get Followers/Following Lists
- [ ] Personalized User Feed
- [ ] Reply to Tweets
- [ ] Retweets
- [ ] Hashtags
- [ ] Search Tweets

---

## 🧪 Testing with Postman

### 1. Register/Login
```
POST http://localhost:5000/api/auth/register
→ Cookie with token is set
```

### 2. Create Tweet
```
POST http://localhost:5000/api/tweets
→ Select form-data
→ Add 'image' field (file)
→ Add 'content' field (text)
→ Token auto-sent via cookie
```

### 3. Like Tweet
```
POST http://localhost:5000/api/tweets/<tweet_id>/like
→ Token auto-sent via cookie
```

### 4. Get Tweets
```
GET http://localhost:5000/api/tweets
→ No authentication required
```

---

### Authentication
- JWT token stored in cookies
- Token verification for protected routes
- Password hashing with crypto

### Tweet System
- Image upload via ImageKit
- Multer for file handling
- User can only delete own tweets
- Pagination (limit 50 tweets)

### Like System
- Prevent duplicate likes
- Like count tracking
- Array-based storage

---

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

---

## 📄 License

MIT License

---

**Built with ❤️ while learning backend development**

**Current Version:** v0.3 (Like/Unlike Complete)