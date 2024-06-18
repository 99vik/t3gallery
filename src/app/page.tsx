import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/2d690c48-0b07-428b-b613-5c67926085cc-70fw4m.jpg",
  "https://utfs.io/f/2d5c6c06-cea4-4b09-bc45-2378d561fba4-8qy3xd.jpg",
  "https://utfs.io/f/687bc5b0-a9d2-4c9b-a0d9-f58279e93785-ugcuwf.jpg",
  "https://utfs.io/f/c1a38aa3-cf13-4fa3-9dfc-df5947b8d7ef-uoy30e.jpg",
  "https://utfs.io/f/118235af-6cf8-4c72-874e-e3a93cc2c529-iujxz.jpg",
];

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="m-4 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockUrls, ...mockUrls, ...mockUrls, ...mockUrls, ...mockUrls].map(
          (image, index) => (
            <div
              key={index}
              className="aspect-video w-80 overflow-hidden rounded-sm"
            >
              <img src={image} className="h-full w-full object-cover" />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
