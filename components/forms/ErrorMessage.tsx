export function ErrorMessage({ message }: { message?: React.ReactNode }) {
  return message ? (
    <span className="font-bold text-sm text-strawberry-red">{message}</span>
  ) : null
}
