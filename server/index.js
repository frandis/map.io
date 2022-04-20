const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const projectsRouter = require('./routes/projectRoutes');

const MONGO_URI = require('./config');
const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(MONGO_URI);

app.use(express.json());
// app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../build')));

authRoutes(app);

app.use('/api/projects', projectsRouter);
// app.get('/hi', (req, res) => {
//   res.status(200).send(dummyResponse);
// });

// app.get('/signup', (req, res) => {
//   res.status(200).json();
// });
// app.get('/', (req, res) => {
//   res.status(200).send('Hello from the server');
// });

app.get('*', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../build/') });
});
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
