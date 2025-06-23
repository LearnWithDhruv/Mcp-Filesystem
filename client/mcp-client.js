class MCPClient {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  async uploadFolder(files) {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    
    const response = await fetch(`${this.baseUrl}/upload-folder`, {
      method: 'POST',
      body: formData
    });
    return response.json();
  }

  async editFile(filename, content) {
    const response = await fetch(`${this.baseUrl}/edit-file`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, content })
    });
    return response.json();
  }

  async deleteFile(filename) {
    const response = await fetch(`${this.baseUrl}/delete-file/${filename}`, {
      method: 'DELETE'
    });
    return response.json();
  }
}