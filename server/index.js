const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configure upload directory
const UPLOAD_FOLDER = './uploads';
if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER);
}

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_FOLDER),
  filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage });

// API Endpoints
app.post('/upload-folder', upload.array('files'), (req, res) => {
  res.json({ message: 'Folder uploaded successfully!' });
});

app.post('/edit-file', (req, res) => {
  const { filename, content } = req.body;
  const filePath = path.join(UPLOAD_FOLDER, filename);
  
  fs.writeFile(filePath, content, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'File updated successfully!' });
  });
});

app.delete('/delete-file/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_FOLDER, req.params.filename);
  
  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'File deleted successfully!' });
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 MCP Server running on http://localhost:${PORT}`));