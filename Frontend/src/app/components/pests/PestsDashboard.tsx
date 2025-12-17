import {
  ArrowLeft,
  Plus,
  Bug,
  AlertTriangle,
  Target,
  MoreHorizontal,
  FileText,
  Search,
  ShieldAlert,
} from "lucide-react";

interface PestsDashboardProps {
  onNavigate: (page: string) => void;
}

export function PestsDashboard({
  onNavigate,
}: PestsDashboardProps) {
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
        return "bg-red-100 text-red-700";
      case "Média":
        return "bg-orange-100 text-orange-700";
      case "Baixa":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const themeColor = "#a93226"; // Cor de tema forte (vermelho escuro)

  return (
    <div className="animate-fade-in pb-12">
      {/* 1. CABEÇALHO (Fundo Colorido) */}
      <div
        className={`bg-[${themeColor}] text-white pt-8 pb-12 px-6`}
      >
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors text-base font-medium"
          >
            <ArrowLeft className="w-6 h-6 mr-2" /> Voltar ao
            menu principal
          </button>

          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <Bug className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Gestão de Pragas e Doenças
              </h1>
              <p className="text-red-100 text-sm">
                Monitoramento, registro de focos e planejamento
                de tratamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (Área Branca) */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        {" "}
        {/* Mantendo -mt-8 para o efeito de sobreposição */}
        {/* CARDS DE RESUMO (KPIs) - Corrigidos e estilizados como na imagem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 relative z-10">
          {/* Focos Ativos */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center border-l-4 border-red-500">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                FOCOS ATIVOS
              </p>
              <h3 className="text-2xl font-bold text-gray-800">
                4
              </h3>
            </div>
            <Bug className="w-8 h-8 text-red-500/20" />
          </div>
          {/* Tratamentos Pendentes */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center border-l-4 border-orange-500">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                TRATAMENTOS PENDENTES
              </p>
              <h3 className="text-2xl font-bold text-gray-800">
                1
              </h3>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500/20" />
          </div>
          {/* Último Registro */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center border-l-4 border-gray-500">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                ÚLTIMO REGISTRO
              </p>
              <h3 className="text-lg font-bold text-gray-800">
                12/12/2024
              </h3>
            </div>
            <ShieldAlert className="w-8 h-8 text-gray-500/20" />
          </div>
        </div>
        {/* Barra de Ações (Botões) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 flex gap-3">
          <button
            onClick={() => onNavigate("register-pest")}
            className={`flex items-center gap-2 px-4 py-2 bg-[${themeColor}] text-white rounded-lg hover:bg-red-700 transition-colors font-medium`}
          >
            <Plus className="w-4 h-4" /> Novo Registro
          </button>

          <button
            onClick={() => onNavigate("pest-report")}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            <FileText className="w-4 h-4 text-gray-500" /> Gerar
            Relatório
          </button>
        </div>
        {/* Tabela de Ocorrências Recentes */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  ID / Data
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Tipo
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Cultura
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Talhão
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
                      className={`px-2 py-1 rounded-full text-xs font-bold ${getSeverityStyle(pest.severidade)}`}
                    >
                      {pest.severidade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-red-600">
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