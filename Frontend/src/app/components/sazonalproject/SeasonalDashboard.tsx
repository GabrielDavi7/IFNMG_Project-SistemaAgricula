import {
  CalendarRange,
  Plus,
  BarChart3,
  ArrowLeft,
} from "lucide-react";

interface SeasonalDashboardProps {
  onNavigate: (page: string) => void;
}

export function SeasonalDashboard({
  onNavigate,
}: SeasonalDashboardProps) {
  const projects = [
    {
      id: 1,
      nome: "Safra Soja Verão 23/24",
      tipo: "Plantio",
      inicio: "15/09/2023",
      fim: "20/02/2024",
      status: "Em Andamento",
      progresso: 75,
    },
    {
      id: 2,
      nome: "Manutenção de Cercas - Setor N",
      tipo: "Infraestrutura",
      inicio: "10/01/2024",
      fim: "20/01/2024",
      status: "Planejado",
      progresso: 0,
    },
    {
      id: 3,
      nome: "Colheita Milho Safrinha",
      tipo: "Colheita",
      inicio: "01/06/2024",
      fim: "30/07/2024",
      status: "Concluído",
      progresso: 100,
    },
  ];

  const getStatusColor = (status: string) => {
    if (status === "Em Andamento")
      return { bg: "#2fb8ac20", text: "#0f766e" };
    if (status === "Planejado")
      return { bg: "#f3f4f6", text: "#374151" };
    return { bg: "#dcfce7", text: "#166534" };
  };

  return (
    <div className="animate-fade-in">
      {/* HEADER COLORIDO COM BOTÃO DE VOLTAR */}
      <div
        className="border-b border-gray-200"
        style={{ backgroundColor: "#2fb8ac" }}
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
              <CalendarRange className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Projetos Sazonais
              </h1>
              <p className="text-blue-50">
                Planejamento e acompanhamento de safras e
                atividades.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Cards de Ação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => onNavigate("register-project")}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left group flex items-center justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Novo Projeto
              </h3>
              <p className="text-gray-500 text-sm">
                Iniciar novo ciclo ou atividade.
              </p>
            </div>
          </button>

          <button className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left group flex items-center justify-between">
            <div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#2fb8ac20" }}
              >
                <BarChart3
                  className="w-5 h-5"
                  style={{ color: "#2fb8ac" }}
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Relatórios de Projetos
              </h3>
              <p className="text-gray-500 text-sm">
                Cronogramas e resultados.
              </p>
            </div>
          </button>
        </div>

        {/* Tabela */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Projetos Ativos
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Nome do Projeto
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Tipo
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Período
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Progresso
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects.map((proj) => {
                const style = getStatusColor(proj.status);
                return (
                  <tr
                    key={proj.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {proj.nome}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {proj.tipo}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {proj.inicio} - {proj.fim}
                    </td>
                    <td className="px-6 py-4 w-48">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full"
                          style={{
                            width: `${proj.progresso}%`,
                            backgroundColor: "#2fb8ac",
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {proj.progresso}% concluído
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: style.bg,
                          color: style.text,
                        }}
                      >
                        {proj.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}