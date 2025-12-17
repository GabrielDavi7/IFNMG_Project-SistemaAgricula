import {
  ArrowLeft,
  Download,
  TrendingUp,
  Wheat,
  PawPrint,
  AlertTriangle,
  DollarSign,
  Calendar,
  ClipboardList,
} from "lucide-react";

interface GeneralReportProps {
  onNavigate: (page: string) => void;
}

export function GeneralReport({
  onNavigate,
}: GeneralReportProps) {
  return (
    <div className="animate-fade-in pb-12">
      {/* Cabeçalho Cinza (Geral) */}
      <div className="bg-[#374151] text-white pt-8 pb-12 px-6 shadow-md relative z-0">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors text-base font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao menu principal
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm">
                <ClipboardList className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Relatório Geral da Fazenda
                </h1>
                <p className="text-gray-300 text-sm mt-1">
                  Visão consolidada de todos os setores e
                  indicadores.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all font-medium text-sm backdrop-blur-sm shadow-sm">
              <Download className="w-4 h-4" />
              Exportar PDF Completo
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card Finanças (Sincronizado) */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <DollarSign className="w-16 h-16 text-[#ecbe13]" />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              Saldo Atual
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              R$ 145.200,00
            </h3>
            <span className="text-xs text-green-600 font-medium flex items-center mt-2 bg-green-50 w-fit px-2 py-1 rounded">
              <TrendingUp className="w-3 h-3 mr-1" /> +12% vs
              mês anterior
            </span>
          </div>

          {/* Card Animais (Sincronizado com o Dashboard de Animais: 142) */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <PawPrint className="w-16 h-16 text-[#046d8b]" />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              Total de Animais
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              142 Cabeças
            </h3>
            <span className="text-xs text-gray-500 mt-2 block">
              110 Saudáveis •{" "}
              <span className="text-yellow-600 font-medium">
                32 Em Tratamento
              </span>
            </span>
          </div>

          {/* Card Plantação */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Wheat className="w-16 h-16 text-[#93a42a]" />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              Área Plantada
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              1.250 ha
            </h3>
            <span className="text-xs text-[#93a42a] font-medium mt-2 block">
              Soja (800ha) • Milho (450ha)
            </span>
          </div>

          {/* Card Alertas */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-16 h-16 text-red-600" />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              Alertas Críticos
            </p>
            <h3 className="text-2xl font-bold text-red-600 mt-1">
              3 Ativos
            </h3>
            <span className="text-xs text-red-600/80 mt-2 block bg-red-50 w-fit px-2 py-1 rounded font-medium">
              2 Pragas • 1 Climático
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna Esquerda: Produção */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="p-1.5 bg-[#93a42a]/10 rounded-lg">
                  <Wheat className="w-5 h-5 text-[#93a42a]" />
                </div>
                Resumo da Safra Atual
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600 text-sm">
                    Soja - Talhão 1
                  </span>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">
                    Plantio (30 dias)
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600 text-sm">
                    Milho - Talhão 3
                  </span>
                  <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-bold">
                    Colheita em Andamento
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-gray-600 text-sm font-medium">
                    Estimativa de Produção
                  </span>
                  <span className="font-bold text-[#93a42a] text-lg">
                    4.500 Ton
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="p-1.5 bg-[#2fb8ac]/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#2fb8ac]" />
                </div>
                Projetos Sazonais Ativos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-sm font-medium text-gray-700">
                    Safra Verão 24/25
                  </span>
                  <span className="text-xs bg-[#2fb8ac20] text-[#0f766e] px-2 py-1 rounded-full font-bold">
                    Em Andamento
                  </span>
                </li>
                <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-sm font-medium text-gray-700">
                    Reforma de Pastagens
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-bold">
                    Planejado
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna Direita: Financeiro (Sincronizado) */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="p-1.5 bg-[#ecbe13]/10 rounded-lg">
                  <DollarSign className="w-5 h-5 text-[#ecbe13]" />
                </div>
                Fluxo de Caixa (30 dias)
              </h3>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600 font-medium">
                      Receitas
                    </span>
                    {/* 👇 VALOR CORRIGIDO: 85.400 */}
                    <span className="font-bold text-green-600">
                      R$ 85.400,00
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full shadow-sm"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600 font-medium">
                      Despesas
                    </span>
                    {/* 👇 VALOR CORRIGIDO: 32.150 */}
                    <span className="font-bold text-red-500">
                      R$ 32.150,00
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-red-500 h-2.5 rounded-full shadow-sm"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50/50 border border-red-100 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Atenção Necessária
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-red-200 flex items-start gap-3 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Praga Detectada: Lagarta
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Talhão 4 • Nível Crítico • Hoje
                    </p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-yellow-200 flex items-start gap-3 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Alerta Climático: Chuvas
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Próximos 3 dias • Risco de erosão
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}