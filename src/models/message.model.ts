import mongoose from "mongoose";
import { string } from "zod";

export interface MessageDocument extends mongoose.Document {
  email: string;
  name: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}
const messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
