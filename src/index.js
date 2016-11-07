import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/summ', (req, res) => {
  let a = +req.query.a || 0;
  let b = +req.query.b || 0;
  let summ = 0;
  summ = a+b;
  res.send(summ.toString());
});

app.listen(666, function () {
  console.log('Example app listening on port 666!');
});
