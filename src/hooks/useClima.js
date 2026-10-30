import { useEffect, useState } from "react";

const SAO_PAULO = {latitude: -23.55, longitude: -46.63};

function obterLocalizacao(){
    return new Promise((resolve) => {
        if (!navigator.geolocation){
            resolve(SAO_PAULO);
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (posicao) =>
                resolve({
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                }),
            () => resolve(SAO_PAULO),
            {timeout: 5000}
        );
    });
}

export function useClima(){
    const [estado, setEstado] = useState({status: "carregando", clima: null});

    useEffect(() => {
        let cancelado = false;

        async function buscarClima(){
            try{
                const {latitude, longitude} = await obterLocalizacao();
                
                const url = "https://api.open-meteo.com/v1/forecast" +
                    `?latitude=${latitude.toFixed(2)}&longitude=${longitude.toFixed(2)}` +
                    "&current=temperature_2m,weather_code,is_day&timezone=auto";

                const resposta = await fetch(url);
                if (!resposta.ok){
                    throw new Error('Open-Meteo respondeu com status ' + resposta.status);
                }
                const dados = await resposta.json();

                if(!cancelado){
                    setEstado({
                        status: 'ok',
                        clima: {
                            temperatura: Math.round(dados.current.temperature_2m),
                            codigo: dados.current.weather_code,
                            dia: dados.current.is_day === 1, 
                        },
                    });
                }
            } catch (erro) {
                console.error('Não foi possível obter o clima:', erro);
                if (!cancelado) setEstado({status: 'erro', clima: null});
            }
        }

        buscarClima();

        return () => {
            cancelado = true
        };
    }, [])

    return estado;
}