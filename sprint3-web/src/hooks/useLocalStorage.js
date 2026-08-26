import { useState, useEffect } from "react";

export function useLocalStorage(chave, valorInicial){
    const [valor, setValor] = useState(() => {
        try{
            const salvo = window.localStorage.getItem(chave);
            return salvo !== null ? JSON.parse(salvo) : valorInicial;
        } catch (erro){
            console.error("Erro ao ler do localStorage:", erro)
            return valorInicial;
        }
    });

    useEffect(() => {
        try{
            window.localStorage.setItem(chave, JSON.stringify(valor));
        }catch (erro){
            console.error("Erro ao gravar no localStorage", erro)
        }
    }, [chave, valor]);

    return [valor, setValor];
}