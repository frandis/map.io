const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const dummyResponse = {
  foo: 'bar',
  bar: 'foo',
};

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../build')));
app.get('*', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../build/') });
});

app.get('/api', (req, res) => {
  res.status(200).send(dummyResponse);
});

// app.get('/signup', (req, res) => {
//   res.status(200).json();
// });
// app.get('/', (req, res) => {
//   res.status(200).send('Hello from the server');
// });

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
