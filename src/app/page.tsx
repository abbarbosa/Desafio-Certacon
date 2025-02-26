'use client'

import { Button, ButtonLink } from "@/components/button";
import Link from "next/link";
import fundo from "../Assets/bgLogin.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Snackbar, Alert } from '@mui/material';
import { StandartTittle } from "@/components/tittles/Index";

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success'); 

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "undefined" && token !== "null") {
      router.push("/dashboard");
    }
  }, [router]);

  // Função de login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData") || '{}');

    if (!username || !password) {
      setSnackbarMessage("Preencha todos os campos");
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Verificando se os dados de login coincidem com os do localStorage
    if (username !== storedUserData.username || password !== storedUserData.password) {
      setSnackbarMessage("Usuário ou senha incorretos");
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setIsLoading(true);

    try {
      const mockToken = "mock_token_example";

      if (!mockToken) {
        throw new Error("Erro ao obter token, tente novamente.");
      }

      localStorage.setItem("token", mockToken);

      setSnackbarMessage("Login realizado com sucesso!");
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      router.push("/dashboard");
    } catch (error: any) {
      setSnackbarMessage(error.message || "Erro ao fazer login");
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div
      className="bg-primary-black min-h-screen flex items-center flex-col justify-center gap-[100px]"
      style={{ backgroundImage: `url(./bgLogin.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
    >

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <img src="./logo.svg" className="h-[77px] w-full mb-8 mx-auto" alt="Logo" />

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 text-complementary-white w-full max-w-[510px] mx-auto p-4 font-chillax"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
          type="text"
          required
          placeholder="Digite seu username"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
          type="password"
          required
          placeholder="Digite sua senha"
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2 text-center mb-[10px]">
        <StandartTittle>
          Não tem uma conta?
        </StandartTittle>
        <span className="font-regular text-5"> </span>
        <Link href={"/cadastro"}>
          <ButtonLink className="text-5">Crie uma!</ButtonLink>
        </Link>
      </div>
    </div>
  );
}
