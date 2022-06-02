import { object, string, TypeOf } from "zod";

export const createTransactionSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    transactionId: string({
      required_error: "TransactionId is required",
    }),
  }),
});

export type CreateTransactionInput = TypeOf<typeof createTransactionSchema>;

export const verifySchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});

export type verifyInput = TypeOf<typeof verifySchema>;