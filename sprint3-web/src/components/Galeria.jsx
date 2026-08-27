import CardMidia from "./CardMidia";

export default function Galeria({fotos, aoFechar}){
    const total = fotos.length;

    const contagem = {};
    fotos.forEach((f) => {
        contagem[f.modoNome] = (contagem[f.modoNome] || 0) + 1;
    });

    const estatisticas = Object.keys(contagem).map((nome) => {
        const qtd = contagem[nome];
        const porcentagem = Math.round((qtd/total)*100);
        return {nome, qtd, porcentagem};
    });

    estatisticas.sort((a,b) => b.qtd - a.qtd);

    return (
        <div className="absolute inset-0 z-20 flex flex-col bg-black/90">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
                <h2 className="text-xl font-bold text-jovi-claro">
                    Galeria ({total})
                </h2>
                <button
                    onClick={aoFechar}
                    className="h-9 w-9 rounded-full bg-white/10 text-jovi-claro hover:bg-jovi-vermelho"
                >
                    ✕
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
                {total === 0 ? (
                    <p className="py-10 text-center text-sm text-gray-400">
                        Nenhuma foto ainda. Tire uma foto na câmera para começar.
                    </p>
                ) : (
                    <>
                        <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-4 ">
                            <p className="mb-3 font-bold text-jovi-claro">Uso por modo</p>
                             {estatisticas.map((e) => (
                                <div key={e.nome} className="mb-2">
                                    <div className="flex justify-between text-sm text-jovi-claro">
                                        <span>{e.nome}</span>
                                        <span>
                                            {e.qtd} ({e.porcentagem}%)
                                        </span>
                                    </div>
                                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                                        <div
                                            className="h-full rounded-full bg-jovi-azul"
                                            style={{ width: `${e.porcentagem}%` }}
                                        />
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {fotos.map((foto) => (
                                <CardMidia  key={foto.id} foto={foto}/>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}