const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("<h1>Hello Dudes V4</h1>");
});


app.listen(port, () => console.log(`Listening on port ${port}`));