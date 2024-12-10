export default function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="capa"
        className="w-full h-20 object-cover"
      />

      <div className="flex flex-col items-center mt-[calc(0px-1.5rem-4px)]">
        <img
          src="https://github.com/gabriellac2002.png"
          className="
          rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
          style={{ height: `calc(3rem + 8px)`, width: `calc(3rem + 8px)` }}
        />
        <strong className="mt-4 text-gray-100 mb-1">Gabriella Cruz</strong>
        <span className="text-sm text-gray-400">Front-end developer</span>
      </div>

      <footer className="border-t-2 border-t-gray-600 mt-6 px-8 pb-8 pt-6">
        <a
          href="#"
          className="w-full bg-transparent text-green-500 border border-green-500 rounded-lg h-12 p-6 font-bold flex justify-center items-center"
        >
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
