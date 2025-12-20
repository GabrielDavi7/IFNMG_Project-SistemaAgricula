import { useState } from "react";
import { useAuth } from "../../../contexts/LoginScren";
import { Sprout, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";

export function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const success = login(email, password);

    if (!success) {
      setError("Credenciais inválidas");
      setIsLoading(false);
    }
    // Se der sucesso, o App.tsx detecta a mudança de estado e troca a tela na hora.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#046d8b] to-[#024a5e] p-4">
      {/* Efeito de Fundo (Blur) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10 animate-fade-in-up">
        {/* Cabeçalho do Card */}
        <div className="bg-gray-50 px-8 py-8 border-b border-gray-100 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#046d8b]/10 rounded-full mb-4">
            <Sprout className="w-8 h-8 text-[#046d8b]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Bem-vindo de volta
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Acesse o Sistema de Gestão Agrícola
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 flex items-center justify-center animate-pulse">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              E-mail
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ifnmg.edu.br"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#046d8b] focus:border-[#046d8b] outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#046d8b] focus:border-[#046d8b] outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#046d8b] focus:ring-[#046d8b]"
              />
              Lembrar-me
            </label>
            <a
              href="#"
              className="text-[#046d8b] font-semibold hover:underline"
            >
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#046d8b] hover:bg-[#03566d] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#046d8b]/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Acessar Sistema{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="bg-gray-50 py-4 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400">
            © 2025 - Projeto SistemaAgricula
          </p>
        </div>
      </div>
    </div>
  );
}
