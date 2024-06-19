import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getUserImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImages();

  return (
    <div className="m-4 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-5">
      {images.map((image) => (
        <div key={image.id}>
          <div className="relative aspect-video w-80 overflow-hidden rounded-sm">
            <Image
              src={image.url}
              className="object-cover object-center"
              fill
              sizes="40vw"
              alt={image.name}
            />
          </div>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="mt-8 text-center text-xl font-semibold">
          Please sing in.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
