import { FaHeart, FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <nav className="px-12 flex items-center justify-between p-2 bg-gray-50 shadow-md">
      <div>
        <h2 className="text-black font-bold">Dua & Ruqyah</h2>
        <p className="text-gray-600">Hisnul Muslim</p>
      </div>
      <div className="flex items-center gap-4">
        {/* Search Icon Button */}
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          <FaSearch className="text-gray-600" />
        </button>

        {/* Support Us Button */}
        <button className="flex items-center gap-2 bg-[#588157] text-white px-4 py-2 rounded-full hover:bg-[#476644] transition">
          <FaHeart className="text-white" />
          <span>Support Us</span>
        </button>
      </div>
    </nav>
  );
}
