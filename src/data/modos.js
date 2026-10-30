export const MODOS = [
    {
        id: "auto",
        nome: "Automático",
        icone: "⚡",
        filtro: "none",
        quando: "O modo padrão. A câmera ajusta tudo sozinha."
    },
    {
        id: "retrato",
        nome: "Retrato",
        icone: "👤",
        filtro: "contrast(1.05) saturate(1.1)",
        quando: "Para fotos de pessoas com fundo desfocado."
    },
    {
        id: "noturno",
        nome: "Noturno",
        icone: "🌙",
        filtro: "brightness(1.35) contrast(0.95) saturate(0.9)",
        quando: "Para ambientes com pouca luz."
    },
    {
        id: "pro",
        nome: "Pro",
        icone: "🎛️",
        filtro: "contrast(1.15) saturate(1.05) brightness(1.02)",
        quando: "Controle manual de exposição e foco."
    },
    {
        id: "macro",
        nome: "Macro",
        icone: "🔍",
        filtro: "contrast(1.2) saturate(1.15) brightness(1.05)",
        quando: "Para capturar detalhes mais de perto."
    },
    {
        id: "pb",
        nome: "P&B",
        icone: "🎞️",
        filtro: "grayscale(1) contrast(1.1)",
        quando: "Modo preto e branco."
    },

]

export function sugerirModoClima({ codigo, dia }) {
    const modo = (id) => MODOS.find((m) => m.id === id);

    if (!dia) {
        return { modo: modo("noturno") }
    }
    if (codigo === 0 || codigo === 1) {
        return { modo: modo("retrato") }
    }
    if (codigo === 2 || codigo === 3) {
        return { modo: modo("pb") }
    }
    if (codigo === 45 || codigo === 48) {
        return { modo: modo("pb") }
    }
    if ((codigo >= 51 && codigo <= 67) || (codigo >= 80 && codigo <= 82) || codigo >= 95) {
        return { modo: modo("macro") }
    }
    if ((codigo >= 71 && codigo <= 77) || codigo === 85 || codigo === 86) {
        return { modo: modo("pro") }
    }
    return { modo: modo("auto") }
}