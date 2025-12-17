import { ArrowLeft, Download, Filter, ClipboardList } from "lucide-react";

interface PestReportProps {
  onNavigate: (page: string) => void;
}

export function PestReport({ onNavigate }: PestReportProps) {
  // Mock de Relatórios de Pragas
  const pestReports = [
    {
      id: "PRG-24-001",
      data: "01/12/2024",
      cultura: "Soja",
      talhao: "T-01",
      tipo: "Ferrugem Asiática",
      areaAfetada: "50 ha",
      severidade: "Alta",
      status: "Em Tratamento",
    },
    {
      id: "PRG-24-002",
      data: "05/12/2024",
      cultura: "Milho",
      talhao: "T-03",
      tipo: "Lagarta do Cartucho",
      areaAfetada: "20 ha",
      severidade: "Média",
      status: "Tratamento Agendado",
    },
    {
      id: "PRG-24-003",
      data: "10/12/2024",
      cultura: "Soja",
      talhao: "T-02",
      tipo: "Percevejo",
      areaAfetada: "10 ha",
      severidade: "Baixa",
      status: "Monitoramento",
    },
    {
      id: "PRG-24-004",
      data: "12/12/2024",
      cultura: "Algodão",
      talhao: "T-05",
      tipo: "Bicudo",
      areaAfetada: "5 ha",
      severidade: "Crítica",
      status: "Em Tratamento",
    },
  ];

  // Funções Auxiliares de Estilo
  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case "Alta":
        return "border-red-200 bg-red-50 text-red-700";
      case "Crítica":
        return "border-red-500 bg-red-100 text-red-800 font-bold";
      case "Média":
        return "border-yellow-200 bg-yellow-50 text-yellow-700";
      case "Baixa":
        return "border-green-200 bg-green-50 text-green-700";
      default:
        return "border-gray-200 bg-gray-50 text-gray-700";
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Em Tratamento":
        return "text-blue-600 bg-blue-50 border border-blue-100";
      case "Tratamento Agendado":
        return "text-purple-600 bg-purple-50 border border-purple-100";
      case "Monitoramento":
        return "text-gray-600 bg-gray-50 border border-gray-100";
      case "Resolvido":
        return "text-green-600 bg-green-50 border border-green-100";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="animate-fade-in pb-12">
      {/* Cabeçalho Vermelho (Tema Pragas) */}
      <div className="bg-[#722F37] text-white pt-8 pb-12 px-6 relative z-0">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("pests-dashboard")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para Pragas
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                <ClipboardList className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Relatório de Controle de Pragas
                </h1>
                <p className="text-red-100 text-sm mt-1">
                  Histórico de ocorrências e status de tratamentos.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#722F37] rounded-lg hover:bg-gray-100 transition-all font-bold text-sm shadow-sm">
              <Download className="w-4 h-4" />
              Exportar Dados
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 space-y-6">
        {/* Filtros */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full md:w-64">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Cultura
            </label>
            <select className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none bg-white text-sm">
              <option>Todas</option>
              <option>Soja</option>
              <option>Milho</option>
              <option>Algodão</option>
            </select>
          </div>
          <div className="w-full md:w-64">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Severidade
            </label>
            <select className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none bg-white text-sm">
              <option>Todas</option>
              <option>Crítica</option>
              <option>Alta</option>
              <option>Média</option>
              <option>Baixa</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-[#722F37] text-white rounded-lg font-bold hover:bg-[#5a252b] transition-colors flex items-center justify-center gap-2 shadow-sm w-full md:w-auto h-[38px]">
            <Filter className="w-4 h-4" /> Filtrar Resultados
          </button>
        </div>

        {/* Tabela */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Data
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Local
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Praga
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Área
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Nível
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pestReports.map((report) => (
                  <tr
                    key={report.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {report.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {report.data}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {report.cultura}{" "}
                      <span className="text-xs text-gray-400">
                        ({report.talhao})
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {report.tipo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {report.areaAfetada}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getSeverityStyle(
                          report.severidade
                        )}`}
                      >
                        {report.severidade}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(
                          report.status
                        )}`}
                      >
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
