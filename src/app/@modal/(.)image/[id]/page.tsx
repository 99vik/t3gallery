export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <p>this is photo modal</p>
      <p>id: {photoId}</p>
    </div>
  );
}
