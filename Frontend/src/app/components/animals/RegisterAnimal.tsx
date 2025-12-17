import { useState } from "react";
import {
  ArrowLeft,
  Save,
  Upload,
  CheckCircle2,
  PawPrint,
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
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-500 mb-6 text-sm">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

// --- 2. TELA DE REGISTRO ---
interface RegisterAnimalProps {
  onNavigate: (page: string) => void;
}

export function RegisterAnimal({
  onNavigate,
}: RegisterAnimalProps) {
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
    onNavigate("animals-dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-fade-in">
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Animal Registrado!"
        message="O novo animal foi adicionado ao rebanho com sucesso."
      />

      <button
        onClick={() => onNavigate("animals-dashboard")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para Animais
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cabeçalho Atualizado com Ícone */}
        <div className="px-8 py-6 border-b border-gray-200 bg-[#046d8b]/10">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-[#046d8b] rounded-lg text-white">
              <PawPrint className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Registrar Animal
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-11">
            Preencha os dados para cadastrar um novo animal.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-8 space-y-6">
          {/* Upload de Foto */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors group">
            <div className="bg-gray-100 p-3 rounded-full mb-3 group-hover:bg-[#046d8b]/10 transition-colors">
              <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#046d8b]" />
            </div>
            <span className="text-sm font-medium">
              Clique para enviar uma foto (Opcional)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Identificação (Brinco) *
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none"
                placeholder="Ex: 1452"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Espécie *
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none bg-white cursor-pointer">
                <option>Bovino</option>
                <option>Suíno</option>
                <option>Equino</option>
                <option>Ovino</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Raça
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none"
                placeholder="Ex: Nelore"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nascimento
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none text-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observações
            </label>
            <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#046d8b] outline-none h-24 resize-none"></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
            <button
              type="button"
              onClick={() => onNavigate("animals-dashboard")}
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
                  Salvar Registro
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}