import mongoose from "mongoose";
import { string } from "zod";

export interface TransactionDocument extends mongoose.Document {
  email: string;
  name: string;
  transactionId: string;
  createdAt: Date;
  updatedAt: Date;
}
const transactionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
