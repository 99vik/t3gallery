import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function ImageView({ imageId }: { imageId: string }) {
  const image = await getImage(Number(imageId));

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <>
      <div className="relative col-span-3">
        <Image
          src={image.url}
          alt={image.name}
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="space-y-4 rounded-lg border border-white/10 bg-background/70 p-2">
        <p className="border-b pb-2 text-center font-semibold">{image.name}</p>
        <p>Uploaded by: {userInfo.fullName}</p>
        <p>Created on: {image.createdAt.toLocaleDateString()}</p>
      </div>
    </>
  );
}
