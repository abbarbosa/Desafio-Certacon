import { Button, ButtonLink } from "@/components/button"
import fundo from "../../Assets/bgLogin.png"
import Logo from "../../Assets/logo/logo.svg"
import Link from "next/link"

export default function Cadastro() {
    return (
        <div
            className="bg-primary-black min-h-screen flex items-center justify-center px-4 "
            style={{ backgroundImage: `url(${fundo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="w-full max-w-[800px] bg-opacity-70 rounded-[30px] p-8 backdrop-blur-md">
                <Logo className="h-[77px] w-full mb-8 mx-auto" />

                <form className="flex flex-col gap-5 w-full text-complementary-white font-chillax text-[20px]">

                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <input
                            type="text"
                            placeholder="Primeiro nome"
                            className="w-full md:w-1/2 h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Sobrenome"
                            className="w-full md:w-1/2 h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                            required
                        />
                    </div>

                    <input
                        className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                        type="email"
                        required
                        placeholder="Digite seu e-mail"
                    />

                    <input
                        className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                        type="password"
                        required
                        placeholder="Digite sua senha"
                    />

                    <input
                        className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                        type="password"
                        required
                        placeholder="Confirme sua senha"
                    />

                    <input
                        className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                        type="text"
                        required
                        placeholder="Digite seu username"
                    />

                    <input
                        className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                        type="text"
                        required
                        placeholder="Rua"
                    />

                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <input
                            type="number"
                            placeholder="N°"
                            className="w-full md:w-1/3 h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            className="w-full md:w-2/3 h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                            required
                        />
                    </div>

                    <input
                        type="number"
                        placeholder="CEP"
                        className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Telefone"
                        className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white focus:outline-none focus:border-primary-blue transition duration-300"
                        required
                    />

                    <Link href="/dashboard">
                        <Button className="w-full rounded-[30px]"
                        >Criar conta</Button>
                    </Link>

                    <div className="flex justify-center">
                        <Link href="/">
                            <ButtonLink>Já tenho conta</ButtonLink>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
