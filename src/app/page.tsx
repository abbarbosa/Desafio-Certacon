'use client'

import { Button, ButtonLink } from "@/components/button";
import Link from "next/link";
import fundo from "../Assets/bgLogin.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { StandartTittle } from "@/components/tittles/Index";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();


  //verificação se está logado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  //função de login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_" 
        })
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          if (json.token) {
            localStorage.setItem("token", json.token);
            localStorage.setItem("name", json.name);
            router.push("/dashboard"); 
          }
        })

        .catch(error => console.error('Erro:', error)); 
    } catch (error: any) {
      setError(error.message); 
    }
  };

  return (
    <div
      className="bg-primary-black h-screen flex items-center flex-col justify-center gap-[100px]"
      style={{ backgroundImage: `url(${fundo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
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
          placeholder="Digite seu user"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
          type="password"
          required
          placeholder="Digite sua senha"
        />

        <Button type="submit" className="w-full rounded-[30px]">
          Entrar
        </Button>
      </form>


      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center">
        <StandartTittle className="font-regular text-5">Não tem uma conta? </StandartTittle>
        <Link href={"/cadastro"}>
          <ButtonLink className="text-5">Crie uma!</ButtonLink>
        </Link>
      </div>
    </div>

  );
}
