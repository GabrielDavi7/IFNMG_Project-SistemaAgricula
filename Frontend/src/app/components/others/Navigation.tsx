import { useState } from "react";
import {
  Home,
  Wheat,
  DollarSign,
  PawPrint,
  Bug,
  CalendarRange,
  CloudSun,
  Utensils,
  ClipboardList,
  Sprout,
  Lock,
  ShieldCheck,
  X,
  Info,
  CheckCircle2,
  Bell,
  Droplets,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../../contexts/LoginScren";

interface NavigationProps {
  currentModule: string;
  onNavigate: (page: string) => void;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export function Navigation({
  currentModule,
  onNavigate,
  isAdmin,
  onToggleAdmin,
}: NavigationProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const { logout } = useAuth();

  const modules = [
    {
      id: "animals",
      label: "Animais",
      icon: PawPrint,
      page: "animals-dashboard",
      color: "#024a5e",
    },
    {
      id: "diet",
      label: "Dieta",
      icon: Utensils,
      page: "diet-dashboard",
      color: "#046d8b",
    },
    {
      id: "crops",
      label: "Plantação",
      icon: Wheat,
      page: "crops-dashboard",
      color: "#93a42a",
    },
    {
      id: "pests",
      label: "Pragas",
      icon: Bug,
      page: "pests-dashboard",
      color: "#722F37",
    },
    {
      id: "seasonal",
      label: "Sazonais",
      icon: CalendarRange,
      page: "seasonal-dashboard",
      color: "#2fb8ac",
    },
    {
      id: "climate",
      label: "Clima",
      icon: CloudSun,
      page: "climate-dashboard",
      color: "#b86e14",
    },
    {
      id: "finance",
      label: "Finanças",
      icon: DollarSign,
      page: "finance-dashboard",
      color: "#ecbe13",
      restricted: true,
    },
    {
      id: "general",
      label: "Geral",
      icon: ClipboardList,
      page: "general-report",
      color: "#374151",
      restricted: true,
    },
  ];

  const isHomeActive = currentModule === "home";

  const notifications = [
    {
      id: 1,
      title: "Alerta de Praga",
      desc: "Lagarta detectada no Talhão 4.",
      icon: Bug,
      color: "text-red-500",
      bg: "bg-red-50",
      time: "2h atrás",
    },
    {
      id: 2,
      title: "Vacinação Pendente",
      desc: "Lote B precisa de reforço aftosa.",
      icon: PawPrint,
      color: "text-blue-500",
      bg: "bg-blue-50",
      time: "5h atrás",
    },
    {
      id: 3,
      title: "Previsão de Chuva",
      desc: "Chuva forte prevista para amanhã.",
      icon: Droplets,
      color: "text-blue-400",
      bg: "bg-blue-50",
      time: "1d atrás",
    },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center shrink-0">
              {/* Botão Sobre (Logo) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 group focus:outline-none mr-4 lg:mr-8"
              >
                <div className="bg-gradient-to-br from-[#046d8b] to-[#024a5e] p-2 rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col items-start -space-y-1 hidden xl:flex">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-0.5">
                    Gestão
                  </span>
                  <span className="text-xl font-bold text-gray-800 tracking-tight whitespace-nowrap group-hover:text-[#046d8b] transition-colors">
                    Sistema <span className="text-[#046d8b]">Agrícola</span>
                  </span>
                </div>
              </button>

              {/* Botão Início */}
              <button
                onClick={() => onNavigate("home")}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all cursor-pointer font-semibold mr-2 lg:mr-4 ${
                  isHomeActive
                    ? "bg-[#046d8b] text-white shadow-md hover:bg-[#03566d]"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="hidden lg:inline">Início</span>
              </button>

              {/* Botão Admin */}
              <button
                onClick={onToggleAdmin}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer mr-4 ${
                  isAdmin
                    ? "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                    : "bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >
                {isAdmin ? (
                  <>
                    <ShieldCheck className="w-3 h-3" />{" "}
                    <span className="hidden md:inline">ADMIN ATIVO</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3 h-3" />{" "}
                    <span className="hidden md:inline">MODO USUÁRIO</span>
                  </>
                )}
              </button>

              {/* Sino */}
              <div className="relative">
                <button
                  onClick={() => setIsNotifOpen(!isNotifOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors relative cursor-pointer text-gray-500 hover:text-[#046d8b]"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                {isNotifOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsNotifOpen(false)}
                    ></div>
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-left">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-sm">
                          Notificações
                        </h3>
                        <span className="text-xs bg-[#046d8b]/10 text-[#046d8b] px-2 py-0.5 rounded-full font-medium">
                          3 novas
                        </span>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 flex gap-3 items-start"
                          >
                            <div
                              className={`p-2 rounded-full ${notif.bg} shrink-0`}
                            >
                              <notif.icon
                                className={`w-4 h-4 ${notif.color}`}
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-800">
                                {notif.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {notif.desc}
                              </p>
                              <p className="text-[10px] text-gray-400 mt-1">
                                {notif.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-100">
                        <button className="text-xs font-medium text-[#046d8b] hover:underline">
                          Marcar todas como lidas
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Lista de Módulos + Botão Sair */}
            <div className="flex flex-1 items-center justify-end gap-1 ml-4 overflow-x-auto scrollbar-hide">
              {modules.map((module) => {
                const Icon = module.icon;
                const isActive = currentModule === module.id;
                const isLocked = module.restricted && !isAdmin;

                return (
                  <button
                    key={module.id}
                    disabled={isLocked}
                    onClick={() => onNavigate(module.page)}
                    className={`px-3 py-2 rounded-lg flex items-center gap-2 transition-all whitespace-nowrap group relative ${
                      isActive ? "" : "hover:bg-gray-100"
                    } ${
                      isLocked
                        ? "opacity-50 cursor-not-allowed grayscale"
                        : "cursor-pointer"
                    }`}
                    style={{
                      backgroundColor: isActive
                        ? `${module.color || "#046d8b"}15`
                        : undefined,
                      color: isActive ? module.color || "#046d8b" : "#6b7280",
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{module.label}</span>
                    {isLocked && (
                      <Lock className="w-3 h-3 ml-1 text-gray-400" />
                    )}
                  </button>
                );
              })}

              {/*BOTÃO SAIR (Separador + Botão) */}
              <div className="h-6 w-px bg-gray-300 mx-2"></div>

              <button
                onClick={logout}
                className="px-3 py-2 rounded-lg flex items-center gap-2 transition-all whitespace-nowrap hover:bg-red-50 text-gray-500 hover:text-red-600 cursor-pointer"
                title="Sair do Sistema"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Sobre */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in scale-100 transform transition-all">
            <div className="bg-[#046d8b] p-6 flex justify-between items-start">
              <div className="flex gap-3">
                <div className="bg-white/20 p-2 rounded-lg h-fit">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Sobre o Sistema
                  </h2>
                  <p className="text-blue-100 text-sm mt-1">
                    Versão 0.1.1 (Frontend Up, Git Add)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>
                  Este software foi desenvolvido com o objetivo de centralizar e
                  facilitar a gestão de propriedades rurais de médio e grande
                  porte.
                </p>
                <p>
                  Ele permite o monitoramento em tempo real de rebanhos,
                  plantações, controle de pragas e fluxo financeiro.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Desenvolvimento
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#046d8b]" />
                    Projeto Acadêmico
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#046d8b]" />
                    Ciência da Computação - <strong>IFNMG</strong>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 bg-[#046d8b] text-white rounded-xl font-medium hover:bg-[#03566d] transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
