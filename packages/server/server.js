const app = require('./src/app');

app.listen(process.env.PORT, () => {
  console.log('Server started at port 3000.');
});
