import {
  ArrowLeft,
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react";

interface FinancialReportProps {
  onNavigate: (page: string) => void;
}

export function FinancialReport({
  onNavigate,
}: FinancialReportProps) {
  // DADOS SINCRONIZADOS
  const summary = {
    income: "85.400,00",
    expense: "32.150,00",
    balance: "145.200,00",
    profit: "53.250,00", // (Receita - Despesa)
  };

  return (
    <div className="animate-fade-in pb-12">
      {/* Cabeçalho Dourado */}
      <div className="bg-[#ecbe13] text-white pt-8 pb-12 px-6 shadow-md relative z-0">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("finance-dashboard")}
            className="flex items-center text-white/90 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Voltar para Finanças
          </button>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold drop-shadow-sm">
                Relatório Financeiro Detalhado
              </h1>
              <p className="text-yellow-100 text-sm mt-1">
                Análise de lucratividade e centros de custo.
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all font-bold backdrop-blur-sm">
              <Download className="w-4 h-4" />
              Baixar CSV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 space-y-6">
        {/* Barra de Filtros */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex gap-4 items-center">
          <Filter className="text-gray-400 w-5 h-5 ml-2" />
          <select className="bg-transparent text-sm font-medium text-gray-600 outline-none border-r border-gray-200 pr-4">
            <option>Dezembro 2025</option>
            <option>Novembro 2025</option>
          </select>
          <span className="text-sm text-gray-400">
            Filtrar por:
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-200">
              Tudo
            </button>
            <button className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-green-600 hover:bg-green-50">
              Entradas
            </button>
            <button className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-red-600 hover:bg-red-50">
              Saídas
            </button>
          </div>
        </div>

        {/* Resumo Consolidado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500 font-bold uppercase">
              Total Receitas
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-green-600">
                R$ {summary.income}
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500 font-bold uppercase">
              Total Despesas
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="p-1.5 bg-red-100 rounded-full text-red-600">
                <TrendingDown className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-red-600">
                R$ {summary.expense}
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500 font-bold uppercase">
              Lucro Líquido (Mês)
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="p-1.5 bg-[#ecbe13]/20 rounded-full text-[#ecbe13]">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                R$ {summary.profit}
              </span>
            </div>
          </div>
        </div>

        {/* Tabela Detalhada (Mock) */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h3 className="font-bold text-gray-700 text-sm">
              Detalhamento de Lançamentos
            </h3>
          </div>
          <table className="w-full text-left">
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">
                  Venda de Soja
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Vendas
                </td>
                <td className="px-6 py-4 text-right text-green-600 font-bold">
                  + R$ 45.000,00
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">
                  Manutenção Trator
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Maquinário
                </td>
                <td className="px-6 py-4 text-right text-red-600 font-bold">
                  - R$ 2.500,00
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">
                  Venda de Bezerros
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Animais
                </td>
                <td className="px-6 py-4 text-right text-green-600 font-bold">
                  + R$ 12.800,00
                </td>
              </tr>
              {/* Adicione mais linhas se quiser */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}