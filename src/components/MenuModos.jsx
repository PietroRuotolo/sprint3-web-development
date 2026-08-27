import {MODOS} from "../data/modos";

export default function MenuModos({aoFechar}){

    const candidatos = MODOS.filter((m) => m.id !== "auto");
    const sugestao = candidatos[Math.floor(Math.random() * candidatos.length)];

    return (
        <div className="absolute inset-0 z-30 flex flex-col bg-black/90">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
                <h2 className="text-xl font-bold text-jovi-claro">Modos da câmera</h2>
                <button
                    onClick={aoFechar}
                    className="h-9 w-9 rounded-full bg-white/10 text-jovi-claro hover:bg-jovi-vermelho"
                >
                    ✕
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
                <div className="mb-5 rounded-xl border-white/15 bg-jovi-azul/20 p-4">
                    <h3 className="text-xs font-bold tracking-wide text-jovi-amarelo uppercase">
                        Modo surpresa do Dia
                    </h3>
                    <p className="my-1 text-2xl font-extrabold text-jovi-claro">
                        {sugestao.icone} {sugestao.nome}
                    </p>
                    <p className="text-sm text-gray-300">{sugestao.quando}</p>
                </div>

                <div className="flex flex-col gap-3">
                    {MODOS.map((m) => (
                        <div
                            key={m.id}
                            className="rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                            <p className="font-bold text-jovi-claro">
                                {m.icone} {m.nome}
                            </p>
                            <p className="mt-1 text-sm text-gray-400">{m.quando}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}