export default function CameraView({filtro, nomeModo}){
    return(
        <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-black">
            <img s
                rc="/fotoTeste.jpg" 
                alt="Prewiew da câmera"
                className="h-full w-full object-cover"
                style={{filter: filtro}}
            />
            <span className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-sm text-jovi-claro ">
                Modo? {nomeModo}
            </span>
        </main>
    );
}