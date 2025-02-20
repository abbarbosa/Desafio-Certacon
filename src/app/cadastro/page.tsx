'use client'

import { Button, ButtonLink } from "@/components/button";
import Link from "next/link";
import fundo from "../../Assets/bgLogin.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Cadastro() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Função de cadastro 
  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password || !firstName || !lastName || !username) {
      setError("Preencha todos os campos obrigatórios.");
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
      const response = await fetch('https://fakestoreapi.com/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const json = await response.json();
        console.log('Cadastro realizado com sucesso:', json);

        if (json.id) {
          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("fullName", `${firstName} ${lastName}`);

          toast.success("Cadastro realizado com sucesso!");
          router.push('/'); 
        } else {
          throw new Error("Erro inesperado no cadastro.");
        }
      } else {
        const errorData = await response.json();
        console.error('Erro ao cadastrar:', errorData);
        setError('Erro ao realizar cadastro. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setError('Erro ao realizar cadastro. Tente novamente.');
    } finally {
      setLoading(false);
    }
};


  return (
    <div
      className="bg-primary-black min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${fundo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
