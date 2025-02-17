'use client'

import { StandartTittle, Title } from "@/components/tittles/Index"
import { Button, ExtraButton } from "@/components/button"
import Lottie from "lottie-react"
import chevronAnimation from "../../../Assets/icons/chevron-right.json"
import Link from "next/link"
import fundo from "../../../Assets/image.png"

export default function ProdutoDetalhado() {
    return (
        <div className="h-screen w-full bg-primary-black flex flex-col items-start pl-[150px] gap-5" >

            <div className="items-center flex justify-center gap-5">
                <Link href={"/produtos"}>
                    <ExtraButton className="transition-transform duration-300 transform rotate-180">
                        <Lottie
                            animationData={chevronAnimation}
                            loop={false}
                            style={{ width: 25, height: 25 }}
                        />
                    </ExtraButton>
                </Link>

                <Link href={"/produtos"}>
                    <Title className="text-complementary-white text-[36px]">Produtos</Title>
                </Link>
                <Title className="text-complementary-white text-[36px]"> / Iphone 11 </Title>
            </div>

            <div className="flex items-start justify-center gap-5 mt-10">
                <div
                    className="rounded-[30px] w-[593px] h-[469px] flex"
                    style={{ backgroundImage: `url(${fundo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>

                <div className="flex items-start  flex-col gap-[10px]">
                    <Title className="text-complementary-white">Iphone 11</Title>
                    <StandartTittle className="w-[410px] h-[160px] text-start">lorem ipsum dolor sit amet lorem ipsum dolor sit amet</StandartTittle>
                    <Button className="mt-[10px] mb-[10px]">Editar</Button>
                    <Button className="mt-[10px] mb-[10px]">Excluir</Button>
                </div>
            </div>



        </div>
    )
}