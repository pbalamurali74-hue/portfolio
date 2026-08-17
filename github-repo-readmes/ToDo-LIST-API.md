# Secure To-Do List RESTful API (Python FastAPI)

A production-grade, rate-limited RESTful service built with Python **FastAPI**, **SQLAlchemy ORM**, **Pydantic**, and **SQLite**. Deployed live on Vercel.

---

## 🌐 Live API Endpoint

- 🖥️ **Live Vercel Deployment:** [to-do-list-api-tau.vercel.app](https://to-do-list-api-tau.vercel.app)

---

## 🔒 Key Security & Architectural Features

1. **Dual JWT Token Authentication:**
   - **Access Tokens:** Short-lived 15-minute access tokens for API authorization.
   - **Refresh Tokens:** Long-lived 7-day database-backed refresh tokens for secure session rotation and revocation.
2. **Password Security:** Password hashing implemented with `bcrypt`.
3. **Request Payload Validation:** Automatic input validation using Pydantic schemas.
4. **Access Controls:** Strict user isolation ensuring users can only read/update/delete their own task records.
5. **Advanced Search & Pagination:** Support for limit/offset pagination, title/description keyword filtering, and ascending/descending sort.
6. **DDoS Protection & Rate Limiting:** Powered by `slowapi` (configured at 15 attempts/15 mins for auth, 100/15 mins globally).
7. **Database Cascade Rules:** Automated pruning of tasks and session tokens upon user deletion.

---

## 🛠️ Tech Stack

- **Framework:** FastAPI
- **ORM & Database:** SQLAlchemy, SQLite
- **Validation:** Pydantic
- **Security:** PyJWT, Passlib (Bcrypt)
- **Rate Limiting:** slowapi
- **Testing & Deployment:** Pytest, Vercel (`vercel.json`)

---

## 📁 Repository Structure

```
├── app/
│   ├── main.py              # Application entrypoint & CORS configuration
│   ├── core/                # Config, security, JWT helpers, rate limits
│   ├── db/                  # Database sessions & SQLAlchemy models
│   ├── schemas/             # Pydantic request/response schemas
│   └── api/                 # Auth & Task API endpoint routes
├── tests/                   # Pytest automated test suites
├── requirements.txt
└── vercel.json              # Serverless configuration
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/pbalamurali74-hue/ToDo-LIST-API.git
cd ToDo-LIST-API
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## 👤 Author

**Purushotham Balamurali**  
GitHub: [@pbalamurali74-hue](https://github.com/pbalamurali74-hue)
