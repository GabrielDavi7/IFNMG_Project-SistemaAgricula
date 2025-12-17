import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Breadcrumbs({ currentPage, onNavigate }: BreadcrumbsProps) {
  const pathMap: Record<
    string,
    { label: string; parent?: string; parentLabel?: string }
  > = {
    // Animais
    "animals-dashboard": { label: "Gestão de Animais" },
    "register-animal": {
      label: "Registrar Animal",
      parent: "animals-dashboard",
      parentLabel: "Animais",
    },

    // Plantação
    "crops-dashboard": { label: "Gestão de Plantação" },
    "register-planting": {
      label: "Registrar Plantio",
      parent: "crops-dashboard",
      parentLabel: "Plantação",
    },
    "register-harvest": {
      label: "Registrar Colheita",
      parent: "crops-dashboard",
      parentLabel: "Plantação",
    },

    // Finanças
    "finance-dashboard": { label: "Finanças" },
    "register-income": {
      label: "Registrar Renda",
      parent: "finance-dashboard",
      parentLabel: "Finanças",
    },
    "register-expense": {
      label: "Registrar Despesa",
      parent: "finance-dashboard",
      parentLabel: "Finanças",
    },
    "financial-report": {
      label: "Relatórios",
      parent: "finance-dashboard",
      parentLabel: "Finanças",
    },

    // Pragas
    "pests-dashboard": { label: "Gestão de Pragas" },
    "register-pest": {
      label: "Registrar Ocorrência",
      parent: "pests-dashboard",
      parentLabel: "Pragas",
    },
    "pest-report": {
      label: "Relatórios",
      parent: "pests-dashboard",
      parentLabel: "Pragas",
    },

    // Sazonais
    "seasonal-dashboard": { label: "Projetos Sazonais" },
    "register-project": {
      label: "Novo Projeto",
      parent: "seasonal-dashboard",
      parentLabel: "Projetos",
    },

    // Clima
    "climate-dashboard": { label: "Clima" },
    "consult-climate": {
      label: "Consultar",
      parent: "climate-dashboard",
      parentLabel: "Clima",
    },
    "climate-report": {
      label: "Histórico",
      parent: "climate-dashboard",
      parentLabel: "Clima",
    },

    // Dieta
    "diet-dashboard": { label: "Dieta Animal" },
    "register-diet": {
      label: "Registrar Dieta",
      parent: "diet-dashboard",
      parentLabel: "Dieta",
    },
    "diet-report": {
      label: "Relatórios",
      parent: "diet-dashboard",
      parentLabel: "Dieta",
    },

    // Geral
    "general-report": { label: "Relatório Geral" },
  };

  const current = pathMap[currentPage];

  if (!current || currentPage === "home") return null;

  return (
    <div className="bg-white border-b border-gray-100 py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center text-sm text-gray-500">
        {/* Link Home */}
        <button
          onClick={() => onNavigate("home")}
          className="hover:text-[#046d8b] flex items-center gap-1 transition-colors"
        >
          <Home className="w-4 h-4" />
          Início
        </button>

        {/* Link Pai (Se houver) */}
        {current.parent && (
          <>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
            <button
              onClick={() => onNavigate(current.parent!)}
              className="hover:text-[#046d8b] transition-colors"
            >
              {current.parentLabel}
            </button>
          </>
        )}

        {/* Página Atual */}
        <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
        <span className="font-semibold text-[#046d8b]">{current.label}</span>
      </div>
    </div>
  );
}
