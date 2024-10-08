import mongoose, { ConnectOptions } from 'mongoose';

const options: ConnectOptions = {
  // Remove useNewUrlParser if it's not valid
};

mongoose.connect(process.env.MONGO_URI as string, options)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;


