import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getUserImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (image, { eq }) => eq(image.userId, user.userId),
    orderBy: (image, { desc }) => [desc(image.createdAt)],
  });

  return images;
}
