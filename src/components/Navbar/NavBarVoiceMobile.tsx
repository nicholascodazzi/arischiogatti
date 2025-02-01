import Link from "next/link";

export default function NavBarVoiceMobile({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="flex w-full items-center py-2 text-lg font-semibold"
      prefetch={false}
    >
      {title}
    </Link>
  );
}
