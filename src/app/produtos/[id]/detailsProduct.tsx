"use client";

import { StandartTittle, Title } from "@/components/tittles/Index";
import { Button, ButtonLink, ExtraButton } from "@/components/button";
import Lottie from "lottie-react";
import chevronAnimation from "../../../Assets/icons/chevron-right.json";
import Link from "next/link";
import { Modal } from "@/components/modal";
import { useState } from "react";
import { ProductProps } from "../page";

interface DetailsProductProps {
    produto: ProductProps;
}



export default function DetailsProduct({ produto }: DetailsProductProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondModal, setIsSecondModal] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openSecondModal = () => setIsSecondModal(true);
    const closeSecondModal = () => setIsSecondModal(false);

    return (
        <div className="h-[100%] w-full bg-primary-black flex flex-col items-start pl-[2%] pt-[5%] gap-5">
            <div className="items-center flex flex-col lg:flex-row justify-center gap-2 lg:gap-5 text-center lg:text-left">
                <div className="flex items-center justify-center gap-2 lg:gap-5">
                    <Link href="/produtos">
                        <ExtraButton className="transition-transform duration-300 transform rotate-180">
                            <Lottie
                                animationData={chevronAnimation}
                                loop={false}
                                style={{ width: 25, height: 25 }}
                            />
                        </ExtraButton>
                    </Link>

                    <Link href="/produtos">
                        <Title className="text-complementary-white text-[30px] lg:text-[36px]">Produtos</Title>
                    </Link>
                </div>

                <Title className="text-complementary-white text-[30px] lg:text-[36px]"> / {produto.title} </Title>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-5 mt-10">
                <div className="rounded-[30px] w-full lg:w-[593px] h-[300px] lg:h-[469px] flex">
                    <img
                        src={produto.image}
                        className="rounded-[30px] w-full h-full object-cover"
                        alt={produto.title}
                    />
                </div>

                <div className="flex items-start flex-col gap-[10px] text-center lg:text-start">
                    <Title className="text-complementary-white">{produto.title}</Title>
                    <StandartTittle className="w-full lg:w-[410px] h-auto lg:h-[160px] text-start">
                        {produto.description}
                    </StandartTittle>

                    <div className="flex flex-row gap-5 mt-[10px] mb-[10px]">
                        <Button
                            className="w-full md:w-[250px] md:h-[70px] md:text-[18px] 
                                lg:w-[300px] lg:h-[80px] lg:text-[20px] h-[70px] text-5"
                            onClick={openModal}
                        >
                            Editar
                        </Button>

                        <Button
                            className="w-full md:w-[250px] md:h-[70px] md:text-[18px] 
                                lg:w-[300px] lg:h-[80px] lg:text-[20px] h-[70px] text-5"
                            onClick={openSecondModal}
                        >
                            Excluir
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modal para editar produto */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="w-full h-full items-center justify-center flex flex-col">
                    <form className="flex flex-col gap-4 text-complementary-white w-full max-w-[510px] mx-auto p-4 font-chillax">
                        <input
                            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                            type="text"
                            required
                            placeholder="Nome do produto"
                            defaultValue={produto.title}
                        />

                        <input
                            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                            type="number"
                            required
                            placeholder="Preço"
                            defaultValue={produto.price}
                        />

                        <input
                            className="w-full h-[260px] rounded-[30px] pl-[10px] bg-transparent border border-complementary-white"
                            type="text"
                            required
                            placeholder="Descrição"
                            defaultValue={produto.description}
                        />

                        <Button onClick={closeModal} className="w-full rounded-[30px]">Salvar</Button>
                    </form>
                    <ButtonLink onClick={closeModal}>Cancelar</ButtonLink>
                </div>
            </Modal>

            {/* Modal para excluir produto */}
            <Modal isOpen={isSecondModal} onClose={closeSecondModal}>
                <div className="flex items-center justify-center h-full w-full p-5">
                    <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[400px]">
                        <Title className="text-complementary-white text-center text-lg md:text-2xl">
                            <strong>Deletar produto?</strong>
                        </Title>
                        <div className="flex flex-col items-center gap-4 w-full">
                            <Button
                                className="w-[200px] h-[60px] text-lg"
                                onClick={closeSecondModal}
                            >
                                Confirmar
                            </Button>
                            <ButtonLink
                                className="w-[200px] h-[60px] text-lg"
                                onClick={closeSecondModal}
                            >
                                Cancelar
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
