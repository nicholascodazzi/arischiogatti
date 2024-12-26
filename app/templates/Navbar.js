"use client";
import Image from "next/image";
import NavTag from "./subcomponents/NavTag";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function openMenu() {
    // console.log(showMenu);
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    console.log(showMenu);
  }

  return (
    <>
      {/* //Mobile Menu  */}
      <nav className="max-w-full lg:hidden">
        <div className="flex h-28 items-center justify-between px-8 shadow-[0_1px_5px_1px_rgba(0,0,0,0.3)]">
          <div className="w-3/4 lg:w-auto">
            <Image
              src="/images/arischiogatti/logo.png"
              width={250}
              height={200}
              alt=""
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBars}
              width={30}
              onClick={openMenu}
              className="text-3xl text-violet-500 hover:text-violet-800"
            />
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 transition-opacity duration-700 ease-in">
          <div className="absolute right-8 top-9">
            <FontAwesomeIcon
              icon={faXmark}
              width={30}
              onClick={openMenu}
              className="text-4xl text-violet-500 hover:text-violet-800"
            />
          </div>
          <div className="flex flex-col items-center gap-5 text-xl font-bold">
            <Router>
              <Routes>
                <Route path="/" element={<NavTag tagName="Home" />} />
                <Route path="/adozioni" element={<NavTag tagName="Adozioni" />} />
                <Route path="/smarriti" element={<NavTag tagName="Smarriti" />} />
                <Route path="/chi-siamo" element={<NavTag tagName="Chi Siamo" />} />
                <Route path="/comunicazioni" element={<NavTag tagName="Comunicazioni" />} />
                <Route path="/donazioni" element={<NavTag tagName="Donazioni" />} />
                <Route path="/contatti" element={<NavTag tagName="Contatti" />} />
              </Routes>
            </Router>
          </div>
        </div>
      )}

      {/* //Desktop Menu */}
      <nav className="hidden lg:block lg:max-w-full">
        <div className="shadow-[0_1px_5px_1px_rgba(0,0,0,0.3)] lg:flex lg:h-32 lg:w-full lg:items-center lg:justify-between lg:px-8">
          <div className="lg:flex lg:h-full lg:items-center lg:justify-center">
            <Image
              src="/images/arischiogatti/logo.png"
              width={350}
              height={250}
              alt=""
            />
          </div>
          <div className="lg:flex lg:flex-col lg:gap-3">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-3">
              <div className="bg-violet-500 font-normal text-white hover:cursor-pointer hover:bg-violet-700 lg:flex lg:w-max lg:items-center lg:gap-3 lg:rounded-full lg:px-4 lg:py-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  width={30}
                  className="text-2xl text-white"
                />
                <div>+ 39 338 385 8920</div>
              </div>
              <div className="bg-violet-500 font-normal text-white hover:cursor-pointer hover:bg-violet-700 lg:flex lg:items-center lg:gap-3 lg:rounded-full lg:px-4 lg:py-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  width={30}
                  className="text-2xl text-white"
                />
                <div>associazione.arischiogatti@gmail.com</div>
              </div>
            </div>

            {/* NavTags */}
            <div className="lg:flex lg:items-center lg:justify-center lg:gap-8 lg:font-bold xl:gap-16">
              <NavTag tagName="Home" />
              <NavTag tagName="Adozioni" />
              <NavTag tagName="Smarriti" />
              <NavTag tagName="Chi Siamo" />
              <NavTag tagName="Comunicazioni" />
              <NavTag tagName="Donazioni" />
              <NavTag tagName="Contatti" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
