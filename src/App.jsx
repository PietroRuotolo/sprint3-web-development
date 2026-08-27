import { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CameraView from "./components/CameraView";
import Footer from "./components/Footer";
import MenuModos from "./components/MenuModos";
import Galeria from "./components/Galeria";
import { MODOS } from "./data/modos";
import {useCamera} from "./hooks/useCamera"

export default function App() {
    const [logado, setLogado] = useState(false);
    const {videoRef, mensagemCamera, capturarFrame} = useCamera(logado);

    const [fotos, setFotos] = useState(() => {
        const salvo = localStorage.getItem("jovi:fotos");
        return salvo ? JSON.parse(salvo) : [];
    });

    useEffect(() => {
        localStorage.setItem("jovi:fotos", JSON.stringify(fotos));
    }, [fotos]);

    const [modoAtivo, setModoAtivo] = useState("auto");
    const [modalAberto, setModalAberto] = useState(null);
    const [mensagem, setMensagem] = useState("");

    const modoInfo = MODOS.find((m) => m.id === modoAtivo);

    function capturar() {
        const imagemCapturada = capturarFrame();
        if (!imagemCapturada) return;

        const novaFoto = {
            id: Date.now() + Math.floor(Math.random() * 1000),
            imagem: imagemCapturada,
            filtro: modoInfo.filtro,
            modoNome: modoInfo.nome,
            modoIcone: modoInfo.icone,
            criadoEm: Date.now(),
        };
        setFotos([novaFoto, ...fotos]);
        setMensagem("Foto salva na galeria!");
    }

    if (!logado) {
        return <Login aoEntrar={() => setLogado(true)} />
    }

    return (
        <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-jovi-preto">
            <Header
                aoAbrirModos={() => setModalAberto("modos")}
                aoAbrirGaleria={() => setModalAberto("galeria")}
                totalFotos={fotos.length}
            />

            <CameraView videoRef={videoRef} filtro={modoInfo.filtro} nomeModo={modoInfo.nome} />

            <Footer
                modoAtivo={modoAtivo}
                aoTrocarModo={setModoAtivo}
                aoCapturar={capturar}
                mensagem={mensagem}
            />

            {modalAberto === "modos" && (
                <MenuModos aoFechar={() => setModalAberto(null)} />
            )}

            {modalAberto === "galeria" && (
                <Galeria fotos={fotos} aoFechar={() => setModalAberto(null)} />
            )}
        </div>
    );
}