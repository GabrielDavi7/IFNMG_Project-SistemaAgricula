import {
  CloudSun,
  Search,
  FileText,
  ArrowLeft,
} from "lucide-react";

interface ClimateDashboardProps {
  onNavigate: (page: string) => void;
}

export function ClimateDashboard({
  onNavigate,
}: ClimateDashboardProps) {
  const history = [
    {
      id: 1,
      data: "15/12/2024",
      local: "Fazenda Sede - Talhão 1",
      periodo: "Próx. 5 dias",
      usuario: "João Silva",
    },
    {
      id: 2,
      data: "14/12/2024",
      local: "Setor Norte",
      periodo: "Hoje",
      usuario: "Maria Oliveira",
    },
    {
      id: 3,
      data: "10/12/2024",
      local: "Fazenda Sede",
      periodo: "Semana",
      usuario: "João Silva",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* HEADER COLORIDO */}
      <div
        className="border-b border-gray-200"
        style={{ backgroundColor: "#f59e0b" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao menu principal
          </button>

          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
              <CloudSun className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Gestão Climática
              </h1>
              <p className="text-orange-50">
                Previsões meteorológicas e histórico de
                consultas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => onNavigate("consult-climate")}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left group flex items-center justify-between"
          >
            <div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#f59e0b20" }}
              >
                <Search
                  className="w-5 h-5"
                  style={{ color: "#f59e0b" }}
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Consultar Clima
              </h3>
              <p className="text-gray-500 text-sm">
                Verificar previsão para uma localidade.
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate("climate-report")}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left group flex items-center justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-gray-100">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Relatórios Climáticos
              </h3>
              <p className="text-gray-500 text-sm">
                Análise de histórico de consultas.
              </p>
            </div>
          </button>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Histórico de Consultas Realizadas
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Data da Consulta
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Localidade
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Período Solicitado
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Usuário
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-600">
                    {item.data}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.local}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {item.periodo}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {item.usuario}
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