import { Button, ButtonLink } from "@/components/button";
import Logo from "../Assets/logo/logo.svg"
import Link from "next/link";
import { StandartTittle } from "@/components/tittles/Index";
import fundo from "../Assets/bgLogin.png"

export default function Home() {


  return (
    <div
      //passando estilizações pelo tailwind e pelo style para adicionar imagem de fundo.
      className="bg-primary-black h-screen flex items-center flex-col justify-center gap-[100px]"
      style={{ backgroundImage: `url(${fundo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Logo className="h-[77px] w-[70%] mt-[10%]" />

      <form className="flex flex-col gap-4 text-complementary-white w-full max-w-[510px] mx-auto p-4" action={''}>
        <input
          className="w-full h-[75px] rounded-[30px] font-chillax pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
          type="text"
          required
          placeholder="Digite seu e-mail"
        />

        <input
          className="w-full h-[75px] rounded-[30px] font-chillax pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
          type="password"
          required
          placeholder="Digite sua senha"
        />

        <Button className="w-full rounded-[30px]">
          <Link href={'/dashboard'}>
            Entrar
          </Link>
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
