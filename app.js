const express = require('express');
const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.set("views", "public/views/");

app.get('/', (req, res) => {
	res.render("index.ejs");
});

app.listen(port, ()=>{
	console.log(`app running on ${port}`);
});