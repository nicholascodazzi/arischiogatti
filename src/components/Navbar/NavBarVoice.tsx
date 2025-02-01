import Link from "next/link";
export default function NavBarVoice({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-bold text-violet-500 transition-colors hover:text-violet-700 focus:text-violet-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 lg:text-base"
      prefetch={false}
    >
      {title}
    </Link>
  );
}
