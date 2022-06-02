import { DocumentDefinition } from "mongoose";
import Transaction, { TransactionDocument } from "../models/transaction.model";
import logger from "../utils/logger";
export async function createTransaction(
  input: DocumentDefinition<
    Omit<TransactionDocument, "createdAt" | "updatedAt">
  >
) {
  try {
    const transaction = await Transaction.create(input);
    return transaction;
  } catch (err: any) {
    throw new Error(err);
  }
}
export async function verify(
  val: DocumentDefinition<
    Omit<TransactionDocument, "createdAt" | "updatedAt"|"name"|"transactionId">
  >
) {
  try {
    const transaction = await Transaction.find(val);
    return transaction;
  } catch (err: any) {
    throw new Error(err);
  }
}
