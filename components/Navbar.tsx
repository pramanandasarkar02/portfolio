import React from "react";
import Link from "next/link";
import { FaGripLinesVertical } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mt-5 flex w-full items-center justify-between border-y-4 border-double border-border-color px-4 py-2">
      <div className="font-semibold text-xl">
        Pramananda Sarkar
      </div>

      <ul className="flex items-center gap-3">
        <li className="text-link-color">
          <Link href="/">Home</Link>
        </li>

        <li className="text-border-color">
          <FaGripLinesVertical />
        </li>

        <li className="text-link-color">
          <Link href="/experience">Experience</Link>
        </li>

        <li className="text-border-color">
          <FaGripLinesVertical />
        </li>

        <li className="text-link-color">
          <Link href="/research">Research</Link>
        </li>

        <li className="text-border-color">
          <FaGripLinesVertical />
        </li>

        <li className="text-link-color">
          <Link href="/memories">Memories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;