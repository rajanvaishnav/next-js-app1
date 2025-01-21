import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/" className="text-xl font-semibold">
            Bookstore
          </Link>
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/browse" className="hover:text-yellow-400">
              Browse
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-yellow-400">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
