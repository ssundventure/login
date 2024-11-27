"use server";

interface FormState {
  isSuccess: boolean;
  error?: string;
}

export async function handleForm(
  _: unknown,
  formData: FormData
): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (password === null || email === null || username === null) {
    return { isSuccess: false, error: "Please fill out all fields." };
  }

  if (password === "12345") {
    return { isSuccess: true };
  }

  return {
    isSuccess: false,
    error: "Wrong password.",
  };
}
