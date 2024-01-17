const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);
mongoose.connection
.on('open', () => console.log('db connection successfull!...'))
.on('err', (err) => console.log(`db connection ${err}!..`));