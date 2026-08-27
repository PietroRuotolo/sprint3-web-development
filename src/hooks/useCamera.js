import { useEffect, useRef, useState } from "react";

export function useCamera(ativo){
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        if(!ativo) return;
        async function configurarCamera() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
               setMensagem("Seu navegador não suporta acesso à câmera.")
               return;
            }
            try{
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {facingMode: {ideal: "environment"}},
                    audio: false,
                });
                streamRef.current = stream;
                if(videoRef.current){
                    videoRef.current.srcObject = stream;
                    await videoRef.current.play();
                }
                setMensagem("");
            }catch(erro){
                console.error(erro);
                setMensagem("Erro ao acessar a câmera. Verifique a permissão do navegador.")
            }
        }

        configurarCamera();

        return () => {
            if(streamRef.current){
                streamRef.current.getTracks().forEach((t) => t.stop())
            }
        };
    }, [ativo]);

    function capturarFrame(){
        const video = videoRef.current;
        if(!video || !video.videoWidth || !video.videoHeight){
            setMensagem("A câmera ainda está carregando.")
            return null;
        }
    
        const larguraMaxima = 640;
        const proporcao = video.videoHeight / video.videoWidth;
        const largura = Math.min(video.videoWidth, larguraMaxima);
        const altura = Math.round(largura * proporcao);

        const canvas = document.createElement("canvas");
        canvas.width = largura;
        canvas.height = altura;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, largura, altura);
        return canvas.toDataURL("image/jpeg", 0.7);
    }

    return {videoRef, mensagem, setMensagem, capturarFrame};
}