import ImageView from "~/components/image-view";

export default function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-2 p-3">
      <ImageView imageId={imageId} />
    </div>
  );
}
