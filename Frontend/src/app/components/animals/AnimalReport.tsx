import {
  ArrowLeft,
  Download,
  Filter,
  Search,
  FileText,
  Printer,
  MoreHorizontal,
} from "lucide-react";

interface AnimalReportProps {
  onNavigate: (page: string) => void;
}

export function AnimalReport({ onNavigate }: AnimalReportProps) {
  // Dados Mockados (Simulando um banco de dados)
  const animals = [
    {
      id: "BOV-001",
      brinco: "1042",
      raca: "Nelore",
      sexo: "M",
      peso: "540kg",
      status: "Ativo",
      lote: "Engorda A",
      saude: "Saudável",
    },
    {
      id: "BOV-002",
      brinco: "1045",
      raca: "Angus",
      sexo: "F",
      peso: "420kg",
      status: "Em Tratamento",
      lote: "Enfermaria",
      saude: "Mastite",
    },
    {
      id: "BOV-003",
      brinco: "1090",
      raca: "Brahman",
      sexo: "M",
      peso: "610kg",
      status: "Vendido",
      lote: "-",
      saude: "-",
    },
    {
      id: "BOV-004",
      brinco: "1102",
      raca: "Nelore",
      sexo: "F",
      peso: "380kg",
      status: "Ativo",
      lote: "Matriz B",
      saude: "Saudável",
    },
    {
      id: "BOV-005",
      brinco: "1115",
      raca: "Girolando",
      sexo: "F",
      peso: "450kg",
      status: "Ativo",
      lote: "Leiteiro",
      saude: "Saudável",
    },
    {
      id: "BOV-006",
      brinco: "1120",
      raca: "Nelore",
      sexo: "M",
      peso: "550kg",
      status: "Ativo",
      lote: "Engorda A",
      saude: "Saudável",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-100 text-green-700 border-green-200";
      case "Em Tratamento":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Vendido":
        return "bg-gray-100 text-gray-500 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="animate-fade-in pb-12">
      {/* --- CABEÇALHO (Azul Petróleo) --- */}
      <div className="bg-[#046d8b] text-white pt-8 pb-12 px-6 relative z-0">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("animals-dashboard")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para Gestão de Animais
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Relatório Geral do Rebanho
                </h1>
                <p className="text-blue-100 text-sm mt-1">
                  Listagem completa, filtros avançados e exportação de dados.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all font-medium text-sm backdrop-blur-sm">
                <Printer className="w-4 h-4" />
                Imprimir
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#046d8b] rounded-lg hover:bg-gray-100 transition-all font-bold text-sm shadow-sm">
                <Download className="w-4 h-4" />
                Exportar Excel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 space-y-6">
        {/* 1. Barra de Filtros */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Buscar (Brinco/ID)
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Ex: 1042..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none text-sm"
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Raça
            </label>
            <select className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none bg-white text-sm">
              <option>Todas</option>
              <option>Nelore</option>
              <option>Angus</option>
              <option>Brahman</option>
            </select>
          </div>
          <div className="w-full md:w-48">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Status
            </label>
            <select className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none bg-white text-sm">
              <option>Todos</option>
              <option>Ativo</option>
              <option>Vendido</option>
              <option>Em Tratamento</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-[#046d8b] text-white rounded-lg font-bold hover:bg-[#03566d] transition-colors flex items-center justify-center gap-2 shadow-sm w-full md:w-auto h-[38px]">
            <Filter className="w-4 h-4" /> Filtrar
          </button>
        </div>

        {/* 2. Tabela de Animais */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-700">6 Registros Encontrados</h3>
            <span className="text-xs text-gray-500">
              Ordenado por: Último Registro
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    ID / Brinco
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Raça
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Sexo
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Peso
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Lote
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {animals.map((animal) => (
                  <tr
                    key={animal.id}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800">
                          {animal.brinco}
                        </span>
                        <span className="text-xs text-gray-400">
                          {animal.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      {animal.raca}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {animal.sexo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {animal.peso}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {animal.lote}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                          animal.status
                        )}`}
                      >
                        {animal.status}
                      </span>
                      {animal.status === "Em Tratamento" && (
                        <div className="text-[10px] text-red-500 mt-1 font-medium">
                          Motivo: {animal.saude}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-[#046d8b] p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginação Simples */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xs text-gray-500">Mostrando 1-6 de 6</span>
            <div className="flex gap-2">
              <button
                disabled
                className="px-3 py-1 bg-white border border-gray-300 text-gray-400 rounded text-sm cursor-not-allowed"
              >
                Anterior
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 hover:text-[#046d8b]">
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
