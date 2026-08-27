export default function Header({aoAbrirModos, aoAbrirGaleria, totalFotos}){
    return (
        <header className="flex items-center justify-between bg-jovi-cinza p-5">
            <button
                onClick={aoAbrirModos}
                className="flex h-10 items-center gap-2 rounded-full bg-black/40 px-4 text-sm text-jovi-claro hover:bg-jovi-azul"
            >
                📚Modos
            </button>

            <button
                onClick={aoAbrirGaleria}
                className="flex h-10 items-center gap-2 rounded-full bg-black/40 px-4 text-sm text-jovi-claro hover:bg-jovi-azul"
            >
                🖼️ Galeria ({totalFotos})
            </button>
        </header>
    );
}