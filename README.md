# 🧠 Think Board Website | MERN Stack Notes App (VUHO NOTES)

A modern **Think Board / Note Taking Web Application** built with **MERN Stack (MongoDB, Express.js, React, Node.js)**.  
This project allows users to create, manage, edit, and delete notes with a clean, responsive, and user-friendly interface.

> 🚀 Perfect for **portfolio**, **internship**, and **full-stack MERN projects**.

---

## 🔍 Keywords (SEO)
Think Board Website, Notes App MERN, React Notes App, MongoDB Express React Node, Full Stack JavaScript Project, Portfolio MERN App, Note Management System, REST API Notes App

---

## 📖 Project Overview

**VUHO NOTES (Think Board Website)** is a full-stack web application designed to help users quickly capture ideas, tasks, and thoughts in one place.

The system focuses on **performance, security, and UX**, using modern frontend tools and a scalable backend architecture.

**Author:** Hồ Duy Vũ  
📧 **Email:** duyvu11092004@gmail.com

---

## ✨ Features

- 📝 **Create Notes** – Add titles and rich text content
- ✏️ **Edit Notes** – Update notes in real time
- 🗑️ **Delete Notes** – Remove unused notes
- 🔄 **Live UI Update** – Smooth user experience
- 🚦 **API Rate Limiting** – Secure backend with Upstash Redis
- 🎨 **Modern UI** – TailwindCSS + DaisyUI (Forest theme)
- 📱 **Responsive Design** – Mobile & desktop friendly
- 🔐 **RESTful API Architecture**

---

## 🛠️ Tech Stack

### Frontend (React)
- React 19
- Vite
- TypeScript (optional ready)
- Tailwind CSS
- DaisyUI
- React Router
- Axios
- Framer Motion (UI animation)
- Lucide React (Icons)

### Backend (Node.js & Express)
- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis (Rate Limiting)
- REST API
- dotenv
- CORS

---

## 📦 Installation & Setup

### 🔧 System Requirements
- Node.js >= 14
- MongoDB (Local or Atlas)
- npm / yarn

---

### 1️⃣ Clone Repository

git clone https://github.com/Ho-Duy-Vu/Think-Board-Website.git
cd Think-Board-Website
2️⃣ Install Dependencies
Install all at once (recommended)

bash
npm run build
Or install manually

# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install
3️⃣ Environment Configuration
Create .env file in Backend directory:

MONGODB_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
4️⃣ Run Application
Development Mode

# Backend
cd Backend
npm run dev

# Frontend
cd Frontend
npm run dev
👉 Open: http://localhost:5173

Production Mode

# Build frontend
cd Frontend
npm run build

# Start server
npm start
📁 Project Structure
Think-Board-Website/
│── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
│
│── Frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
│── README.md
🚀 Future Improvements
🔐 User Authentication (JWT / OAuth)

👥 Collaborative Boards

📌 Drag & Drop Notes

🌙 Dark Mode

☁️ Cloud Storage

📱 PWA Support

🧠 AI-powered note suggestions

👤 Author & Contact
Hồ Duy Vũ
📧 Email: duyvu11092004@gmail.com
🐙 GitHub: https://github.com/VUHODEV
