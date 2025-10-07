import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-slate-900 text-slate-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Name */}
        <Link href="/" className="font-extrabold text-2xl tracking-wide hover:text-blue-400 transition-colors">
          Pramananda Sarkar
        </Link>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio/resume" className="hover:text-blue-400 transition-colors">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/portfolio/experiences" className="hover:text-blue-400 transition-colors">
              Experiences
            </Link>
          </li>
          <li>
            <Link href="/portfolio/skills" className="hover:text-blue-400 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/portfolio/projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/portfolio/researchs" className="hover:text-blue-400 transition-colors">
              Research
            </Link>
          </li>
          <li>
            <Link href="/portfolio/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-100 hover:text-blue-400 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
