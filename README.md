# 🚀 React Admin Panel Website

A fully dynamic React website controlled through an **Admin Panel** — no need to touch the code to add or update content. Everything is managed via a user-friendly interface.

---

## 🛠️ Tech Stack

- **React.js**  
- **CSS**  
- **JSON Server** (`npm i json-server`)

---

## ✨ Features

- Add, edit, and delete cards or blog posts from the Admin Panel  
- Live updates reflect immediately on the website  
- Fake REST API using JSON Server (acts like a real backend)

---

## 📁 Project Structure

- **Website UI** – Public-facing website built with React  
- **Admin Panel** – A dashboard to manage content  
- **Backend (JSON Server)** – Stores data in `db.json` file

---

## 🚀 Getting Started

Follow the steps below to run the project on your local machine.

---

### ✅ 1. Start the Website UI

This runs the main website built using React and Vite.

```bash
npm run dev
```
### ✅ 2. Start the Backend (JSON Server)
This runs the fake REST API using db.json file as the database.
This code write in admin pannel bash

```bash
npm run start-db

```
### ✅ 3. Start the Admin Panel
This runs the admin panel interface where you can add, edit, or delete content.


```bash
npm start

```