


# 📝 Blog Management System (MySQL + Express + Multer)

A simple blog platform built with **Express**, **MySQL**, **Multer**, and **Node.js**. It supports image uploads, blog creation, and blog retrieval through a RESTful API.

---

## 🚀 Features

- Create blog posts with title, description, body, keywords, and image.
- Upload blog cover images with `multer`.
- Store and retrieve blog data from a MySQL database.
- API endpoints for listing and creating blogs.
- Organized code with separate routes, controllers, middleware, and DB config.
- Uses environment variables for easy configuration.

---

## 📂 Project Structure

```

├── controller/
│   └── index.js         # Blog creation and fetching logic
├── database/
│   └── config/
│       └── db.js        # MySQL connection and DB creation
├── middleware/
│   └── upload.js        # Multer storage configuration
├── routes/
│   └── index.js         # API routes for blog operations
├── scripts/
│   └── migrate.js       # (Optional) Migration logic
├── uploads/             # Uploaded images are stored here
├── .env                 # Environment variables
├── index.js             # Entry point
├── package.json

````

---

## 🔧 Installation

```bash
git clone https://github.com/mohosin2126/blog-api.git
cd blog-mysql
npm install
````

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory with the following content:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=blogdb
```

---

## 🗄️ MySQL Table Schema

```sql
CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    meta_description VARCHAR(255),
    body TEXT,
    keywords TEXT,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📦 Scripts

```bash
# Run the development server
npm start

# (Optional) Run database migration if using a migration script
npm run migrate
```

---

## 📡 API Endpoints

### `POST /api/blogs`

Create a new blog post.

**FormData Body:**

* `title` (string) – required
* `meta_description` (string)
* `body` (string)
* `keywords` (string)
* `image` (file)

> **Note:** Use `Content-Type: multipart/form-data` for this endpoint.

### `GET /api/blogs`

Get all blogs, sorted by creation time (newest first).

---

## 🖼️ Upload Directory

Uploaded images are stored in the `/uploads` directory and served statically via:

```
http://localhost:5000/uploads/<filename>
```

---

## ✅ Tech Stack

* **Express.js**
* **MySQL 2 (promise-based)**
* **Multer**
* **dotenv**
* **nodemon**


