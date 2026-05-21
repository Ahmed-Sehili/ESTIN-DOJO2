# 🎓 ESTIN DOJO - Collaborative Study Platform

A modern study collaboration platform designed to help students stay focused, motivated, and connected while learning together.

## ✨ Features

- **⏱️ Pomodoro Timer** - Structured study sessions to maintain focus and productivity
- **🏆 Leaderboard** - Track progress and compete with fellow students for motivation
- **💬 Live Chat** - Real-time communication for collaborative learning
- **📚 Resource Help Page** - Access learning materials and study resources

## 🚀 Live Demo

Check out the live application: **[https://estin-dojo-liard.vercel.app/](https://estin-dojo-liard.vercel.app/)**

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Lucide React & React Icons** - Icon libraries

### Backend
- **Node.js with Express** - Server framework
- **MongoDB with Mongoose** - Database
- **JWT** - Authentication
- **bcryptjs** - Password encryption
- **CORS** - Cross-origin requests

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB connection string

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Rania1411/ESTIN-DOJO.git
cd ESTIN-DOJO
```

### 2. Frontend Setup
```bash
# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000" > .env

# Run development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

# Run development server
npm run dev
```

The backend will be available at `http://localhost:5000`

## 📦 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server

## 🏗️ Project Structure

```
ESTIN-DOJO/
├── src/                    # Frontend source code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── backend/              # Backend source code
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── middleware/       # Express middleware
│   └── server.js         # Server entry point
├── package.json          # Frontend dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🔐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://your_connection_string
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Authors

Rania, Amel, Dounia, Ahlem, Ahmed.

---

Made with ❤️ for collaborative learning
