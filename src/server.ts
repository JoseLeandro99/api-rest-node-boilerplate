import Express from 'express';

const app = Express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(3333);