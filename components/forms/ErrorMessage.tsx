export function ErrorMessage({ message }: { message?: React.ReactNode }) {
  return message ? (
    <p className="inline-block font-bold text-sm text-strawberry-red">
      {message}
    </p>
  ) : null
}
