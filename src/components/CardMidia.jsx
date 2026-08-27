export default function CardMidia({foto}) {
    const data = new Date(foto.criadoEm);
    const dataFormatada = data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
           <img
            src={foto.imagem}
            alt={`Foto no modo ${foto.modoNome}`}
            className="h-28 w-full object-cover"
            style={{filter: foto.filtro}}
           />
           <div className="p-2">
            <span className="rounded-full bg-jovi-amarelo px-2 py-0.5 text-xs text-jovi-preto">
                {foto.modoIcone} {foto.modoNome}
            </span>
            <p className="mt-1 text-xs text-gray-400">{data}</p>
           </div>
        </div>
    )
}