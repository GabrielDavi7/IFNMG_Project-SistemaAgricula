import {
  ArrowLeft,
  Plus,
  Bug,
  Target,
  MoreHorizontal,
  FileText,
  Search,
  ShieldAlert,
} from "lucide-react";

interface PestsDashboardProps {
  onNavigate: (page: string) => void;
}

export function PestsDashboard({ onNavigate }: PestsDashboardProps) {
  // DADOS DA PÁGINA DE GESTÃO DE PRAGAS
  const pests = [
    {
      id: "PRG-24-001",
      tipo: "Ferrugem Asiática",
      talhao: "Talhão 01",
      cultura: "Soja",
      dataRegistro: "01/12/2024",
      severidade: "Alta",
    },
    {
      id: "PRG-24-002",
      tipo: "Lagarta do Cartucho",
      talhao: "Talhão 03",
      cultura: "Milho",
      dataRegistro: "05/12/2024",
      severidade: "Média",
    },
    {
      id: "PRG-24-003",
      tipo: "Percevejo",
      talhao: "Talhão 02",
      cultura: "Soja",
      dataRegistro: "10/12/2024",
      severidade: "Baixa",
    },
  ];

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case "Alta":
        return "bg-red-100 text-red-700 border border-red-200";
      case "Média":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Baixa":
        return "bg-green-100 text-green-700 border border-green-200";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="animate-fade-in pb-12 w-full">
      {/* 1. CABEÇALHO (Fundo Vermelho Corrigido) */}
      <div className="bg-red-900 text-white pt-8 pb-12 px-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao menu principal
          </button>

          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm">
              <Bug className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Controle de Pragas
              </h1>
              <p className="text-red-100 text-sm mt-1">
                Monitoramento de infestações e aplicação de defensivos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        {/* 2. CARDS DE RESUMO (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-600 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Ocorrências Ativas
              </p>
              <h3 className="text-2xl font-bold text-gray-800">5</h3>
            </div>
            <Bug className="w-8 h-8 text-red-100" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Área Afetada
              </p>
              <h3 className="text-2xl font-bold text-gray-800">120 ha</h3>
            </div>
            <Target className="w-8 h-8 text-yellow-100" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Tratamentos Hoje
              </p>
              <h3 className="text-2xl font-bold text-gray-800">2</h3>
            </div>
            <ShieldAlert className="w-8 h-8 text-blue-100" />
          </div>
        </div>

        {/* 3. BARRA DE AÇÕES (Botão Corrigido) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-3 w-full md:w-auto">
            {/* Botão Nova Ocorrência (Corrigido para bg-red-600) */}
            <button
              onClick={() => onNavigate("register-pest")}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium w-full md:w-auto shadow-sm"
            >
              <Plus className="w-4 h-4" /> Nova Ocorrência
            </button>

            {/* Botão Relatórios */}
            <button
              onClick={() => onNavigate("pest-report")}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full md:w-auto"
            >
              <FileText className="w-4 h-4 text-gray-500" /> Relatórios
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por praga ou talhão..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        {/* 4. TABELA DE PRAGAS */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  ID / Data
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Praga
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Cultura
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Local
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Severidade
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pests.map((pest) => (
                <tr
                  key={pest.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 block">
                      {pest.id}
                    </span>
                    <span className="text-xs text-gray-500">
                      {pest.dataRegistro}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {pest.tipo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                    {pest.cultura}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {pest.talhao}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${getSeverityStyle(
                        pest.severidade
                      )}`}
                    >
                      {pest.severidade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
