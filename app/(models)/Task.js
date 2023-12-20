import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
  keepAlive: true,
});
mongoose.Promise = global.Promise;

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

// const Task = mongoose.model('Task', taskSchema)
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
