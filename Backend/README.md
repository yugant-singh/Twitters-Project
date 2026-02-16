# 🚀 Current Progress: Step 3 Complete

### Completed Features
- ✅ User Authentication (Register/Login)
- ✅ Tweet CRUD Operations
- ✅ Like/Unlike System
- ✅ Image Upload (ImageKit)
- ✅ JWT Authentication



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

