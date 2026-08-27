import { useState } from "react";

const USUARIO_TESTE = "jovi";
const SENHA_TESTE = "jovi123";

export default function Login({aoEntrar}){
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    function tentarEntrar(){
        if (usuario.trim() === USUARIO_TESTE && senha === SENHA_TESTE){
            aoEntrar();
        }else{
            setErro("Usuário ou senha inválidos.")
        }
    }

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-jovi-preto p-8">
            <div className="flex w-full max-w-xs flex-col gap-4">
                <h1 className="text-center text-4xl font-extrabold text-jovi-azul">
                    JOVI <span className="text-jovi-claro">Câmera</span>
                </h1>
                <p className="mb-2 text-center text-sm text-gray-400">
                    Sua câmera, do seu jeito.
                </p>

                <input 
                    type="text"
                    value={usuario}
                    placeholder="Usuário"
                    onChange={(e) => setUsuario(e.target.value)}
                    className="h-11 rounded-lg border-white/25 bg-white/5 px-4 text-jovi-claro outline-none focus:border-jovi-azul" 
                />
                <input 
                    type="password"
                    value={senha}
                    placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                    className="h-11 rounded-lg border-2 border-white/25 bg-white/5 px-4 text-jovi-claro outline-none focus:border-jovi-azul" 
                />

                {erro && <p className="text-center text-sm text-jovi-vermelho">{erro}</p>}

                <button
                    onClick={tentarEntrar}
                    className="h-11 rounded-lg bg-jovi-azul font-bold text-white hover:brightness-110"
                >
                    Entrar
                </button>
                <p className="text-center text-xs text-gray-500">
                    Teste: usuário <strong>jovi</strong> / senha <strong>jovi123</strong>
                </p>
            </div>
        </div>
    )
}