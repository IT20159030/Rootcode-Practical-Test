import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/dbConnection.js';
import router from './routes/expenseRoute.js';

connectDB(); // Connect to the database

const app = express();

app.use(cors());
app.use(bodyParser.json());

dotenv.config();

app.use('/api/expenses', router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
