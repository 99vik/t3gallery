import { getImage } from "~/server/queries";
import Modal from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(Number(photoId));

  return (
    <Modal>
      <img src={image.url} alt={image.name} height={400} width={600} />
    </Modal>
  );
}
