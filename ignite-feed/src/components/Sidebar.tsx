import { RiEdit2Fill } from "react-icons/ri";
import { Avatar } from "./Avatar";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="capa"
        className="w-full h-20 object-cover"
      />

      <div className="flex flex-col items-center mt-[calc(0px-2rem-4px)]">
        <Avatar src="https://github.com/gabriellac2002.png" hasBorder />
        <strong className="mt-4 text-base text-gray-100 mb-1">
          Gabriella Cruz
        </strong>
        <span className="text-sm text-gray-400">Front-end developer</span>
      </div>

      <footer className="border-t-2 border-t-gray-600 mt-6 px-8 pb-8 pt-6">
        <a
          href="#"
          className="w-full bg-transparent text-green-500 border border-green-500 rounded-lg h-12 py-6 px-0 font-bold flex justify-center items-center gap-2 hover:bg-green-500 hover:text-white transition-colors duration-200"
        >
          <RiEdit2Fill className="w-[20px] h-[20px]" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
