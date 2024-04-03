import express from 'express';
import cors from 'cors';

const PORT = 4825;
const app = express();

const corsOptions = {
    origin: 'http://localhost:4820',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/api/students', (req, res) => {
    return res.send(JSON.stringify({
            "studentss": [
              {
                "name": "John",
                "age": 20,
                "marks": [6, 8, 4, 7, 8]
              },
              {
                "name": "Emily",
                "age": 21,
                "marks": [7, 5, 8, 8, 8]
              },
              {
                "name": "Michael",
                "age": 19,
                "marks": [2, 5, 9, 8, 4]
              },
              {
                "name": "Sophia",
                "age": 20,
                "marks": [7, 1, 5, 9, 9]
              }
            ]
    }));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});