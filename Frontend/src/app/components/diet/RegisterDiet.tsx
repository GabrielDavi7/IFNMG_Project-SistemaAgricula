import { useState } from "react";
import {
  ArrowLeft,
  Save,
  Upload,
  CheckCircle2,
  Utensils,
} from "lucide-react";

// --- 1. MODAL DE SUCESSO (AGORA VERDE 🟢) ---
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
      {/* Fundo Escuro */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* Janela */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative z-10 p-6 text-center animate-in zoom-in-95">
        {/* Ícone Verde (Padrão de Sucesso) */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-500 mb-6 text-sm">{message}</p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

// --- 2. TELA DE REGISTRO DE DIETA ---
interface RegisterDietProps {
  onNavigate: (page: string) => void;
}

export function RegisterDiet({
  onNavigate,
}: RegisterDietProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula salvamento
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onNavigate("diet-dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-fade-in">
      {/* Modal de Sucesso (Verde) */}
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Dieta Registrada!"
        message="A distribuição de alimento foi salva no histórico."
      />

      {/* Botão Voltar */}
      <button
        onClick={() => onNavigate("diet-dashboard")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para Dieta Animal
      </button>

      {/* Card Principal */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cabeçalho do Card (Azul - Identidade do Módulo) */}
        <div className="px-8 py-6 border-b border-gray-200 bg-blue-50/50">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-[#046d8b]/10 rounded-lg">
              <Utensils className="w-5 h-5 text-[#046d8b]" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Registrar Alimentação
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-11">
            Informe os detalhes da nutrição fornecida ao
            rebanho.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data da Aplicação *
              </label>
              <input
                required
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] focus:border-transparent outline-none text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora *
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] focus:border-transparent outline-none text-gray-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grupo ou Lote *
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] focus:border-transparent outline-none cursor-pointer bg-white">
                <option value="">Selecione o grupo...</option>
                <option>Lote A (Lactação)</option>
                <option>Lote B (Corte)</option>
                <option>Bezerros</option>
                <option>Animal Individual</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Dieta *
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] focus:border-transparent outline-none cursor-pointer bg-white">
                <option value="">Selecione o tipo...</option>
                <option>Ração Balanceada</option>
                <option>Volumoso (Silagem/Feno)</option>
                <option>Suplemento Mineral</option>
                <option>Sal</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantidade Fornecida (kg) *
            </label>
            <input
              required
              type="number"
              step="0.01"
              placeholder="0.00"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              Total distribuído para o grupo selecionado.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Foto / Comprovante (Opcional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors group">
              <div className="bg-gray-100 p-3 rounded-full mb-2 group-hover:bg-blue-50 transition-colors">
                <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#046d8b]" />
              </div>
              <span className="text-sm font-medium">
                Clique para adicionar imagem
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observações
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none h-24 resize-none"
              placeholder="Detalhes sobre a aceitação do alimento ou sobras..."
            ></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
            <button
              type="button"
              onClick={() => onNavigate("diet-dashboard")}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mr-4 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 text-white rounded-lg flex items-center hover:opacity-90 transition-opacity disabled:opacity-50 font-medium shadow-sm"
              style={{ backgroundColor: "#046d8b" }}
            >
              {isLoading ? (
                "Salvando..."
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Confirmar Registro
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}