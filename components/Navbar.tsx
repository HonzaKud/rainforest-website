import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-white text-xl font-bold">
        <Link href="/">🌿 Pralesy</Link>
      </div>

      {/* Navigační odkazy */}
      <div className="space-x-6">
        <Link className="text-white hover:text-green-400 transition" href="/pralesy">
          Pralesy
        </Link>
        <Link className="text-white hover:text-green-400 transition" href="/about">
          O webu
        </Link>
        <Link className="text-white hover:text-green-400 transition" href="/contact">
          Kontakt
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
