# 📂 MCP Filesystem Server
*A Microservice Control Protocol (MCP) server for file operations (Create, Edit, Delete files) with a simple frontend interface.*

---

## 🚀 Features
✅ **Upload Folders** – Drag & drop or select a folder to upload.  
✅ **Edit Files** – Modify file content directly from the UI.  
✅ **Delete Files** – Remove files from the server.  
✅ **Simple REST API** – Built with Node.js & Express.

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v14+)
- npm (Comes with Node.js)
- Modern browser (Chrome, Firefox, Edge)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mcp-filesystem.git
cd mcp-filesystem
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the MCP Server
```bash
node server/index.js
```
*(Server runs on `http://localhost:3000`)*

### 4. Launch the Frontend
Open a new terminal and run:
```bash
cd frontend
python -m http.server 8000
```
*(Open `http://localhost:8000` in your browser.)*

---

## 📂 Folder Structure
```
mcp-filesystem/  
├── server/  
│   └── index.js          # MCP Server (Node.js + Express)  
├── client/  
│   └── mcp-client.js     # Client-side API handler  
├── frontend/  
│   └── index.html        # User Interface  
└── uploads/              # (Auto-created) Stores uploaded files  
```

---

## 🔧 API Endpoints

| Method   | Endpoint              | Description           |
|----------|-----------------------|-----------------------|
| `POST`   | `/upload-folder`      | Upload multiple files |
| `POST`   | `/edit-file`          | Edit file content     |
| `DELETE` | `/delete-file/:filename` | Delete a file         |

---

## 🖥️ Screenshots
*(You can add screenshots here later.)*

---

## 📜 License
This project is licensed under **MIT License**.

---

## 🎯 Next Steps
- Add user authentication  
- Improve error handling  
- Support file previews
