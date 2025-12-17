import { useState } from "react";
import {
  ArrowLeft,
  Save,
  CalendarRange,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

// --- 1. MODAL DE SUCESSO (Interno) ---
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative z-10 p-6 text-center animate-in zoom-in-95">
        <div className="mx-auto w-16 h-16 bg-[#2fb8ac]/20 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <CheckCircle2 className="w-8 h-8 text-[#2fb8ac]" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-500 mb-6 text-sm">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-3 text-white rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
          style={{ backgroundColor: "#2fb8ac" }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

// --- 2. TELA DE NOVO PROJETO ---
interface RegisterProjectProps {
  onNavigate: (page: string) => void;
}

export function RegisterProject({
  onNavigate,
}: RegisterProjectProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onNavigate("seasonal-dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-fade-in">
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Projeto Criado!"
        message="O planejamento foi salvo e o cronograma iniciado."
      />

      <button
        onClick={() => onNavigate("seasonal-dashboard")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para Projetos
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cabeçalho Teal */}
        <div className="px-8 py-6 border-b border-gray-200 bg-[#2fb8ac]/10">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-[#2fb8ac] rounded-lg text-white">
              <CalendarRange className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Novo Projeto Sazonal
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-11">
            Planeje safras, reformas ou construções.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome do Projeto *
            </label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2fb8ac] outline-none"
              placeholder="Ex: Safra Soja Verão 24/25"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo *
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2fb8ac] outline-none bg-white cursor-pointer">
                <option>Plantio / Safra</option>
                <option>Reforma de Pastagem</option>
                <option>Manutenção de Estrutura</option>
                <option>Construção</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Responsável
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2fb8ac] outline-none"
                placeholder="Nome do Gestor"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data de Início Prevista *
              </label>
              <input
                required
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2fb8ac] outline-none text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data de Término Estimada
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2fb8ac] outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Orçamento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Orçamento Estimado (R$)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="number"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2fb8ac] outline-none"
                placeholder="0,00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição e Metas
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2fb8ac] outline-none h-24 resize-none"
              placeholder="Descreva os objetivos principais deste projeto..."
            ></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
            <button
              type="button"
              onClick={() => onNavigate("seasonal-dashboard")}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mr-4 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 text-white rounded-lg flex items-center hover:opacity-90 transition-opacity disabled:opacity-50 font-medium shadow-md"
              style={{ backgroundColor: "#2fb8ac" }}
            >
              {isLoading ? (
                "Criando..."
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Criar Projeto
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}