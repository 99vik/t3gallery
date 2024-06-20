export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <p>this is photo page</p>
      <p>id: {photoId}</p>
    </div>
  );
}
