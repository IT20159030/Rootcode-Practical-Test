import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI;
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default connectDB;
