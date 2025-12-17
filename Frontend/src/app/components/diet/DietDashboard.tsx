import {
  Utensils,
  Plus,
  FileText,
  Search,
  ArrowLeft,
} from "lucide-react";

interface DietDashboardProps {
  onNavigate: (page: string) => void;
}

export function DietDashboard({
  onNavigate,
}: DietDashboardProps) {
  const recentDiets = [
    {
      id: 1,
      data: "15/12/2024 08:00",
      lote: "Lote A (Lactação)",
      tipo: "Ração Balanceada",
      qtd: "500kg",
      resp: "Carlos",
    },
    {
      id: 2,
      data: "15/12/2024 08:30",
      lote: "Lote B (Corte)",
      tipo: "Silagem de Milho",
      qtd: "1200kg",
      resp: "Carlos",
    },
    {
      id: 3,
      data: "14/12/2024 16:00",
      lote: "Lote C (Bezerros)",
      tipo: "Suplemento Mineral",
      qtd: "50kg",
      resp: "Ana",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* HEADER COLORIDO */}
      <div
        className="border-b border-gray-200"
        style={{ backgroundColor: "#0ea5e9" }}
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
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Gestão de Dieta Animal
              </h1>
              <p className="text-blue-50">
                Controle nutricional e registro de alimentação.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => onNavigate("register-diet")}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left group flex items-center justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-blue-50">
                <Plus className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Registrar Dieta
              </h3>
              <p className="text-gray-500 text-sm">
                Lançar nova alimentação para um lote.
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate("diet-report")}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left group flex items-center justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-gray-100">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Relatórios de Dieta
              </h3>
              <p className="text-gray-500 text-sm">
                Histórico de consumo e custos.
              </p>
            </div>
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">
            Alimentações Recentes
          </h2>
          <button className="text-sm text-[#0ea5e9] font-medium hover:underline flex items-center gap-1">
            <Search className="w-4 h-4" /> Buscar no Histórico
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Data/Hora
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Grupo/Lote
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Tipo de Dieta
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Quantidade
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Responsável
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentDiets.map((diet) => (
                <tr key={diet.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-600">
                    {diet.data}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {diet.lote}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {diet.tipo}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {diet.qtd}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {diet.resp}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#0ea5e9] hover:font-bold text-sm">
                      Editar
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