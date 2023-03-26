//import express from 'express';
//import cors from 'cors';
//import connectDB from './config/db.js';
//import articleRoutes from './routes/articleRoutes.js'
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import articleRoutes from './routes/articleRoutes.js';

const app = express();

// Connect to MongoDB database
connectDB();

// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// API routes
app.use('/api/articles', articleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
