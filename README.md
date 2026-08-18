# 🛒 Online Shopping E-commerce

A modern **React + Vite e-commerce web application** with separate **User and Admin portals**. The application provides user authentication, product browsing, cart management, user registration, forgot-password functionality, and admin user management.

## 🚀 Live Demo

**Frontend:** `https://your-netlify-site.netlify.app`

> Replace the URL above with your actual Netlify deployment URL after deployment.

## 📌 Project Overview

This project is designed to simulate a real-world online shopping platform with role-based functionality.

### 👤 User Portal

Users can:

* Register a new account
* Login securely
* Reset their password
* Browse products
* View product details
* Add products to cart
* Increase or decrease product quantity
* Remove products from cart
* View cart total
* Logout

### 🛠️ Admin Portal

Administrators can:

* Login through the Admin portal
* View all registered users
* Search users by name or email
* View user details
* Calculate user age from date of birth
* Delete users
* Add new users
* Manage products
* Add products

## ✨ Key Features

* React-based component architecture
* React Router for application navigation
* Separate Admin and User portals
* User registration and login
* Forgot password functionality
* Duplicate email validation
* Product browsing and product details
* Shopping cart with quantity management
* Dynamic grand-total calculation
* User search functionality
* Responsive UI
* Toast notifications
* Local storage for cart and logged-in user data
* JSON Server for local development

## 🧰 Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM
* Axios
* React Toastify

### Development / Data

* JSON Server
* Git
* GitHub

### Deployment

* Netlify

## 📁 Project Structure

```text
src/
│
├── Components/
│   ├── Admin/
│   │   ├── AdminPortel.jsx
│   │   ├── AdminNavbar.jsx
│   │   ├── AddUsers.jsx
│   │   ├── AddProduct.jsx
│   │   └── User.jsx
│   │
│   ├── Users/
│   │   ├── UsersPortel.jsx
│   │   ├── UsersLogin.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── CartItems.jsx
│   │
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── ViewMore.jsx
│   └── Navbar.jsx
│
├── assets/
│   ├── image/
│   └── style/
│
├── jsondata/
│   └── appdata.json
│
├── App.jsx
├── App.css
└── main.jsx
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/online-shopping-ecommerce.git
```

### 2. Move into the project directory

```bash
cd online-shopping-ecommerce
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start JSON Server

```bash
npx json-server src/jsondata/appdata.json --port 4000
```

### 5. Start the React application

Open another terminal:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## 🔐 Application Routes

### Public

```text
/                  → Landing / Login
/register          → New User Registration
/forgot-password   → Forgot Password
```

### Admin

```text
/adminportel/
/adminportel/products
/adminportel/add-product
/adminportel/addusers
/adminportel/getAllUsers
```

### User

```text
/userportel/
/userportel/products
/userportel/viewmore/:id
/userportel/cartitems
```

## 🛒 Shopping Cart Flow

```text
Product
   ↓
Add to Cart
   ↓
localStorage
   ↓
Cart Items
   ↓
Increase / Decrease Quantity
   ↓
Calculate Product Total
   ↓
Calculate Grand Total
```

## 🔄 User Registration Flow

```text
New User
   ↓
Create Account
   ↓
Validate Form
   ↓
Check Duplicate Email
   ↓
POST /users
   ↓
Account Created
   ↓
Back to Login
```

## 🔄 Admin User Management Flow

```text
Admin Login
   ↓
Admin Portal
   ↓
User Management
   ↓
GET /users
   ↓
View All Users
   ↓
Search / Delete Users
```

## 🖥️ Screenshots

Add screenshots of your application here after deployment.

Example:

```text
### Login Page
![Login Page](screenshots/login.png)

### User Portal
![User Portal](screenshots/user-portal.png)

### Product Page
![Product Page](screenshots/products.png)

### Shopping Cart
![Shopping Cart](screenshots/cart.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)
```

Create a folder:

```text
screenshots/
```

and place your screenshots inside it.

## 🌱 Future Improvements

* Spring Boot backend
* PostgreSQL database
* Spring Security
* JWT-based authentication
* Password hashing with BCrypt
* Protected Admin routes
* Checkout functionality
* Order management
* User profile
* Wishlist
* Product filtering and sorting
* Payment gateway integration
* Backend deployment
* Production-level error handling

## 🔒 Security Note

This project currently uses **JSON Server and client-side/local-storage mechanisms for learning and demonstration purposes**.

For production use, authentication and sensitive information such as passwords should be handled by a secure backend using technologies such as **Spring Security, BCrypt, JWT, and PostgreSQL**.

## 📚 Learning Objectives

This project demonstrates practical experience with:

* React component-based development
* React Hooks
* State management with `useState`
* Side effects with `useEffect`
* React Router
* REST API communication using Axios
* CRUD operations
* Form handling and validation
* Local storage
* Role-based UI design
* Responsive CSS
* Git and GitHub
* Frontend deployment

## 👨‍💻 Author

**Prashant Yadav**

Java Full Stack Developer | React | Java | Spring Boot | SQL | DSA

GitHub: `https://github.com/YOUR_USERNAME`

LinkedIn: `https://www.linkedin.com/`

## ⭐ Contributing

This project is primarily created for learning and portfolio purposes. Suggestions and improvements are welcome.

## 📄 License

This project is currently intended for educational and portfolio use.
