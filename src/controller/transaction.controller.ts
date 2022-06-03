import {
  CreateTransactionInput,
  verifyInput,
} from "./../schema/transaction.schema";
import { Request, Response } from "express";
import logger from "../utils/logger";
import { createTransaction, verify } from "../service/transaction.service";


export async function createTransactionHandler(
  req: Request<{}, {}, CreateTransactionInput["body"]>,
  res: Response
) {
  try {
    const transaction = await createTransaction(req.body);
    return res.send(transaction);
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}


export async function verifyHandler(
  req: Request<{}, {}, verifyInput["body"]>,
  res: Response
) {
  try {
    const details = await verify(req.body);
    if (!(details.length > 0)) {
      return res.status(404).send({"response":"No transaction found"});
    }
    return res.send(details);
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}
