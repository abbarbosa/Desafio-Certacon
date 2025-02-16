import { Button, ButtonLink } from "@/components/button"
import fundo from "../../Assets/bgLogin.png"
import Logo from "../../Assets/logo/logo.svg"
import Link from "next/link"


export default function Cadastro() {
    return (
        <div className="bg-primary-black h-screen flex items-center flex-col justify-center gap-[50px]"
            style={{ backgroundImage: `url(${fundo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <Logo className="h-[77px] w-[334px] " />

            <form className="flex  gap-4 justify-center items-center text-complementary-white font-chillax text-5" action={''}>

                <div className="flex items-center justify-center flex-col gap-5">

                    <div className="flex items-center justify-center gap-5">
                        <div className="gap-5 flex flex-col ">
                            <div className="gap-5 flex">
                                <input
                                    type="text"
                                    placeholder="Primeiro nome"
                                    className="w-[245px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Sobrenome"
                                    className="w-[245px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                    required
                                />
                            </div>

                            <div className=" flex gap-5 flex-col">
                                <input
                                    className="w-[510px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                    type="email"
                                    required
                                    placeholder="Digite seu e-mail"
                                />

                                <input
                                    className="w-[510px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                    type="password"
                                    required
                                    placeholder="Digite sua senha"
                                />
                                <input
                                    className="w-[510px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                    type="password"
                                    required
                                    placeholder="Confirme sua senha"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center flex-col gap-5 ">

                            <input
                                className="w-[510px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                type="text"
                                required
                                placeholder="Rua"
                            />

                            <div className="gap-5 flex w-[510px]">
                                <input
                                    type="number"
                                    placeholder="N°"
                                    className="w-[153px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Cidade"
                                    className="w-[337px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                    required
                                />
                            </div>

                            <input
                                type="number"
                                placeholder="CEP"
                                className="w-[510px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                required
                            />

                            <input
                                type="phone"
                                placeholder="Telefone"
                                className="w-[510px] h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                                required
                            />
                        </div>
                    </div>
                    <Link href={'/dashboard'}>
                        <Button>Criar conta</Button>
                    </Link>
                    <div className="flex">
                        <Link href={'/'}> <ButtonLink>Já tenho conta</ButtonLink></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}