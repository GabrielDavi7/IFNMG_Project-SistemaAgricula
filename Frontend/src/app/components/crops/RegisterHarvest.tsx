import { useState } from "react";
import { ArrowLeft, Save, CheckCircle2, Wheat } from "lucide-react";

// --- 1. MODAL DE SUCESSO ---
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

function SuccessModal({ isOpen, onClose, title, message }: SuccessModalProps) {
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
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
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

// --- 2. TELA DE REGISTRO DE COLHEITA ---
interface RegisterHarvestProps {
  onNavigate: (page: string) => void;
}

export function RegisterHarvest({ onNavigate }: RegisterHarvestProps) {
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
    onNavigate("crops-dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-fade-in">
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Colheita Registrada!"
        message="A produção foi adicionada ao estoque com sucesso."
      />

      <button
        onClick={() => onNavigate("crops-dashboard")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para Plantação
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cabeçalho do Card */}
        <div className="px-8 py-6 border-b border-gray-200 bg-[#93a42a]/10">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-[#93a42a] rounded-lg text-white">
              <Wheat className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Registrar Colheita
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-11">
            Informe os dados da produção recolhida no campo.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cultura Colhida *
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#93a42a] focus:border-transparent outline-none cursor-pointer bg-white">
                <option value="">Selecione...</option>
                <option>Soja (Talhão 05)</option>
                <option>Milho (Talhão 02)</option>
                <option>Algodão (Talhão 08)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data da Colheita *
              </label>
              <input
                required
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#93a42a] outline-none text-gray-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Área Colhida (ha) *
              </label>
              <input
                required
                type="number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#93a42a] outline-none"
                placeholder="0.0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Produção Total (Sacas/Ton) *
              </label>
              <input
                required
                type="number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#93a42a] outline-none"
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destino da Produção
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#93a42a] outline-none bg-white">
              <option>Armazenamento Próprio (Silo)</option>
              <option>Venda Imediata</option>
              <option>Cooperativa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observações (Clima, Perdas, etc)
            </label>
            <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#93a42a] outline-none h-24 resize-none"></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
            <button
              type="button"
              onClick={() => onNavigate("crops-dashboard")}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mr-4 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 text-white rounded-lg flex items-center hover:opacity-90 transition-opacity disabled:opacity-50 font-medium shadow-sm"
              style={{ backgroundColor: "#93a42a" }}
            >
              {isLoading ? (
                "Salvando..."
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Colheita
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
