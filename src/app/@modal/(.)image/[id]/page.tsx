import ImageView from "~/components/image-view";
import Modal from "./modal";

export default async function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <ImageView imageId={imageId} />
    </Modal>
  );
}
