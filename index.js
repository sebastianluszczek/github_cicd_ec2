const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api', (req, res, next) => {
  res.json({
    success: true,
    message: 'API working',
  });
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
