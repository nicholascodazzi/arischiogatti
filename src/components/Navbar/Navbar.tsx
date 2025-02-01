import Link from "next/link";
import Image from "next/image";
import NavBarVoice from "./NavBarVoice";
import NavBarMobile from "./NavBarMobile";

export default function NavBar() {
  return (
    <header className="flex h-32 w-full shrink-0 items-center justify-between px-4 md:px-6">
      {/* MOBILE VIEW (TOGGLE NAVIGATION MENU) */}
      <NavBarMobile />

      {/* DESKTOP VIEW */}
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image
          width={300}
          height={200}
          alt="Arischiogatti"
          src="/images/arischiogatti/logo.png"
        />
      </Link>

      <nav className="ml-auto hidden gap-6 lg:flex">
        <div className="flex flex-col gap-4">
          <div className="flex justify-end gap-4">
            <Link
              href="tel:+39 338 385 8920"
              className="text-md rounded-full bg-violet-500 px-4 py-2 text-center text-white hover:bg-violet-700"
              aria-label="Chiamaci al +39 338 385 8920"
            >
              +39 338 385 8920
            </Link>
            <Link
              href="mailto:associazione.arischiogatti@gmail.com"
              className="text-md rounded-full bg-violet-500 px-4 py-2 text-center text-white hover:bg-violet-700"
              aria-label="Inviaci una mail a associazione.arischiogatti@gmail.com"
            >
              associazione.arischiogatti@gmail.com
            </Link>
          </div>

          <section>
            <nav aria-label="Menu">
              <ul className="flex gap-4">
                <NavBarVoice href="/adozioni" title="Adozioni" />
                <NavBarVoice href="/comunicazioni" title="Comunicazioni" />
                <NavBarVoice href="/smarriti" title="Smarriti" />
                <NavBarVoice href="/donazioni" title="Donazioni" />
                <NavBarVoice href="/chi-siamo" title="Chi Siamo" />
                <NavBarVoice href="/contatti" title="Contatti" />
              </ul>
            </nav>
          </section>
        </div>
      </nav>
    </header>
  );
}
