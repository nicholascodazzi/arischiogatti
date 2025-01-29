type InputProps = {
  type: string;
  id: string;
  name: string;
};

export default function Input({ type, id, name }: InputProps) {
  return type === "textarea" ? (
    <textarea
      name={name}
      id={id}
      rows={5}
      className="rounded-xl px-2"
      placeholder={name}
    ></textarea>
  ) : (
    <input
      type={type}
      name={name}
      id={id}
      className="h-10 rounded-xl px-2"
      placeholder={name}
    />
  );
}
