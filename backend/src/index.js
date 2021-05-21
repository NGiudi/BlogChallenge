const postRouter = require ('./routes/posts_route');
const bodyParser = require ('body-parser'); 
const express = require ('express');

const app = express();

app.use (bodyParser.json());
app.use (bodyParser.urlencoded ({extended: true}));

const PORT = process.env.PORT || 3050;

app.use ('/', postRouter);

app.listen (PORT, () => {
  console.log ("Server running!");
});