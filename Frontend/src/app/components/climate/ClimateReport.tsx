import {
  ArrowLeft,
  Calendar,
  Download,
  Filter,
  CloudRain,
  Thermometer,
  Droplets,
  CloudSun,
  Sun,
  Wind,
} from "lucide-react";

interface ClimateReportProps {
  onNavigate: (page: string) => void;
}

export function ClimateReport({
  onNavigate,
}: ClimateReportProps) {
  // Mock de dados históricos
  const historyData = [
    {
      id: 1,
      date: "15/12/2025",
      condition: "Chuva",
      min: 22,
      max: 28,
      rain: "12mm",
      humidity: "78%",
      wind: "15km/h",
    },
    {
      id: 2,
      date: "14/12/2025",
      condition: "Nublado",
      min: 21,
      max: 29,
      rain: "0mm",
      humidity: "65%",
      wind: "12km/h",
    },
    {
      id: 3,
      date: "13/12/2025",
      condition: "Sol",
      min: 20,
      max: 32,
      rain: "0mm",
      humidity: "50%",
      wind: "10km/h",
    },
    {
      id: 4,
      date: "12/12/2025",
      condition: "Tempestade",
      min: 19,
      max: 25,
      rain: "35mm",
      humidity: "85%",
      wind: "22km/h",
    },
    {
      id: 5,
      date: "11/12/2025",
      condition: "Sol",
      min: 21,
      max: 31,
      rain: "0mm",
      humidity: "55%",
      wind: "11km/h",
    },
  ];

  const getConditionIcon = (condition: string) => {
    switch (condition) {
      case "Chuva":
        return <CloudRain className="w-5 h-5 text-blue-500" />;
      case "Tempestade":
        return (
          <CloudRain className="w-5 h-5 text-purple-600" />
        );
      case "Sol":
        return <Sun className="w-5 h-5 text-orange-500" />;
      default:
        return <CloudSun className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="animate-fade-in pb-12">
      {/* --- CABEÇALHO (Laranja - Tema Clima) --- */}
      <div className="bg-[#f59e0b] text-white pt-8 pb-12 px-6 shadow-md relative z-0">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate("climate-dashboard")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Voltar para Gestão Climática
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Histórico Climático
                </h1>
                <p className="text-orange-100 text-sm mt-1">
                  Análise de dados meteorológicos registrados na
                  fazenda.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all font-medium text-sm backdrop-blur-sm shadow-sm">
              <Download className="w-4 h-4" />
              Exportar Relatório (CSV)
            </button>
          </div>
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 space-y-6">
        {/* 1. Filtros */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Período Inicial
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f59e0b] outline-none text-gray-600"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Período Final
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f59e0b] outline-none text-gray-600"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
              Local de Coleta
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f59e0b] outline-none bg-white">
              <option>Sede Principal</option>
              <option>Talhão 04 (Remoto)</option>
            </select>
          </div>
          <button className="px-6 py-2.5 bg-[#f59e0b] text-white rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-sm w-full md:w-auto">
            <Filter className="w-4 h-4" /> Filtrar
          </button>
        </div>

        {/* 2. Cards de Resumo (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Chuva Acumulada
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                47mm
              </h3>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                Dentro do esperado
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full text-blue-500">
              <CloudRain className="w-8 h-8" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Temp. Média
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                26°C
              </h3>
              <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
                Pico de 32°C
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-full text-orange-500">
              <Thermometer className="w-8 h-8" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Umidade Média
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                65%
              </h3>
              <p className="text-xs text-blue-600 mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                Ideal para Plantio
              </p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-full text-indigo-500">
              <Droplets className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* 3. Tabela Detalhada */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-700">
              Registros Diários
            </h3>
            <span className="text-xs text-gray-500">
              Últimos 5 dias
            </span>
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Data
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Condição
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Temp (Min/Max)
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Precipitação
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Umidade
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                  Vento
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {historyData.map((day) => (
                <tr
                  key={day.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {day.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      {getConditionIcon(day.condition)}
                      {day.condition}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="text-blue-600 font-bold">
                      {day.min}°
                    </span>{" "}
                    /{" "}
                    <span className="text-red-500 font-bold">
                      {day.max}°
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${day.rain === "0mm" ? "bg-gray-100 text-gray-500" : "bg-blue-100 text-blue-700"}`}
                    >
                      {day.rain}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {day.humidity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-1">
                    <Wind className="w-4 h-4 text-gray-400" />{" "}
                    {day.wind}
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