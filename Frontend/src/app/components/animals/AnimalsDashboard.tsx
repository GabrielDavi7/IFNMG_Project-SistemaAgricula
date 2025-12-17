import {
  ArrowLeft,
  Plus,
  Search,
  MoreHorizontal,
  FileText, // <-- Ícone do Relatório
  PawPrint,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

interface AnimalsDashboardProps {
  onNavigate: (page: string) => void;
}

export function AnimalsDashboard({ onNavigate }: AnimalsDashboardProps) {
  // Mock de dados (Resumo)
  const animals = [
    {
      id: "BOV-001",
      brinco: "1042",
      raca: "Nelore",
      peso: "540kg",
      status: "Ativo",
      lote: "Engorda A",
    },
    {
      id: "BOV-002",
      brinco: "1045",
      raca: "Angus",
      peso: "420kg",
      status: "Em Tratamento",
      lote: "Enfermaria",
    },
    {
      id: "BOV-003",
      brinco: "1090",
      raca: "Brahman",
      peso: "610kg",
      status: "Vendido",
      lote: "-",
    },
  ];

  return (
    <div className="animate-fade-in pb-12">
      {/* Cabeçalho Azul Petróleo */}
      <div className="bg-[#046d8b] text-white pt-8 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors text-base font-medium"
          >
            <ArrowLeft className="w-6 h-6 mr-2" /> Voltar ao menu principal
          </button>

          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <PawPrint className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Gestão de Animais</h1>
              <p className="text-blue-100 text-sm">
                Controle de rebanho, pesagem e vacinação.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8">
        {/* KPIs (Resumo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#046d8b] flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Total de Cabeças
              </p>
              <h3 className="text-2xl font-bold text-gray-800">142</h3>
            </div>
            <PawPrint className="w-8 h-8 text-[#046d8b]/20" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Em Tratamento
              </p>
              <h3 className="text-2xl font-bold text-gray-800">12</h3>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-500/20" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Nascimentos (Mês)
              </p>
              <h3 className="text-2xl font-bold text-gray-800">8</h3>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500/20" />
          </div>
        </div>

        {/* Barra de Ações */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-3 w-full md:w-auto">
            {/* Botão Novo Registro */}
            <button
              onClick={() => onNavigate("register-animal")}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-[#046d8b] text-white rounded-lg hover:bg-[#03566d] transition-colors font-medium w-full md:w-auto"
            >
              <Plus className="w-4 h-4" /> Novo Animal
            </button>

            {/* 👇 BOTÃO RELATÓRIO ADICIONADO AQUI */}
            <button
              onClick={() => onNavigate("animal-report")}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full md:w-auto"
            >
              <FileText className="w-4 h-4 text-gray-500" /> Relatórios
            </button>
          </div>

          {/* Barra de Pesquisa */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por brinco ou lote..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#046d8b] focus:ring-1 focus:ring-[#046d8b]"
            />
          </div>
        </div>

        {/* Tabela de Animais Recentes */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Brinco / ID
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Raça
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Peso
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Lote
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
              {animals.map((animal) => (
                <tr
                  key={animal.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 block">
                      {animal.brinco}
                    </span>
                    <span className="text-xs text-gray-500">{animal.id}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {animal.raca}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                    {animal.peso}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {animal.lote}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        animal.status === "Ativo"
                          ? "bg-green-100 text-green-700"
                          : animal.status === "Em Tratamento"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {animal.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-[#046d8b]">
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
