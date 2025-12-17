import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Plus,
  Minus,
  PieChart,
  Wallet,
} from "lucide-react";

interface FinanceDashboardProps {
  onNavigate: (page: string) => void;
}

export function FinanceDashboard({
  onNavigate,
}: FinanceDashboardProps) {
  // Mock de Movimentações
  const transactions = [
    {
      id: 1,
      desc: "Venda de Soja (Saca 60kg)",
      type: "income",
      date: "15/12/2025",
      category: "Vendas",
      value: "R$ 45.000,00",
    },
    {
      id: 2,
      desc: "Manutenção Trator John Deere",
      type: "expense",
      date: "14/12/2025",
      category: "Maquinário",
      value: "R$ 2.500,00",
    },
    {
      id: 3,
      desc: "Compra de Vacina Aftosa",
      type: "expense",
      date: "12/12/2025",
      category: "Insumos",
      value: "R$ 1.200,00",
    },
    {
      id: 4,
      desc: "Venda de Bezerros (Lote C)",
      type: "income",
      date: "10/12/2025",
      category: "Animais",
      value: "R$ 12.800,00",
    },
    {
      id: 5,
      desc: "Pagamento Funcionários",
      type: "expense",
      date: "05/12/2025",
      category: "Mão de Obra",
      value: "R$ 8.000,00",
    },
  ];

  return (
    <div className="animate-fade-in pb-12">
      {/* --- CABEÇALHO FINANCEIRO --- */}
      <div className="bg-[#ecbe13] text-white pt-8 pb-16 px-6 relative overflow-hidden shadow-lg">
        {/* Efeito de fundo (Moedas) */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <DollarSign className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center text-white/90 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Voltar ao menu principal
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-sm">
                  Controle Financeiro
                </h1>
                <p className="text-yellow-50 text-sm mt-1">
                  Fluxo de caixa e gestão de custos.
                </p>
              </div>
            </div>

            {/* Botão de Relatório Completo */}
            <button
              onClick={() => onNavigate("financial-report")}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg font-bold backdrop-blur-sm transition-all border border-white/40"
            >
              <PieChart className="w-5 h-5" />
              Relatórios Avançados
            </button>
          </div>
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 space-y-8">
        {/* 1. Cards de Resumo (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Saldo Total */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                Saldo em Caixa
              </p>
              <div className="p-2 bg-yellow-50 rounded-lg text-[#ecbe13]">
                <Wallet className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                R$ 145.200,00
              </h3>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +12%
                este mês
              </p>
            </div>
          </div>

          {/* Entradas (Receitas) */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between h-40 relative overflow-hidden group cursor-pointer hover:border-green-200 transition-colors">
            <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp className="w-24 h-24 text-green-500" />
            </div>
            <div className="flex justify-between items-start">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                Receitas (Mês)
              </p>
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600">
                R$ 85.400,00
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                45 lançamentos
              </p>
            </div>
          </div>

          {/* Saídas (Despesas) */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between h-40 relative overflow-hidden group cursor-pointer hover:border-red-200 transition-colors">
            <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingDown className="w-24 h-24 text-red-500" />
            </div>
            <div className="flex justify-between items-start">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                Despesas (Mês)
              </p>
              <div className="p-2 bg-red-50 rounded-lg text-red-600">
                <TrendingDown className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">
                R$ 32.150,00
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                12 lançamentos
              </p>
            </div>
          </div>
        </div>

        {/* 2. Ações Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate("register-income")}
            className="flex items-center justify-center gap-3 p-4 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition-all font-bold transform hover:-translate-y-0.5"
          >
            <div className="bg-white/20 p-1.5 rounded-full">
              <Plus className="w-5 h-5" />
            </div>
            Registrar Entrada (Venda)
          </button>

          <button
            onClick={() => onNavigate("register-expense")}
            className="flex items-center justify-center gap-3 p-4 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition-all font-bold transform hover:-translate-y-0.5"
          >
            <div className="bg-white/20 p-1.5 rounded-full">
              <Minus className="w-5 h-5" />
            </div>
            Registrar Saída (Despesa)
          </button>
        </div>

        {/* 3. Tabela de Extrato */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Movimentações Recentes
            </h3>
            <button className="text-sm text-[#ecbe13] font-bold hover:underline">
              Ver Extrato Completo
            </button>
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Descrição
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Categoria
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Data
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((t) => (
                <tr
                  key={t.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${t.type === "income" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                      >
                        {t.type === "income" ? (
                          <ArrowLeft className="w-4 h-4 rotate-45" />
                        ) : (
                          <ArrowLeft className="w-4 h-4 -rotate-[135deg]" />
                        )}
                      </div>
                      <span className="font-medium text-gray-900">
                        {t.desc}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="px-2 py-1 rounded bg-gray-100 border border-gray-200 text-xs font-medium">
                      {t.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {t.date}
                  </td>
                  <td
                    className={`px-6 py-4 text-right font-bold ${t.type === "income" ? "text-green-600" : "text-red-600"}`}
                  >
                    {t.type === "income" ? "+" : "-"} {t.value}
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