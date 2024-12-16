import { type User, type postUser } from "../types/api";

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

export const editUser = async (user: User) => {
  const response = await fetch(`https://sga-api-render.onrender.com/api/users/${user.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`Failed to update user: ${response.statusText}`);
  }

  const useredit: User = await response.json();
  return useredit;
}

export  const registerUser = async (user: postUser) => {
  console.log("TESSSS");
  console.log(user);
  const response = await fetch(`${import.meta.env.SERVER_URL}/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`Failed to register user: ${response.statusText}`);
  }

  const useredit: User = await response.json();
  return useredit;
}