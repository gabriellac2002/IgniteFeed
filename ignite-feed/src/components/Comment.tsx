import { TbThumbUp, TbTrash } from "react-icons/tb";

export function Comment() {
  return (
    <div className="mt-6 flex gap-4">
      <img
        src="https://github.com/gabriellac2002.png"
        alt=""
        className="rounded-lg border-4 border-gray-800 w-12 h-12"
      />

      <div className="flex flex-1 flex-col">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between ">
            <div className="flex flex-col">
              <strong className="text-sm leading-6">Gabriella</strong>
              <time
                title="12 de dezembro de 2024"
                dateTime="2024-12-09"
                className="text-xs text-gray-400 leading-6"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              title="Deletar comentario"
              className="bg-transparent border-none text-gray-400 pointer leading-none rounded-sm hover:text-red-500"
            >
              <TbTrash size={24} />
            </button>
          </header>

          <p className="mt-4 text-gray-300"> Parabéns pelo projeto! 🚀 </p>
        </div>

        <footer className="mt-4">
          <button className="bg-transparent border-none text-gray-300 flex items-center hover:text-green-300">
            <TbThumbUp className="mr-2" />
            Aplaudir{" "}
            <span className="before:content-['•'] before:mx-1">20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
