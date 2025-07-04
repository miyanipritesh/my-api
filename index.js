const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/message', (req, res) => {
  res.json({
    status: "success",
    message: "Hello! This is your API response."
  });
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
