import { IUserData } from "@/types/types";
import { auth, clerkClient, currentUser, User } from "@clerk/nextjs/server";

const client = await clerkClient();

export async function setPrivateData(data: UserPrivateMetadata /*IUserData*/) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("userId does not exist - you need to sign in");
  }

  await client.users.updateUserMetadata(userId, { privateMetadata: data });
}

export async function getPrivateMetadata(): Promise<IUserData | null> {
  const user = await getUser();
  return user ? (user.privateMetadata as unknown as IUserData) : null;
}

export async function getUser(): Promise<User | null> {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    throw new Error("userId does not exist - you need to sign in");
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();

  // Use `user` to render user details or create UI elements
  return user;
}
