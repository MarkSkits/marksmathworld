const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    var initialHTML = fs.readFileSync('./index.html', {encoding: 'utf-8'});
    var html = initialHTML;
    res.send(html);
})

app.listen(3000);