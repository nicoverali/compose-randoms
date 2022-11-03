const Express = require("express");
const app = Express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  valor = Math.random() * (99999 - 10000) + 10000;
  res.send("" + Math.round(valor));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
