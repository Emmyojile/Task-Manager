import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});


mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// const Task = mongoose.model('Task', taskSchema)
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
