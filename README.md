# 🍬 Sweet Shop Management System (TDD Kata)

## Objective
The **Sweet Shop Management System** is a full-stack MERN application built as part of a **Test-Driven Development (TDD) Kata**.  
The goal of this project is to design, build, and test a production-ready system that demonstrates backend API development, database management, frontend implementation, testing practices, and responsible AI usage.

This project follows modern software engineering workflows, including **JWT authentication, role-based access control, RESTful API design, and CI-ready structure**.

---

## 🚀 Live Application (Bonus)
- **Frontend (Vercel):**  
  https://sweet-shop-management-system-bice.vercel.app/

- **Backend (Render):**  
  REST API deployed on Render
  https://sweet-shop-backend-ozl3.onrender.com

---

## 🧩 Core Requirements – Implementation Status

### 1️⃣ Backend API (RESTful)

**Technology Used**
- Node.js + TypeScript
- Express.js
- MongoDB (MongoDB Atlas)
- JWT Authentication

**Authentication**
- User registration & login
- Token-based authentication using JWT
- Role-based authorization (`user`, `admin`)

**Implemented API Endpoints**

#### Auth
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

#### Sweets (Protected)
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/sweets` | Add a new sweet (Admin only) |
| GET | `/api/sweets` | Get all available sweets |
| GET | `/api/sweets/search` | Search sweets by name or category |
| PUT | `/api/sweets/:id` | Update sweet price/quantity |
| DELETE | `/api/sweets/:id` | Delete a sweet (Admin only) |

#### Inventory (Protected)
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/sweets/:id/purchase` | Purchase a sweet (quantity decreases) |

📌 Each sweet contains:
- Unique ID
- Name
- Category
- Price
- Quantity in stock
- Image URL

---

### 2️⃣ Frontend Application (SPA)

**Technology Used**
- React
- TypeScript
- Axios
- Bootstrap
- React Router

**Features**
- User registration and login
- Dashboard displaying all sweets
- Live search and filtering
- Purchase button (disabled if quantity = 0)
- Admin dashboard:
  - Add sweets (with image upload)
  - Update price & stock
  - Delete sweets
- Responsive and clean UI

---

## 🧪 Test-Driven Development (TDD)

This project follows **TDD principles**, especially for backend logic:

- Tests written before implementation
- Red → Green → Refactor workflow
- Focus on business logic validation
- Clear separation of concerns (controllers, services, models)

### 🧪 Test Coverage Includes
- Authentication logic
- Sweet CRUD operations
- Purchase logic (inventory decrement)
- Authorization checks (admin vs user)

📄 **Test Report**
- Test suite executed locally
- All critical flows verified
- Report available via console output

---

## 🧹 Clean Code & Best Practices

- Modular folder structure
- SOLID principles
- Meaningful variable & function names
- Centralized error handling
- Reusable services
- Environment-based configuration

---

## 🔄 Git & Version Control

- Git used throughout development
- Small, meaningful commits
- Commit messages narrate development steps
- Feature-based commits

---

## 🤖 My AI Usage (Mandatory Section)

### AI Tools Used
- **ChatGPT (OpenAI)**

### How I Used AI
- Brainstorming API endpoint structure
- Generating boilerplate for controllers and services
- Writing and refining test cases
- Debugging deployment issues
- Improving README documentation and clarity




### Reflection
AI significantly improved my productivity by accelerating boilerplate generation and debugging.  
However, all business logic, architectural decisions, and final implementations were reviewed, modified, and owned by me.  
AI was used as an **assistant**, not a replacement for understanding or decision-making.


---

## ⚙️ Environment Variables

### Backend (`.env`)

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
BASE_URL=backend_base_url



---














## ▶️ Running the Project Locally

### 1️⃣ Clone the Repository
````

git clone https://github.com/pramodprajapatcse/Sweet-Shop-Management-System.git
cd Sweet-Shop-Management-System
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 📸 Screenshots

Screenshots of the following features are included:

* Login / Register Page
* Dashboard (All Sweets Listing)
* Admin Panel (Add / Update / Delete Sweets)
* Sweet Purchase Flow

*(Add screenshots here)*

---

## 🎯 Learning Outcomes

* End-to-end MERN stack development
* RESTful API design and implementation
* JWT authentication and role-based access control (RBAC)
* Test-Driven Development (TDD) workflow
* Production deployment using Vercel and Render
* Responsible AI-assisted software development

---

## 👨‍💻 Author

**Pramod Prajapat**
📧 Email: [prajapatpramod474@gmail.com](mailto:prajapatpramod474@gmail.com)
🔗 GitHub: [https://github.com/pramodprajapatcse](https://github.com/pramodprajapatcse)

---

## 📄 License

This project is licensed under the **MIT License**.


