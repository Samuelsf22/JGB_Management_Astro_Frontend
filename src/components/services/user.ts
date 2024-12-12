import { type User } from "../types/api";

export const getUsers = async () => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/users`);
  const users: User[] = await response.json();
  return users;
};

export const getUserByEmail = async (email: string) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  if (data.message === "Successful login") {
    return data.user as User;
  }
  return data.message;
};
