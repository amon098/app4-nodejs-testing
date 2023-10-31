const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("public"));
const PORT = process.env.PORT || 4004;


app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname + '/public/index.html'));
	// res.sendFile(path.join( __dirname + '/app/public/index.html'));
    //__dirname : It will resolve to your project folder.
})

app.listen(PORT, () => console.log("App listening at port " + PORT));