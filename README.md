# ♻️ ScrapSaathi – Smart Waste & E-Waste Collection Platform

**ScrapSaathi** is a modern, full-stack web platform designed to streamline the process of waste and e-waste collection. It connects users, waste collectors, and administrators in an eco-conscious ecosystem that promotes recycling, donation, and sustainability. 🌱

🔗 **Live Demo**: [scrap-sathi.vercel.app](https://scrap-sathi.vercel.app)

---

## 🚀 Features

### 👤 User Panel
- Register/login with OTP-based email verification
- Password visibility toggle for ease of access
- Book pickups for:
  - E-waste
  - Metal waste
  - Plastic waste
  - Others
- Upload images & estimate quantity (by weight)
- Track the status of your waste pickup requests
- Donate to:
  - Tree plantation drives
  - Registered NGOs
- Real-time assistant chatbot for platform queries

### 🤖 AI Chatbot (RAG Assistant)
- Integrated chatbot widget using React
- Powered by:
  - **FastAPI backend**
  - **Retrieval-Augmented Generation (RAG)** pipeline
  - **FAISS vector database**
- Supports follow-up context with previous queries
- Fetches document-based answers using embeddings and cosine similarity

### 🚛 Collector Dashboard
- View and accept pickup requests
- Track active collection jobs
- Access historical collection logs

### 🛠️ Admin Panel
- Secure JWT-protected login
- View all users, waste requests, and donation records
- Full platform-wide monitoring & control
- Admin analytics (basic activity summaries)

---

## 🌐 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Icons (HeroIcons, etc.)
- SweetAlert2
- React-Markdown (for rich chatbot messages)

### Backend
- Node.js + Express.js (Main App Backend)
- MongoDB + Mongoose (Database)
- JWT Authentication + OTP Email Verification

### Chatbot Backend (RAG)
- **FastAPI** (Python 3.10+)
- **FAISS** for vector similarity search
- **SentenceTransformers / HuggingFace Transformers** for embedding generation
- **RAG-style pipeline**: Retrieve docs → Generate answer using prompt
- Serves responses via a REST API consumed by React frontend

---

## 📦 Other Integrations
- GitHub Actions / CI-ready
- Responsive UI (mobile and tablet optimized)
- `.env`-based environment config (secure & scalable)

---

