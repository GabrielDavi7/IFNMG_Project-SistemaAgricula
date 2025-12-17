import { ArrowLeft, Download } from "lucide-react";

interface DietReportProps {
  onNavigate: (page: string) => void;
}

export function DietReport({ onNavigate }: DietReportProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 animate-fade-in">
       <button
        onClick={() => onNavigate("diet-dashboard")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar
      </button>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Relatório de Dieta (GDA03)</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
          <Download className="w-4 h-4" /> Exportar Relatório
        </button>
      </div>

      {/* Filtros conforme GDA03 (Período, lote, tipo) */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
        <h3 className="font-semibold mb-4 text-gray-800">Filtros de Pesquisa</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           <input type="date" className="px-4 py-2 border rounded-lg" />
           <input type="date" className="px-4 py-2 border rounded-lg" />
           
           <select className="px-4 py-2 border rounded-lg">
             <option>Todos os Lotes</option>
             <option>Lote A</option>
             <option>Lote B</option>
           </select>

           <select className="px-4 py-2 border rounded-lg">
             <option>Todos os Tipos de Dieta</option>
             <option>Ração</option>
             <option>Volumoso</option>
           </select>
        </div>
        <div className="mt-4 flex justify-end">
           <button className="px-6 py-2 bg-[#046d8b] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
             Gerar Relatório
           </button>
        </div>
      </div>

      <div className="bg-white p-12 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">Os dados de consumo nutricional por lote aparecerão aqui.</p>
      </div>
    </div>
  );
}