import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors(
    {
        origin: ["https://dalle-clone-pi.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        Credential: true
    }
));
app.use(express.json({'limit': '50mb'}));

app.use('/api/posts', postRoutes);
app.use('/api/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E!',
    });
});


const startServer = async () => {

    try {
        connectDB(process.env.MONGO_URI);
        app.listen(8080, () => console.log('Server is running on port https://dalle-clone-pi.vercel.app/'));
    } catch (error) {
        console.log(error); 
    }

}

startServer();
