import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import NavBarVoice from "./NavBarVoice";

export default function NavBar() {
  return (
    <header className="flex h-32 w-full shrink-0 items-center px-4 md:px-6 justify-between">
      {/* MOBILE VIEW (TOGGLE NAVIGATION MENU) */}

      <Sheet>
        {/* Right Side: Mobile Menu Button (Hidden on large screens) */}
        <div className="flex w-full items-center justify-between lg:hidden">
          {/* Left Side: Logo (Visible on large screens) */}
          <Link href="/" className="flex lg:hidden">
            <Image
              width={250}
              height={200}
              alt="Arischiogatti Logo - Link to Homepage"
              src="/images/arischiogatti/logo.png"
            />
          </Link>
        </div>

        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* DESKTOP VIEW */}

      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image
          width={300}
          height={200}
          alt={"Arischiogatti Logo"}
          src={"/images/arischiogatti/logo.png"}
        />
        <span className="sr-only">Arischiogatti Homepage</span>
      </Link>
      <nav className="ml-auto hidden gap-6 lg:flex">
        <div className="flex flex-col gap-4">
          <div className="flex justify-end gap-4">
            <Link
              href="tel:+39 338 385 8920"
              className="text-md rounded-full bg-violet-500 px-4 py-2 text-center text-white hover:bg-violet-700"
              aria-label="Numero di telefono di arischiogatti: +39 338 385 8920"
            >
              +39 338 385 8920
            </Link>
            <Link
              href="mailto:associazione.arischiogatti@gmail.com"
              className="text-md rounded-full bg-violet-500 px-4 py-2 text-center text-white hover:bg-violet-700"
              aria-label="Invia un'email a Arischiogatti: associazione.arischiogatti@gmail.com"
            >
              associazione.arischiogatti@gmail.com
            </Link>
          </div>
          <div className="gap-4 lg:flex">
            <NavBarVoice href="/adozioni" title="Adozioni" />
            <NavBarVoice href="/comunicazioni" title="Comunicazioni" />
            <NavBarVoice href="/smarriti" title="Smarriti" />
            <NavBarVoice href="/donazioni" title="Donazioni" />
            <NavBarVoice href="/chi-siamo" title="Chi Siamo" />
            <NavBarVoice href="/contatti" title="Contatti" />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
