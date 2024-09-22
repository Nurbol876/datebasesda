const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Простой GET-эндпоинт, который возвращает JSON
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello, world!',
    status: 'success',
  };
  res.json(data);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
