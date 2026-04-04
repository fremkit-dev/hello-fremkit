const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>Hello from Fremkit</title>
    <style>body{font-family:system-ui;background:#0F1923;color:#E8C872;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
    .card{text-align:center;padding:3rem;border:1px solid #2A1F1A;border-radius:12px;background:#162230}
    h1{font-size:2rem;margin:0 0 1rem}p{color:rgba(232,200,114,0.6);margin:0}</style></head>
    <body><div class="card"><h1>Hello from Fremkit</h1><p>This environment was created automatically from a GitHub repo.</p></div></body>
    </html>
  `);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

// API server on port 8080 — demonstrates multi-port environments
const apiApp = express();
apiApp.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'API', version: '1.0.0', timestamp: new Date().toISOString() });
});
apiApp.get('/health', (req, res) => {
  res.json({ healthy: true });
});
apiApp.listen(8080, () => console.log('API server running on port 8080'));
