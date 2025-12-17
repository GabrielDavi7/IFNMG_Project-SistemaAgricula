```markdown
# 🌱 Frontend - Sistema Agrícola

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan?logo=tailwindcss)

Esta é a interface cliente do Sistema de Gestão Agrícola. Uma SPA (Single Page Application) moderna, responsiva e focada na experiência do usuário rural.

## 🖥️ Módulos Implementados

O frontend já conta com interfaces completas para:

* **🐮 Gestão de Animais:** Listagem, Cadastro (com validação), Relatório detalhado.
* **🌾 Plantação (Crops):** Monitoramento de safra, Registro de Plantio e Colheita.
* **🐛 Pragas:** Dashboard de ocorrências com alertas visuais de severidade.
* **💰 Finanças:** Dashboard financeiro com fluxo de caixa e relatórios (Entradas/Saídas).
* **⛅ Clima:** Integração visual para previsão do tempo e histórico.
* **🥗 Dieta:** Controle nutricional por lotes.
* **📅 Sazonais:** Gestão de projetos de infraestrutura e ciclos.

## ⚙️ Instalação e Execução

Certifique-se de estar dentro da pasta `frontend` no seu terminal.

### 1. Instalar Dependências
```bash
npm install

### 2. Rodar Servidor de Desenvolvimento
```bash
npm run dev
```
O projeto rodará em: http://localhost:5173/
```markdown
## 🧩 Estrutura de Pastas
```bash
src/
├── app/
│   ├── components/       # Componentes isolados por domínio
│   │   ├── animals/      # Tudo sobre Animais (Dashboard, Forms)
│   │   ├── crops/        # Tudo sobre Plantação
│   │   ├── finance/      # Tudo sobre Finanças
│   │   ├── ...           # Outros módulos (climate, diet, pests)
│   │   └── others/       # Componentes globais (Navigation, Toast)
│   └── App.tsx           # Roteamento principal e Layout
├── contexts/             # Gerenciamento de estado global (ex: Modais)
└── main.tsx              # Ponto de entrada (React Router)```


## Bibliotecas Principais
Roteamento: react-router-dom (Navegação profissional com URLs limpas).

Estilização: tailwindcss (Estilos utilitários e responsivos).

Ícones: lucide-react (Ícones SVG leves e modernos).

Build: vite (Compilação extremamente rápida).
