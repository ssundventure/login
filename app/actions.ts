"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .includes("@zod.com", { message: "Only @zod.com emails are allowed" }),
  username: z.string().min(5, "Username should be at least 5 characters long."),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters long")
    .regex(/\d/, "Password must contain at least one number"),
});

export async function handleForm(_: unknown, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
