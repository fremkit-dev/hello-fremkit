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
