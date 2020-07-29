const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/checklist/five_tips', function(req, res) {
    res.sendFile(path.join(__dirname + '/checklist/five_tips', { extensions: ['html'] }));
});

app.use('/', router);
app.use(express.static(__dirname + '/', {
    extensions: ['html']
}));

app.listen(process.env.port || 3000);

console.log('Running at Port 3000.');