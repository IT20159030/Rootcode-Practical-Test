import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = "mongodb+srv://rootcodeAdmin:rootcodeAdmin@cluster0.fg1nqjo.mongodb.net/rootcode"
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB database connection established successfully: ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;