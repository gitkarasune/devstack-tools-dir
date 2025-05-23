import { FiX } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-blue-950 p-7 flex items-center justify-between">
      <span className="text-2xl font-serif bg-blue-900 py-3 px-3 rounded-xl">
        <span className="bg-blue-800 py-[9px] px-[9px] rounded-xl">
        devStack
        </span>
      </span>

      <div className="border border-slate-400 rounded-full py-3 px-3 text-2xl">
        {/* <FiX /> */}
        <FaBars />
      </div>
    </div>
  );
}
