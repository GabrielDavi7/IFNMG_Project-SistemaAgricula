import { useState } from "react";
import {
  ArrowLeft,
  Save,
  Upload,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

// Modal Interno
function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
}: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-2xl p-6 text-center w-full max-w-sm relative z-10 animate-in zoom-in-95">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-500 mb-6 text-sm">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export function RegisterIncome({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
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

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 animate-fade-in">
      <SuccessModal
        isOpen={showModal}
        onClose={() => onNavigate("finance-dashboard")}
        title="Receita Registrada!"
        message="O valor foi adicionado ao caixa da fazenda."
      />

      <button
        onClick={() => onNavigate("finance-dashboard")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Voltar para
        Finanças
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 bg-green-50">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-green-600 rounded-lg text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Registrar Entrada (Receita)
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-11">
            Lançamento de vendas, serviços ou aportes.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição da Receita *
            </label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Ex: Venda de 500 sacas de Soja"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor Total (R$) *
              </label>
              <input
                required
                type="number"
                step="0.01"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none font-bold text-green-700"
                placeholder="0,00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data do Recebimento *
              </label>
              <input
                required
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none text-gray-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none bg-white">
                <option>Venda de Safra</option>
                <option>Venda de Animais</option>
                <option>Venda de Leite/Derivados</option>
                <option>Prestação de Serviço</option>
                <option>Outros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Forma de Pagamento
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none bg-white">
                <option>
                  Transferência Bancária (TED/PIX)
                </option>
                <option>Cheque</option>
                <option>Dinheiro</option>
                <option>Boleto</option>
              </select>
            </div>
          </div>

          {/* Upload Comprovante */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-green-50 cursor-pointer transition-colors hover:border-green-200">
            <Upload className="w-8 h-8 mb-2 text-gray-400" />
            <span className="text-sm font-medium">
              Anexar Comprovante / Nota Fiscal
            </span>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => onNavigate("finance-dashboard")}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mr-4 font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 text-white bg-green-600 rounded-lg flex items-center hover:bg-green-700 font-medium shadow-md"
            >
              {isLoading ? (
                "Salvando..."
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" /> Confirmar
                  Entrada
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}