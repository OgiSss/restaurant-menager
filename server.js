const express = require('express')
const connectDB = require('./config/db');
const userRouter = require('./routers/user');
const restaurantRouter = require('./routers/restaurant');
const router = new express.Router()

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use(router.get('/', (req, res) => res.send('Server is working')))
app.use('/api/auth', userRouter)
app.use('/api/restaurant', restaurantRouter)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})
