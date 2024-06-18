import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (images, { asc }) => [asc(images.createdAt)],
  });

  return (
    <main className="">
      <div className="m-4 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-5">
        {images.map((image) => (
          <div key={image.id}>
            <div className="aspect-video w-80 overflow-hidden rounded-sm">
              <img
                src={image.url}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
