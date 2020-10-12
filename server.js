const app = require('./src/app');
const PORT = 3000;


app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`O Nosso app esta rodando na porta http://localhost: ${PORT}`);
});