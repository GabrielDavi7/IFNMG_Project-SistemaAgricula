import {
  ArrowLeft,
  Plus,
  Wheat,
  Sprout,
  Map,
  BarChart3,
  MoreHorizontal,
  FileText, // <-- Ícone do Relatório
} from "lucide-react";

interface CropsDashboardProps {
  onNavigate: (page: string) => void;
}

export function CropsDashboard({
  onNavigate,
}: CropsDashboardProps) {
  // DADOS SINCRONIZADOS COM O RELATÓRIO GERAL
  const crops = [
    {
      id: "SAF-24-01",
      cultura: "Soja",
      variedade: "Intacta RR2",
      talhao: "Talhão 01",
      area: "800 ha",
      dataPlantio: "15/11/2024",
      status: "Em Desenvolvimento",
      previsao: "15/03/2025",
    },
    {
      id: "SAF-24-02",
      cultura: "Milho",
      variedade: "Pioneer 30F53",
      talhao: "Talhão 03",
      area: "450 ha",
      dataPlantio: "20/10/2024",
      status: "Colheita Iniciada",
      previsao: "20/02/2025",
    },
  ];

  return (
    <div className="animate-fade-in pb-12">
      {/* Cabeçalho Verde Oliva */}
      <div className="bg-[#93a42a] text-white pt-8 pb-12 px-6">
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
              <Wheat className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Gestão de Plantação
              </h1>
              <p className="text-green-100 text-sm">
                Controle de safras, talhões e colheitas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8">
        {/* Resumo Rápido (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#93a42a] flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Área Total Plantada
              </p>
              <h3 className="text-2xl font-bold text-gray-800">
                1.250 ha
              </h3>
            </div>
            <Map className="w-8 h-8 text-[#93a42a]/20" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Estimativa Total
              </p>
              <h3 className="text-2xl font-bold text-gray-800">
                4.500 Ton
              </h3>
            </div>
            <BarChart3 className="w-8 h-8 text-green-500/20" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Status Atual
              </p>
              <h3 className="text-lg font-bold text-gray-800">
                1 Colheita / 1 Desenv.
              </h3>
            </div>
            <Sprout className="w-8 h-8 text-yellow-500/20" />
          </div>
        </div>

        {/* Barra de Ações (Botões de Registro e Relatório) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 flex gap-3">
          {/* Botão Principal: Novo Plantio */}
          <button
            onClick={() => onNavigate("register-planting")}
            className="flex items-center gap-2 px-4 py-2 bg-[#93a42a] text-white rounded-lg hover:bg-[#7a8a20] transition-colors font-medium"
          >
            <Plus className="w-4 h-4" /> Novo Plantio
          </button>

          {/* Botão Secundário: Registrar Colheita */}
          <button
            onClick={() => onNavigate("register-harvest")}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Registrar Colheita
          </button>

          {/* NOVO: Botão Gerar Relatório */}
          <button
            onClick={() => onNavigate("crops-report")} // <-- Nova rota para o relatório de plantação
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            <FileText className="w-4 h-4 text-gray-500" /> Gerar
            Relatório
          </button>
        </div>

        {/* Tabela */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Cultura
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Talhão
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Área
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Data Plantio
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {crops.map((crop) => (
                <tr
                  key={crop.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 block">
                      {crop.cultura}
                    </span>
                    <span className="text-xs text-gray-500">
                      {crop.variedade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {crop.talhao}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                    {crop.area}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {crop.dataPlantio}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${crop.cultura === "Milho" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
                    >
                      {crop.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-[#93a42a]">
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