import { object, string, TypeOf } from "zod";

export const createMessageSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    body: string({
      required_error: "Message is required",
    }),
  }),
});

export type CreateMessageInput = TypeOf<typeof createMessageSchema>;

