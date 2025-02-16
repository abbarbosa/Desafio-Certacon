'use client'

import { Button, ButtonLink, ExtraButton } from "@/components/button";
import { Modal } from "@/components/modal";
import { StandartTittle, Title } from "@/components/tittles/Index";
import Lottie from "lottie-react";
import { useState } from "react";
import chevronEdit from "../../Assets/icons/edit.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Perfil() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-primary-black h-screen pl-[120px] pt-[80px]  items-center justify-center flex-col">
            {/* div do nome */}
            <div className="flex items-center justify-start gap-5">
                <Title className="font-semibold text-complementary-white">João Silva</Title>
                <StandartTittle>joaosilva1_</StandartTittle>
                <ExtraButton
                    onClick={openModal}
                    className="hover:scale-110 transition duration-300 rounded-full border-transparent"
                >
                    <Lottie
                        animationData={chevronEdit}
                        loop={true}
                        style={{ width: 25, height: 25, filter: 'invert(100%) brightness(100%)' }}
                    />
                </ExtraButton>
            </div>

            {/* div telefone e e-mail */}
            <div>
                <div className="flex items-center justify-start text-5 gap-10">
                    <FontAwesomeIcon icon={faEnvelope} className="text-complementary-white" />
                    <StandartTittle>joaosilva@gmail.com</StandartTittle>
                </div>
                <div className="flex items-center justify-start text-5 gap-10">
                    <FontAwesomeIcon icon={faPhone} className="text-complementary-white" />
                    <StandartTittle>55+ 11 98765-4321</StandartTittle>
                </div>
            </div>



            <div className="flex items-start justify-start text-5 gap-10 mt-[70px]">
                <div>
                    <FontAwesomeIcon icon={faMap} className="text-complementary-white" />
                </div>

                <div>
                    <StandartTittle> Rua Niterói, 180 - São Caetano do Sul</StandartTittle>
                    <StandartTittle className="text-start"> <strong>09510-200</strong></StandartTittle>
                </div>
            </div>

            <ButtonLink className="mt-[70px]">Encerrar conta</ButtonLink>

            {/* Modal edição */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex justify-center items-center h-full">
                    <form className="flex gap-4 justify-center items-center font-chillax text-complementary-white text-5" action={''}>
                        <div className="flex items-center justify-center flex-col gap-5 bg-transparent">
                            <div className="flex items-center justify-center gap-5">
                                <div className="gap-5 flex flex-col">
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

                                    <div className="flex gap-5 flex-col">
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

                                <div className="flex items-center justify-center flex-col gap-5">
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

                            <Button onClick={closeModal}>Criar conta</Button>

                            <div className="flex">
                                <ButtonLink onClick={closeModal}>Cancelar</ButtonLink>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>

        </div>
    )
}