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
  <Link className="hover:text-green-400 transition" href="#home">Domů</Link>
  <Link className="hover:text-green-400 transition" href="#content">O projektu</Link>
  <Link className="hover:text-green-400 transition" href="#gallery">Galerie</Link>
  <Link className="hover:text-green-400 transition" href="#facts">Příběhy</Link>
  <Link className="hover:text-green-400 transition" href="#contact">Kontakt</Link>
</div>
    </nav>
  );
};

export default Navbar;
