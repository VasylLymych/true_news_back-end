const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.get('/', (req, res) => res.json('asfsafasfafsfsafsasf'))

app.listen(3000, err => {
    err ? console.log(err.message) : console.log('Listening 3000...')
})