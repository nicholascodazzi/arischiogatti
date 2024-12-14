export default function NavTag({ tagName }) {
  return (
    <div>
      <span className="cursor-pointer text-violet-500 hover:text-violet-700 lg:text-sm xl:text-base">
        {tagName}
      </span>
    </div>
  );
}
