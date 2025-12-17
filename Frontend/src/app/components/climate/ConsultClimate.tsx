import { useState } from "react";
import {
  ArrowLeft,
  CloudSun,
  CloudRain,
  Wind,
  Droplets,
  Thermometer,
  Calendar,
  Plus,
} from "lucide-react";

interface ConsultClimateProps {
  onNavigate: (page: string) => void;
}

export function ConsultClimate({
  onNavigate,
}: ConsultClimateProps) {
  // Mock de dados climáticos
  const current = {
    temp: 28,
    condition: "Parcialmente Nublado",
    humidity: "65%",
    wind: "12 km/h",
    rainChance: "30%",
  };

  const forecast = [
    {
      day: "Amanhã",
      temp: "26°",
      icon: CloudRain,
      condition: "Chuva",
      rain: "15mm",
    },
    {
      day: "Quarta",
      temp: "29°",
      icon: CloudSun,
      condition: "Sol e Nuvens",
      rain: "0mm",
    },
    {
      day: "Quinta",
      temp: "31°",
      icon: CloudSun,
      condition: "Ensolarado",
      rain: "0mm",
    },
    {
      day: "Sexta",
      temp: "24°",
      icon: CloudRain,
      condition: "Tempestade",
      rain: "25mm",
    },
  ];

  return (
    <div className="animate-fade-in pb-12">
      {/* CABEÇALHO CLIMÁTICO */}
      <div className="bg-[#f59e0b] text-white pt-8 pb-12 px-6 relative overflow-hidden">
        {/* Detalhe de fundo */}
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <CloudSun className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Voltar ao menu principal
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <CloudSun className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  Gestão Climática
                </h1>
                <p className="text-orange-100 text-sm mt-1">
                  Monitoramento meteorológico da fazenda.
                </p>
              </div>
            </div>

            {/* Botão Registrar Chuva */}
            <button className="flex items-center gap-2 px-5 py-3 bg-white text-[#f59e0b] rounded-xl font-bold shadow-lg hover:bg-orange-50 transition-all transform hover:-translate-y-0.5">
              <Plus className="w-5 h-5" />
              Registrar Chuva (Pluviômetro)
            </button>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        {/* 1. Card Principal (Tempo Agora) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Esquerda: Temperatura Atual */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8 flex flex-col justify-between lg:col-span-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Agora
                </span>
                <h2 className="text-6xl font-bold text-gray-800 mt-4 flex items-start">
                  {current.temp}
                  <span className="text-2xl text-gray-400 mt-2">
                    °C
                  </span>
                </h2>
                <p className="text-xl text-gray-500 font-medium mt-1">
                  {current.condition}
                </p>
              </div>
              <CloudSun className="w-24 h-24 text-[#f59e0b]" />
            </div>

            {/* Detalhes Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    Umidade
                  </p>
                  <p className="font-bold text-gray-700">
                    {current.humidity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Vento</p>
                  <p className="font-bold text-gray-700">
                    {current.wind}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500">
                  <CloudRain className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Chuva</p>
                  <p className="font-bold text-gray-700">
                    {current.rainChance}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direita: Histórico Rápido */}
          <div className="bg-[#f59e0b] rounded-2xl shadow-lg p-6 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Histórico
                Recente
              </h3>
              <p className="text-orange-100 text-sm mt-1">
                Acumulado de chuvas (7 dias)
              </p>
            </div>

            <div className="text-center my-6">
              <span className="text-5xl font-bold">45</span>
              <span className="text-xl opacity-80">mm</span>
            </div>

            <div className="bg-white/20 rounded-lg p-4 text-sm text-orange-50 leading-relaxed">
              "Boa umidade no solo para o plantio de soja no
              Talhão 02. Próxima chuva prevista para
              Sexta-feira."
            </div>
          </div>
        </div>

        {/* 2. Previsão Próximos Dias */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Previsão para a Semana
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {forecast.map((day, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <span className="text-sm font-medium text-gray-500 mb-3">
                {day.day}
              </span>
              <day.icon
                className={`w-10 h-10 mb-2 ${day.rain !== "0mm" ? "text-blue-500" : "text-[#f59e0b]"}`}
              />
              <span className="text-2xl font-bold text-gray-800">
                {day.temp}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {day.condition}
              </span>

              {day.rain !== "0mm" && (
                <span className="mt-3 px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full flex items-center gap-1">
                  <Droplets className="w-3 h-3" /> {day.rain}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}