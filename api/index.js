const express = require('express');
const rateLimit = require('express-rate-limit');
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


app.use(limiter);
app.use(cors());
app.use(express.json());

app.get('/api', (req, res,) => {
    res.status(200).send({
        title: 'Welcome to Philosapi',
        description: 'Philosapi contains informations about philosophers, their works, stream of thoughts and citations.'
    })
});

app.use('/api/philosophers', philosopherRoutes);
app.use('/api/works', worksRoutes);
app.use('/api/citations', citationsRoutes);
app.use('/api/stream_of_thought', streamOfThoughtRoutes);
app.use('/api/periods', periodsRoutes);
app.use('/api/images', express.static('./images'));

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is successfully running, and the app is listening on port ${PORT}`);
    } else {
        console.error("Error occurred, the server can't start", error);
    }
});
