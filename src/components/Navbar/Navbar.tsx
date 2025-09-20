import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/Contact" },
  ];
  useEffect(() => {
    console.log("open", open);
  }, [open]);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold">New App</div>

      {/* desktop menu */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-2xl"
        onClick={(open) => {
          console.log("clicked");
          setOpen(!open);
        }}
      >
        ☰
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="absolute top-14 left-0 w-full bg-blue-700 flex flex-col items-center gap-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
