'use client'

import { Button, ButtonLink } from "@/components/button";
import Link from "next/link";
import fundo from "../../Assets/bgLogin.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Snackbar, Alert } from "@mui/material";
import axios from 'axios';

export default function Cadastro() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const isValidEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  // Função de cadastro 
  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password || !firstName || !lastName || !username) {
      setError("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setSnackbarMessage("Por favor, insira um e-mail válido.");
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    const userData = {
      email,
      username,
      password,
      name: {
        firstname: firstName,
        lastname: lastName
      },
    };

    try {
      const response = await axios.post('https://fakestoreapi.com/users', userData);

      if (response.status === 200) {
        const json = response.data;
        console.log('Cadastro realizado com sucesso:', json);

        if (json.id) {
          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("fullName", `${firstName} ${lastName}`);

          setSnackbarMessage("Cadastro realizado com sucesso!");
          setSnackbarSeverity('success');
          setOpenSnackbar(true);

          router.push('/');
        } else {
          throw new Error("Erro inesperado no cadastro.");
        }
      } else {
        setSnackbarMessage('Erro ao realizar cadastro. Tente novamente.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } catch (error: any) {
      if (error.response) {
        console.error('Erro ao cadastrar:', error.response.data);
        setSnackbarMessage(error.response.data?.message || 'Erro ao realizar cadastro. Tente novamente.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      } else {
        console.error('Erro de rede ou servidor:', error);
        setSnackbarMessage('Erro ao realizar cadastro. Tente novamente.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  <Snackbar
    open={openSnackbar}
    autoHideDuration={3000}
    onClose={handleCloseSnackbar}
  >
    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
      {snackbarMessage}
    </Alert>
  </Snackbar>

  return (
    <div
      className="bg-primary-black min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: `url(./bgLogin.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="w-full max-w-[800px] bg-opacity-70 rounded-[30px] p-8 backdrop-blur-md">
        <img src="./logo.svg" className="h-[77px] w-full mb-8 mx-auto" alt="Logo" />

        <form onSubmit={handleCadastro} className="flex flex-col gap-5 w-full text-complementary-white text-[20px] font-chillax">
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <input
              type="text"
              placeholder="Primeiro nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full md:w-1/2 h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
              required
            />
            <input
              type="text"
              placeholder="Sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full md:w-1/2 h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
            required
          />
          <input
            type="text"
            placeholder="Digite seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
            required
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
            required
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <Button type="submit" className="w-full rounded-[30px]" disabled={loading}>
            {loading ? "Criando conta..." : "Criar conta"}
          </Button>

          <div className="flex justify-center">
            <Link href="/">
              <ButtonLink>Já tenho conta</ButtonLink>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
