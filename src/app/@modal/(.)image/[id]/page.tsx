import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(Number(photoId));

  return (
    <div className="absolute top-0 h-full w-full bg-red-500/50">
      <p>this is photo modal</p>
      <Image src={image.url} alt={image.name} height={400} width={600} />
    </div>
  );
}
