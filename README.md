# 🌍 Fluento — Connect, Chat, and Learn Languages Together

[Live Demo Here!](https://fluento-c7al.onrender.com)

Fluento is a full-stack social app designed to help language learners connect with native speakers around the world. Users can share their native and target languages, send friend requests, chat in real time, and even start video calls — all in one seamless experience.

---

## 🚀 Features

- 🌐 **Language Matching** — Users specify their native and learning languages to find relevant partners
- 🤝 **Friend Requests** — Connect with other learners and native speakers
- 💬 **Real-time Chat** — Powered by Stream Chat
- 📹 **Video Calling** — Share call links and jump into live conversations
- 🔒 **Authentication** — Secure login and user sessions
- 🎨 **Responsive UI** — Built with Tailwind CSS and DaisyUI

---

## 🛠️ Tech Stack

| Layer       | Tech Used                     |
|-------------|-------------------------------|
| Frontend    | React, Vite, Tailwind CSS, DaisyUI |
| Backend     | Express.js, Node.js           |
| Realtime Chat | Stream Chat SDK             |
| State/Data  | React Query, Axios            |
| Auth        | JWT-based authentication      |
| Deployment  | Render                        |

---
## 🧪 .env Setup

### Backend (`/backend`)

```
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`/frontend`)

```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

---

## 🧪 Local Development

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
