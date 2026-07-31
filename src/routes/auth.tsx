import { useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { EttLogo } from "@/components/EttLogo";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Acesso administrativo — ETT" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setBusy(true);
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setError(error.message);
      navigate({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setBusy(false);
      if (error) return setError(error.message);
      setNotice("Conta criada. Faça login abaixo.");
      setMode("login");
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfbf8] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <EttLogo />
          <Link to="/" className="text-sm text-slate-500 hover:text-[#1a5f2a]">
            ← Início
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          {mode === "login" ? "Entrar" : "Criar conta"}
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Área restrita ao proponente do sistema ETT.
        </p>

        <form onSubmit={submit} className="mt-6 grid gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a5f2a]"
          />
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha (mín. 8 caracteres)"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a5f2a]"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          {notice && <p className="text-sm text-emerald-700">{notice}</p>}
          <button
            type="submit"
            disabled={busy}
            className="rounded-lg bg-[#1a5f2a] text-white font-semibold py-3 hover:bg-[#164f23] disabled:opacity-60"
          >
            {busy ? "..." : mode === "login" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <button
          onClick={() => {
            setError(null);
            setNotice(null);
            setMode(mode === "login" ? "signup" : "login");
          }}
          className="mt-4 w-full text-sm text-slate-500 hover:text-[#1a5f2a]"
        >
          {mode === "login"
            ? "Primeiro acesso? Criar conta"
            : "Já tenho conta — entrar"}
        </button>
      </div>
    </div>
  );
}
