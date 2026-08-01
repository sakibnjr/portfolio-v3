import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="#" className="text-2xl font-bold tracking-tight">
          SakibNJr
        </Link>

        {/* Liquid-glass nav pill */}
        <nav>
          <ul className="liquid-glass flex items-center gap-1 px-3 py-2">

            <li><Link href="#about"      className="liquid-glass-link">About</Link></li>
            <li><Link href="#projects"   className="liquid-glass-link">Projects</Link></li>
            <li><Link href="#experience" className="liquid-glass-link">Experience</Link></li>
            <li><Link href="#blog"       className="liquid-glass-link">Blog</Link></li>
            <li><Link href="#contact"    className="liquid-glass-link">Contact</Link></li>

          </ul>
        </nav>

      </div>

    </header>
  );
}
