const express = require('express');
const rateLimit = require('express-rate-limit');
const db = require('./db');
const cors = require('cors');
const philosopherRoutes = require('./routes/philosophers');
const worksRoutes = require('./routes/works');
const citationsRoutes = require('./routes/citations');
const streamOfThoughtRoutes = require('./routes/stream_of_thought');
const periodsRoutes = require('./routes/periods');

const app = express();
const PORT = 3000;

const limiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests
    message: 'Too many requests from this IP, please try again later.',
});
const path = require('path')
app.use('/api/images', express.static(path.join(__dirname, 'images')))


app.use(limiter);
app.use(cors());
app.use(express.json());

app.get('/api', (req, res,) => {
    res.status(200).send({
        title: 'Welcome to Philosapi',
        description: 'Philosapi contains informations about philosophers, their works, stream of thoughts and citations.'
    })
});

app.get('/update', (req, res) => {

    for(let i = 0; i < 100; i++){
        db.query(
            `UPDATE philosopher SET img_url = 'https://philosapi.vercel.app/api/images/' || REPLACE(LOWER(name), ' ', '_' ) || '.jpg'
             WHERE philosopher.id = ${i};`)
    }

})

app.use('/api/philosophers', philosopherRoutes);
app.use('/api/works', worksRoutes);
app.use('/api/citations', citationsRoutes);
app.use('/api/stream_of_thought', streamOfThoughtRoutes);
app.use('/api/periods', periodsRoutes);
app.use((req, res, next) => {
    res.status(404).send({
        title: "404 not found",
        message: "Sorry can't find that!",
        code: 404
    })
})
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is successfully running, and the app is listening on port ${PORT}`);
    } else {
        console.error("Error occurred, the server can't start", error);
    }
});
