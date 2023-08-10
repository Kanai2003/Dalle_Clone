import mongoose from 'mongoose';


const  connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(MONGO_URI)
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => console.log(err));
}


export default connectDB;