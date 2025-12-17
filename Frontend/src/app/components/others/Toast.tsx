import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success:
      "bg-white border-l-4 border-green-500 text-gray-800",
    error: "bg-white border-l-4 border-red-500 text-gray-800",
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
  };

  return (
    <div
      className={`fixed top-24 right-6 z-50 shadow-lg rounded-lg p-4 flex items-center gap-3 min-w-[300px] animate-slide-in ${styles[type]}`}
    >
      {icons[type]}
      <span className="flex-1 font-medium text-sm">
        {message}
      </span>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}