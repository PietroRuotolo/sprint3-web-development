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