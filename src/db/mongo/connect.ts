import mongoose from "mongoose";

const mongoConnect = () => {
  mongoose.connect(process.env.MONGO_DB_URI!);
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to MongoDB"));
};

export default mongoConnect;
