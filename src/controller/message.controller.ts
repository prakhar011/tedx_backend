import { CreateMessageInput } from "./../schema/message.schema";
import { Request, Response } from "express";
import logger from "../utils/logger";
import { createMessage, getall } from "../service/message.service";

export async function createMessageHandler(
  req: Request<{}, {}, CreateMessageInput["body"]>,
  res: Response
) {
  try {
    const message = await createMessage(req.body);
    return res.send(message);
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}

export async function getAllHandler(
  req: Request<{}, {}, {}>,
  res: Response
) {
  try {
    const details = await getall();
    return res.send(details);
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}
