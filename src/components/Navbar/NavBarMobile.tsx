import {
  Sheet,
  SheetTitle,
  SheetTrigger,
  SheetContent,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import NavBarVoiceMobile from "./NavBarVoiceMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBarMobile() {
  return (
    <Sheet>
      {/* Right Side: Mobile Menu Button (Hidden on large screens) */}
      <div className="flex w-full items-center justify-between lg:hidden">
        {/* Left Side: Logo (Visible on large screens) */}
        <Link href="/" className="flex lg:hidden">
          <Image
            width={200}
            height={200}
            alt="Arischiogatti Logo - Link to Homepage"
            src="/images/arischiogatti/logo.png"
          />
        </Link>
      </div>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto lg:hidden">
          <FontAwesomeIcon icon={faBars} color={"gray"} />
          <span className="sr-only">Attiva il menu laterale</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className="flex items-center justify-center py-6">
          <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
        </div>
        <div className="grid gap-2 py-6">
          <NavBarVoiceMobile href="/adozioni" title="Adozioni" />
          <NavBarVoiceMobile href="/comunicazioni" title="Comunicazioni" />
          <NavBarVoiceMobile href="/smarriti" title="Smarriti" />
          <NavBarVoiceMobile href="/donazioni" title="Donazioni" />
          <NavBarVoiceMobile href="/chi-siamo" title="Chi Siamo" />
          <NavBarVoiceMobile href="/contatti" title="Contatti" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
