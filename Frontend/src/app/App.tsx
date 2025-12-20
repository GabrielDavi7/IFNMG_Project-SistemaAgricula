import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  Wheat,
  DollarSign,
  PawPrint,
  Bug,
  CalendarRange,
  CloudSun,
  Utensils,
  ClipboardList,
  Clock,
  Lock,
} from "lucide-react";

// --- NOVOS IMPORTS DE AUTH ---
import { AuthProvider, useAuth } from "../contexts/LoginScren";
import { Login } from "./components/auth/login";
// -----------------------------

import { SuccessProvider } from "../contexts/SuccessContext";
import { Navigation } from "./components/others/Navigation";
import { Toast, type ToastType } from "./components/others/Toast";
import { Breadcrumbs } from "./components/others/Breadcrumbs";

// --- IMPORTS DOS COMPONENTES ---
import { AnimalsDashboard } from "./components/animals/AnimalsDashboard";
import { RegisterAnimal } from "./components/animals/RegisterAnimal";
import { AnimalReport } from "./components/animals/AnimalReport";
import { CropsDashboard } from "./components/crops/CropsDashboard";
import { RegisterPlanting } from "./components/crops/RegisterPlanting";
import { RegisterHarvest } from "./components/crops/RegisterHarvest";

import { PestsDashboard } from "./components/pests/PestsDashboard";
import { RegisterPest } from "./components/pests/RegisterPest";
import { PestReport } from "./components/pests/PestReport";

import { FinanceDashboard } from "./components/finance/FinanceDashboard";
import { RegisterExpense } from "./components/finance/RegisterExpense";
import { RegisterIncome } from "./components/finance/RegisterIncome";
import { FinancialReport } from "./components/finance/FinancialReport";

import { SeasonalDashboard } from "./components/sazonalproject/SeasonalDashboard";
import { RegisterProject } from "./components/sazonalproject/RegisterProject";

import { ClimateDashboard } from "./components/climate/ClimateDashboard";
import { ConsultClimate } from "./components/climate/ConsultClimate";
import { ClimateReport } from "./components/climate/ClimateReport";

import { DietDashboard } from "./components/diet/DietDashboard";
import { RegisterDiet } from "./components/diet/RegisterDiet";
import { DietReport } from "./components/diet/DietReport";

import { GeneralReport } from "./components/others/GeneralReport";

// --- COMPONENTE HOME ---
interface HomeProps {
  onNavigate: (page: string, restricted?: boolean) => void;
  isAdmin: boolean;
  time: Date;
}

function HomeComponent({ onNavigate, isAdmin, time }: HomeProps) {
  const recentActivities = [
    {
      id: 1,
      cultura: "Soja",
      area: "50",
      tipo: "Plantio",
      data: "15/11/2024",
      local: "Talhão 1",
    },
    {
      id: 2,
      cultura: "Milho",
      area: "30",
      tipo: "Colheita",
      data: "10/11/2024",
      local: "Talhão 2",
    },
    {
      id: 3,
      cultura: "Algodão",
      area: "100",
      tipo: "Praga Detectada",
      data: "12/12/2024",
      local: "Talhão 4",
    },
    {
      id: 4,
      cultura: "Trigo",
      area: "25",
      tipo: "Plantio",
      data: "05/11/2024",
      local: "Talhão 3",
    },
  ];

  const getBadgeStyle = (tipo: string) => {
    switch (tipo) {
      case "Plantio":
        return "bg-green-100 text-green-700 border border-green-200";
      case "Colheita":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Praga Detectada":
        return "bg-red-100 text-red-700 border border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#046d8b] to-[#024a5e] border-b border-gray-200">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="opacity-75 tracking-wider text-xs">
                    ID_FAZENDA:
                  </span>
                  <span className="font-bold">TEST_174624</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight leading-tight">
                Gestão completa para sua <br />
                propriedade rural
              </h1>
              <p className="text-blue-100 text-lg">
                Monitore animais, plantações e finanças em um único lugar.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <div className="flex w-full justify-center items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md text-blue-50 text-sm font-medium shadow-sm">
                <Clock className="w-4 h-4" />
                <span className="tabular-nums">
                  {time.toLocaleTimeString("pt-BR")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex-grow">
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => onNavigate("animals-dashboard")}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left hover:shadow-lg transition-all group border-l-4 cursor-pointer hover:translate-x-1"
            style={{ borderLeftColor: "#046d8b" }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-[#046d8b]/10 shrink-0">
              <PawPrint className="w-7 h-7 text-[#046d8b]" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Animais
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">Gestão do rebanho</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("diet-dashboard")}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left hover:shadow-lg transition-all group border-l-4 cursor-pointer hover:translate-x-1"
            style={{ borderLeftColor: "#0ea5e9" }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-sky-50 shrink-0">
              <Utensils className="w-7 h-7 text-sky-500" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Dieta
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">
                Controle nutricional
              </p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("crops-dashboard")}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left hover:shadow-lg transition-all group border-l-4 cursor-pointer hover:translate-x-1"
            style={{ borderLeftColor: "#93a42a" }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-[#93a42a]/10 shrink-0">
              <Wheat className="w-7 h-7 text-[#93a42a]" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Plantação
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">Safras e colheitas</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("pests-dashboard")}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left hover:shadow-lg transition-all group border-l-4 cursor-pointer hover:translate-x-1"
            style={{ borderLeftColor: "#ef4444" }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-red-50 shrink-0">
              <Bug className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Pragas
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">Monitoramento</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("seasonal-dashboard")}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left hover:shadow-lg transition-all group border-l-4 cursor-pointer hover:translate-x-1"
            style={{ borderLeftColor: "#2fb8ac" }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-[#2fb8ac]/10 shrink-0">
              <CalendarRange className="w-7 h-7 text-[#2fb8ac]" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Sazonais
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">Projetos e ciclos</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("climate-dashboard")}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left hover:shadow-lg transition-all group border-l-4 cursor-pointer hover:translate-x-1"
            style={{ borderLeftColor: "#f59e0b" }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-amber-50 shrink-0">
              <CloudSun className="w-7 h-7 text-amber-500" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Clima
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">Previsão do tempo</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("finance-dashboard", true)}
            className={`relative bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left transition-all group border-l-4 ${
              isAdmin
                ? "hover:shadow-lg cursor-pointer hover:translate-x-1"
                : "cursor-not-allowed opacity-80"
            }`}
            style={{ borderLeftColor: isAdmin ? "#ecbe13" : "#9ca3af" }}
          >
            {!isAdmin && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center z-20 rounded-xl">
                <Lock className="w-6 h-6 text-gray-400" />
              </div>
            )}
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-[#ecbe13]/10 shrink-0">
              <DollarSign className="w-7 h-7 text-[#ecbe13]" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Finanças
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">Fluxo de caixa</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("general-report", true)}
            className={`relative bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center text-left transition-all group border-l-4 ${
              isAdmin
                ? "hover:shadow-lg cursor-pointer hover:translate-x-1"
                : "cursor-not-allowed opacity-80"
            }`}
            style={{ borderLeftColor: isAdmin ? "#374151" : "#9ca3af" }}
          >
            {!isAdmin && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center z-20 rounded-xl">
                <Lock className="w-6 h-6 text-gray-400" />
              </div>
            )}
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform bg-gray-100 shrink-0">
              <ClipboardList className="w-7 h-7 text-gray-700" />
            </div>
            <div>
              <h2 className="text-gray-900 font-bold text-lg leading-tight">
                Geral
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">Relatórios</p>
            </div>
          </button>
        </div>

        {/* TABELA */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Atividades Recentes
          </h3>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Cultura/Item
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Área (ha)
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Tipo
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Data
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Localização
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentActivities.map((activity) => (
                  <tr
                    key={activity.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      {activity.cultura}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{activity.area}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(
                          activity.tipo
                        )}`}
                      >
                        {activity.tipo}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{activity.data}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {activity.local}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Sistema Agrícola IFNMG.
          </p>
        </div>
      </footer>
    </>
  );
}

// ============================================================================
// 2. CONTEÚDO DO APP (PROTEGIDO)
// ============================================================================
function AppContent() {
  // Chama todos os Hooks (useState, useAuth, etc)
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  const [isAdmin, setIsAdmin] = useState(true);
  const [toast, setToast] = useState<{ msg: string; type: ToastType } | null>(
    null
  );
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. DEFINIÇÃO DAS FUNÇÕES
  const getProfessionalUrl = (pageId: string) => {
    switch (pageId) {
      case "home":
        return "/";
      case "animals-dashboard":
        return "/animals";
      case "register-animal":
        return "/animals/register";
      case "animal-report":
        return "/animals/report";
      case "crops-dashboard":
        return "/crops";
      case "register-planting":
        return "/crops/planting";
      case "register-harvest":
        return "/crops/harvest";
      case "crops-report":
        return "/crops/report";
      case "pests-dashboard":
        return "/pests";
      case "register-pest":
        return "/pests/register";
      case "pest-report":
        return "/pests/report";
      case "finance-dashboard":
        return "/finance";
      case "register-income":
        return "/finance/income";
      case "register-expense":
        return "/finance/expense";
      case "financial-report":
        return "/finance/report";
      case "seasonal-dashboard":
        return "/seasonal";
      case "register-project":
        return "/seasonal/new";
      case "climate-dashboard":
        return "/climate";
      case "consult-climate":
        return "/climate/consult";
      case "climate-report":
        return "/climate/history";
      case "diet-dashboard":
        return "/diet";
      case "register-diet":
        return "/diet/register";
      case "diet-report":
        return "/diet/report";
      case "general-report":
        return "/general-report";
      default:
        return "/" + pageId;
    }
  };

  const handleNavigate = (pageId: string, restricted = false) => {
    if (restricted && !isAdmin) {
      showToast("Você precisa ativar o Modo Admin para acessar.", "error");
      return;
    }
    const targetUrl = getProfessionalUrl(pageId);
    navigate(targetUrl);
  };

  const showToast = (msg: string, type: ToastType) => {
    setToast({ msg, type });
  };

  const getCurrentModule = () => {
    if (currentPath.includes("animal")) return "animals";
    if (currentPath.includes("crop")) return "crops";
    if (currentPath.includes("pest")) return "pests";
    if (currentPath.includes("finance")) return "finance";
    if (currentPath.includes("seasonal")) return "seasonal";
    if (currentPath.includes("climate")) return "climate";
    if (currentPath.includes("diet")) return "diet";
    if (currentPath.includes("general")) return "general";
    return "home";
  };

  // O Retorno Condicional
  if (!isAuthenticated) {
    return <Login />;
  }

  // Se passou do login, renderiza o sistema
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navigation
        currentModule={getCurrentModule()}
        onNavigate={(page) => handleNavigate(page)}
        isAdmin={isAdmin}
        onToggleAdmin={() => setIsAdmin(!isAdmin)}
      />

      {toast && (
        <Toast
          message={toast.msg}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {currentPath !== "home" && (
        <Breadcrumbs
          currentPage={currentPath}
          onNavigate={(p) => handleNavigate(p)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <HomeComponent
              onNavigate={handleNavigate}
              isAdmin={isAdmin}
              time={time}
            />
          }
        />

        {/* Animais */}
        <Route
          path="/animals"
          element={<AnimalsDashboard onNavigate={handleNavigate} />}
        />
        <Route
          path="/animals/register"
          element={<RegisterAnimal onNavigate={handleNavigate} />}
        />
        <Route
          path="/animals/report"
          element={<AnimalReport onNavigate={handleNavigate} />}
        />

        {/* Plantação */}
        <Route
          path="/crops"
          element={<CropsDashboard onNavigate={handleNavigate} />}
        />
        <Route
          path="/crops/planting"
          element={<RegisterPlanting onNavigate={handleNavigate} />}
        />
        <Route
          path="/crops/harvest"
          element={<RegisterHarvest onNavigate={handleNavigate} />}
        />

        {/* Pragas */}
        <Route
          path="/pests"
          element={<PestsDashboard onNavigate={handleNavigate} />}
        />
        <Route
          path="/pests/register"
          element={<RegisterPest onNavigate={handleNavigate} />}
        />
        <Route
          path="/pests/report"
          element={<PestReport onNavigate={handleNavigate} />}
        />

        {/* Finanças */}
        <Route
          path="/finance"
          element={<FinanceDashboard onNavigate={handleNavigate} />}
        />
        <Route
          path="/finance/income"
          element={<RegisterIncome onNavigate={handleNavigate} />}
        />
        <Route
          path="/finance/expense"
          element={<RegisterExpense onNavigate={handleNavigate} />}
        />
        <Route
          path="/finance/report"
          element={<FinancialReport onNavigate={handleNavigate} />}
        />

        {/* Outros */}
        <Route
          path="/seasonal"
          element={<SeasonalDashboard onNavigate={handleNavigate} />}
        />
        <Route
          path="/seasonal/new"
          element={<RegisterProject onNavigate={handleNavigate} />}
        />

        <Route
          path="/climate"
          element={<ClimateDashboard onNavigate={handleNavigate} />}
        />
        <Route
          path="/climate/consult"
          element={<ConsultClimate onNavigate={handleNavigate} />}
        />
        <Route
          path="/climate/history"
          element={<ClimateReport onNavigate={handleNavigate} />}
        />

        <Route
          path="/diet"
          element={<DietDashboard onNavigate={handleNavigate} />}
        />
        <Route
          path="/diet/register"
          element={<RegisterDiet onNavigate={handleNavigate} />}
        />
        <Route
          path="/diet/report"
          element={<DietReport onNavigate={handleNavigate} />}
        />

        <Route
          path="/general-report"
          element={<GeneralReport onNavigate={handleNavigate} />}
        />
      </Routes>
    </div>
  );
}

// ============================================================================
// 3. APP PRINCIPAL (PROVIDERS)
// ============================================================================
export default function App() {
  return (
    <AuthProvider>
      <SuccessProvider>
        <AppContent />
      </SuccessProvider>
    </AuthProvider>
  );
}
