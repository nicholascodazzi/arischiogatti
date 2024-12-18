import Link from "next/link";
export default function NavTag({ tagName }) {
  return (
    <div>
      <Link href={tagName}>
        <span className="cursor-pointer text-violet-500 hover:text-violet-700 lg:text-sm xl:text-base">
          {tagName}
        </span>
      </Link>
    </div>
  );
}
