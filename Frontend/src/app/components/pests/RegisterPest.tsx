import { useState } from "react";
import {
  ArrowLeft,
  Save,
  Upload,
  CheckCircle2,
  Bug,
  AlertTriangle,
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
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <CheckCircle2 className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-500 mb-6 text-sm">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

// --- 2. TELA DE REGISTRO DE PRAGAS ---
interface RegisterPestProps {
  onNavigate: (page: string) => void;
}

export function RegisterPest({
  onNavigate,
}: RegisterPestProps) {
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
    onNavigate("pests-dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-fade-in">
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Ocorrência Registrada!"
        message="O alerta de praga foi emitido para a equipe de controle."
      />

      <button
        onClick={() => onNavigate("pests-dashboard")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para Gestão de Pragas
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cabeçalho Vermelho (Alerta) */}
        <div className="px-8 py-6 border-b border-gray-200 bg-red-50">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-red-500 rounded-lg text-white">
              <Bug className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Registrar Ocorrência
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-11">
            Informe a detecção de pragas ou doenças na lavoura.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Praga / Doença Identificada *
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Ex: Lagarta do Cartucho"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nível de Infestação *
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none bg-white cursor-pointer">
                <option>Baixo (Monitorar)</option>
                <option>Médio (Atenção)</option>
                <option className="text-red-600 font-bold">
                  Crítico (Ação Imediata)
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localização (Talhão) *
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Ex: Talhão 04 - Borda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data da Observação *
              </label>
              <input
                required
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Upload de Foto da Praga */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Foto da Ocorrência (Opcional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-red-50 hover:border-red-200 cursor-pointer transition-colors group">
              <Upload className="w-8 h-8 mb-2 text-gray-400 group-hover:text-red-500" />
              <span className="text-sm font-medium">
                Clique para enviar foto
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ação Recomendada
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none h-24 resize-none"
              placeholder="Ex: Aplicar defensivo X em até 2 dias..."
            ></textarea>
          </div>

          {/* Alerta Visual */}
          <div className="bg-yellow-50 p-4 rounded-lg flex gap-3 border border-yellow-200">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
            <p className="text-sm text-yellow-800">
              Ao registrar nível <strong>Crítico</strong>, um
              alerta será enviado automaticamente para o
              agrônomo responsável.
            </p>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
            <button
              type="button"
              onClick={() => onNavigate("pests-dashboard")}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mr-4 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 text-white rounded-lg flex items-center hover:opacity-90 transition-opacity disabled:opacity-50 font-medium shadow-md bg-red-600"
            >
              {isLoading ? (
                "Salvando..."
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Registrar Ocorrência
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}