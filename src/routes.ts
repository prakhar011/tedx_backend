import { createMessageSchema } from "./schema/message.schema";
import { createTransactionSchema } from "./schema/transaction.schema";
import { Express, Request, Response } from "express";
import {
  createTransactionHandler,
  verifyHandler,
} from "./controller/transaction.controller";
import {
  createMessageHandler,
  getAllHandler,
} from "./controller/message.controller";
import validate from "./middleware/validate";

function routes(app: Express) {
  app.get("/bing", (req: Request, res: Response) => {
    res.status(200).send("Bong!!");
  });
  app.get("/getall-message", getAllHandler);
  app.post("/message", validate(createMessageSchema), createMessageHandler);
  app.post(
    "/createTransaction",
    validate(createTransactionSchema),
    createTransactionHandler
  );
  app.get("/verify", verifyHandler);
}
export default routes;
