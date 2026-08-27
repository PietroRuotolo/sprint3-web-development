import { MODOS } from "../data/modos";

export default function Footer({modoAtivo, aoTrocarModo, aoCapturar, mensagem}){
    return (
        <footer className="flex flex-col items-center gap-4 bg-jovi-cinza p-5">
            <div className="flex flex-wrap justify-center gap-2">
                {MODOS.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => aoTrocarModo(m.id)}
                        className={
                            "rounded-full px-3 py-2 text-xs text-jovi-claro " + (modoAtivo == m.id ? "bg-jovi-azul" : "bg-black/40")
                        }
                    >
                        {m.icone} {m.nome}
                    </button>
                ))}
            </div>

            <button
                onClick={aoCapturar}
                aria-label="Tirar foto"
                className="h-16 w-16 rounded-full border-4 border-white/35 bg-jovi-claro active:scale-90"
            />

            <p className="min-h-5 text-center text-sm text-jovi-claro">{mensagem}</p>
        </footer>
    )
}