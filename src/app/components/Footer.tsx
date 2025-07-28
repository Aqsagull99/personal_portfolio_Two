import Link from "next/link"; // ✅ this is the correct one!
import { FaBehance, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Aqsa. All rights reserved.
        </p>

        <div className="flex space-x-4 items-center">
          {/* External links: use <a> inside <Link> or directly use <a> */}
          <Link href="mailto:aqsa@example.com" className="hover:text-gray-400" aria-label="Email">
            <FaEnvelope size={18} />
          </Link>
          <Link href="https://twitter.com/aqsa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={18} />
          </Link>
          <Link href="https://facebook.com/aqsa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={18} />
          </Link>
          <Link href="https://instagram.com/aqsa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={18} />
          </Link>
          <Link href="https://behance.net/aqsa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaBehance size={18} />
          </Link>
          <Link href="https://linkedin.com/in/aqsa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}






