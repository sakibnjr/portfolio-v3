import Link from "next/link";
import { NavLink } from "./NavLink";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <Link href="#home" className="text-2xl font-bold tracking-tight">
          SN
        </Link>

        <nav>
          <ul className="liquid-glass flex items-center gap-1 px-3 py-2">

            <li><NavLink href="#home">Home</NavLink></li>
            <li><NavLink href="#about">About</NavLink></li>
            <li><NavLink href="#projects">Projects</NavLink></li>
            <li><NavLink href="#experience">Experience</NavLink></li>
            <li><NavLink href="#skills">Skills</NavLink></li>
            <li><NavLink href="#contact">Contact</NavLink></li>

          </ul>
        </nav>

      </div>

    </header>
  );
}

