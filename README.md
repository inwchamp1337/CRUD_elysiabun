# CRUD API with Elysia and Bun

This project is a simple **CRUD (Create, Read, Update, Delete)** API built using **Elysia** (a fast and expressive web framework) and **Bun** (a modern JavaScript runtime). It uses **SQLite** as the database for storing data.

---

## 🚀 **Features**
- **CRUD Operations**: Create, Read, Update, and Delete items.
- **SQLite Database**: Lightweight and easy-to-use database.
- **Elysia Framework**: Fast and expressive web framework for Bun.
- **CORS Support**: Built-in CORS middleware for cross-origin requests.

---

## 📋 **Prerequisites**
- [Bun](https://bun.sh/) installed on your machine.
- Node.js (optional, if you want to use `npm` or `yarn`).

---

## 📦 **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/inwchamp1337/CRUD_elysiabun.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd CRUD_elysiabun
   ```

3. **Install dependencies**:
   ```bash
   bun install
   ```

4. **Start the development server**:
   ```bash
   bun run dev
   ```
   The server will start at:  
   **http://localhost:3000**

---

## 🗂️ **Project Structure**
```
CRUD_elysiabun/
├── src/
│   ├── db.ts          # Database connection and queries
│   ├── routes/
│   │   └── items.ts   # Routes for CRUD operations
│   └── index.ts       # Main entry point
├── .gitignore         # Files to ignore in Git
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

---

## 🌐 **API Endpoints**

### **Items**
- **GET** `/items` - Get all items.  
- **GET** `/items/:id` - Get an item by ID.  
- **POST** `/items` - Create a new item.  
- **PUT** `/items/:id` - Update an item by ID.  
- **DELETE** `/items/:id` - Delete an item by ID.  

---

## 📖 **Example Requests**

### **Create an item**
```bash
curl -X POST http://localhost:3000/items \
-H "Content-Type: application/json" \
-d '{"name": "Item 1", "description": "This is item 1"}'
```

### **Get all items**
```bash
curl http://localhost:3000/items
```

### **Get an item by ID**
```bash
curl http://localhost:3000/items/1
```

### **Update an item**
```bash
curl -X PUT http://localhost:3000/items/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Item 1", "description": "This is updated item 1"}'
```

### **Delete an item**
```bash
curl -X DELETE http://localhost:3000/items/1
```

---

## 📚 **Dependencies**
This project uses the following dependencies:
- **Elysia**: A fast and expressive web framework for Bun.
- **better-sqlite3**: A lightweight and fast SQLite database driver.
- **@elysiajs/cors**: Middleware for enabling CORS in Elysia.

You can find the full list of dependencies in the `package.json` file.

---

## 🛠️ **Scripts**
- **`bun dev`**: Start the development server with hot reload.
- **`bun test`**: Run tests (not implemented yet).

--- 

Happy coding! ✨
