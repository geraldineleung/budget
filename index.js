const express = require('express');
const app = express();
//mysql port is 3456
app.use('/', express.static('www'));

app.listen(3000, () => console.log('app listening on port 3000!'));
