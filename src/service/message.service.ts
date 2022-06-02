import { DocumentDefinition } from "mongoose";
import Message, { MessageDocument } from "../models/message.model";
import logger from "../utils/logger";
export async function createMessage(
  input: DocumentDefinition<Omit<MessageDocument, "createdAt" | "updatedAt">>
) {
  try {
    const message = await Message.create(input);
    return message;
  } catch (err: any) {
    throw new Error(err);
  }
}
export async function getall() {
  try {
    const messages = await Message.find().sort({ updatedAt: -1 });
    return messages;
  } catch (err: any) {
    throw new Error(err);
  }
}
