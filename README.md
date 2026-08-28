# JOVI Câmera

Aplicação web de câmera desenvolvida para a Sprint 3 de Web Development. O projeto migra o protótipo para React, organizando a interface em componentes e permitindo capturar, visualizar e manter fotos localmente no navegador.

## Índice

- [Objetivo](#objetivo)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como instalar as dependências](#como-instalar-as-dependências)
- [Como executar o projeto](#como-executar-o-projeto)
- [Uso e autenticação de teste](#uso-e-autenticação-de-teste)
- [Armazenamento local](#armazenamento-local)
- [Uso de IA](#uso-de-ia)
- [Scripts disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)

## Objetivo

Construir uma aplicação React de câmera com uma estrutura de componentes reutilizáveis. A JOVI Câmera disponibiliza visualização da câmera do dispositivo, modos fotográficos, captura de imagens, galeria e estatísticas de uso por modo.

## Funcionalidades

- Login local para acesso à aplicação.
- Acesso à câmera do dispositivo por meio da API `MediaDevices` do navegador.
- Captura de fotos a partir do vídeo da câmera.
- Seis modos de captura: Automático, Retrato, Noturno, Pro, Macro e P&B.
- Aplicação visual de filtros conforme o modo selecionado.
- Sugestão aleatória de “modo surpresa do dia”.
- Galeria com as fotos capturadas, data de criação e modo utilizado.
- Estatísticas de quantidade e percentual de fotos por modo.
- Persistência das fotos no `localStorage`, preservando a galeria ao recarregar a página.

## Tecnologias utilizadas

- [React 19](https://react.dev/) — construção da interface com componentes e hooks.
- [Vite 8](https://vite.dev/) — ambiente de desenvolvimento e build.
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização responsiva e tokens visuais do projeto.
- JavaScript (ES Modules).
- APIs nativas do navegador: `MediaDevices`, `Canvas` e `localStorage`.
- ESLint — análise estática do código.

## Estrutura do projeto

```text
src/
├── components/
│   ├── CameraView.jsx     # Pré-visualização da câmera
│   ├── CardMidia.jsx      # Cartão de uma foto na galeria
│   ├── Footer.jsx         # Seletor de modos e botão de captura
│   ├── Galeria.jsx        # Fotos e estatísticas por modo
│   ├── Header.jsx         # Acesso aos modos e à galeria
│   ├── Login.jsx          # Tela de autenticação de teste
│   └── MenuModos.jsx      # Lista e sugestão de modos
├── data/
│   └── modos.js           # Dados e filtros dos modos fotográficos
├── hooks/
│   ├── useCamera.js       # Acesso, captura e liberação da câmera
│   └── useLocalStorage.js # Hook reutilizável para persistência local
├── App.jsx                # Estado principal e composição da aplicação
├── index.css              # Tema e estilos globais
└── main.jsx               # Ponto de entrada React
```

## Como instalar as dependências

Pré-requisitos: [Node.js](https://nodejs.org/) 20 ou superior e npm.

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite — normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Uso e autenticação de teste

Use as credenciais abaixo na tela inicial:

| Campo | Valor |
| --- | --- |
| Usuário | `jovi` |
| Senha | `jovi123` |

Após entrar, permita o acesso à câmera quando o navegador solicitar. A câmera depende de permissão do navegador e de um contexto seguro; em produção, use HTTPS. Escolha um modo no rodapé e pressione o botão circular para capturar uma foto. O botão **Galeria** exibe as fotos registradas e a distribuição por modo.

## Armazenamento local

As imagens capturadas são convertidas para JPEG pelo elemento `canvas` e salvas, junto com seus metadados, na chave `jovi:fotos` do `localStorage`. Portanto, os dados ficam apenas no navegador e dispositivo da pessoa usuária; não há servidor, banco de dados ou envio de fotos para terceiros. Caso o armazenamento local seja limpo, as fotos também serão removidas.

## Uso de IA

Esta versão da JOVI Câmera não utiliza recursos de inteligência artificial no funcionamento da aplicação. A sugestão de “modo surpresa do dia” é feita localmente com sorteio em JavaScript, e os filtros são filtros CSS predefinidos; nenhuma imagem, dado de login ou conteúdo da câmera é enviado a um serviço de IA.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com recarregamento automático. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente o build gerado. |
| `npm run lint` | Executa a verificação de estilo e possíveis problemas com ESLint. |

## Deploy

- Vercel: https://sprint3-web-development-ebon.vercel.app