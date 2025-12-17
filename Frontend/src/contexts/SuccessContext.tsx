// 👇 CORREÇÃO AQUI: Adicione 'type' antes de ReactNode
import { createContext, useContext, useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

// Modal Visual Interno para evitar dependências circulares
// (Dica: removi o 'any' e coloquei uma tipagem simples para parar de reclamar)
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

function SuccessModal({ isOpen, onClose, title, message }: ModalProps) {
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

interface SuccessContextData {
  showSuccess: (
    title: string,
    message: string,
    onContinue?: () => void
  ) => void;
}

const SuccessContext = createContext({} as SuccessContextData);

export function SuccessProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [onConfirmAction, setOnConfirmAction] = useState<(() => void) | null>(
    null
  );

  const showSuccess = (
    title: string,
    message: string,
    onContinue?: () => void
  ) => {
    setModalContent({ title, message });
    if (onContinue) setOnConfirmAction(() => onContinue);
    else setOnConfirmAction(null);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onConfirmAction) onConfirmAction();
  };

  return (
    <SuccessContext.Provider value={{ showSuccess }}>
      {children}
      <SuccessModal
        isOpen={isOpen}
        onClose={handleClose}
        title={modalContent.title}
        message={modalContent.message}
      />
    </SuccessContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSuccess = () => useContext(SuccessContext);
