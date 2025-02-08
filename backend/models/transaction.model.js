import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
    enum: ["saving", "expense", "investment"],
  },
  paymentType: {
    type: String,
    enum: ["cash", "card"],
    required: true,
  },
  location: {
    type: String,
    default: "unknown",
  },
});
const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
