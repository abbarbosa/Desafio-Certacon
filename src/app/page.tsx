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
      <Logo className="h-[77px] w-[334px]" />

      <form className="flex flex-col gap-4 text-complementary-white" action={''}>
        <input
          className="w-[510px] h-[75px] rounded-[30px] font-chillax pl-[10px] bg-transparent border border-complementary-white"
          type="text"
          required
          placeholder="Digite seu e-mail"
        />

        <input
          className="w-[510px] h-[75px] rounded-[30px] font-chillax pl-[10px] bg-transparent border border-complementary-white"
          type="password"
          required
          placeholder="Digite sua senha"
        />

        <Button>
          <Link href={'/dashboard'}>
            Entrar
          </Link>
        </Button>

      </form>
      <div className="flex">
        <StandartTittle className="font-regular">Não tem uma conta?</StandartTittle><Link href={"/cadastro"}><ButtonLink>Crie uma!</ButtonLink></Link>
      </div>
    </div>
  );
}
