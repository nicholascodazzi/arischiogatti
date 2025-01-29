import Link from "next/link";

export default function NavTag({
  tagName,
  path,
}: {
  tagName: string;
  path: string;
}) {
  return (
    <div className="text-center">
      <Link href={path} prefetch={false}>
        <span className="cursor-pointer text-violet-500 hover:text-violet-700 lg:text-sm xl:text-base">
          {tagName}
        </span>
        ;
      </Link>
    </div>
  );
}
