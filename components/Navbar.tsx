import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-white text-xl font-bold tracking-wide">
  <Link href="/">Lost in Nature</Link>
</div>

      {/* Navigační odkazy */}
      <div className="space-x-4 text-white text-sm tracking-wide hidden md:flex">
        <Link className="hover:text-green-400 transition" href="#pralesy">Pralesy</Link>
        <Link className="hover:text-green-400 transition" href="#ekologie">Ekologie</Link>
        <Link className="hover:text-green-400 transition" href="#cestovani">Cestování</Link>
        <Link className="hover:text-green-400 transition" href="#blog">Blog</Link>
        <Link className="hover:text-green-400 transition" href="#kontakt">Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
