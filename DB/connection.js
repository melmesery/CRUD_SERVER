import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log(`DB Conncted`);
    })
    .catch(() => {
      console.log(`Fail To Connect DB`);
    });
};

export default connectDB;
