const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
  res.json({
    "name": "Чыналиев Мухтар Турдубекович",
    "email": "mcht86@mail.ru",
    "number1": " +996(708)-32-08-20",
    "number2": "",
    "img": "director.jpg"
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
