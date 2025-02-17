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

    const [isSecondModal, setIsSecondModal] = useState(false)
    const openSecondModal = () => setIsSecondModal(true)
    const closeSecondModal = () => setIsSecondModal(false)

    return (
        <div className=" bg-primary-black h-screen pl-[5%] flex items-start justify-start flex-col">
            {/* div do nome */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-5 text-start">
                <Title className="font-semibold text-complementary-white">João Silva</Title>
                <StandartTittle className="text-complementary-white">joaosilva1_</StandartTittle>
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
                <div className="flex items-center justify-start text-5 gap-10 mt-[10px]">
                    <FontAwesomeIcon icon={faEnvelope} className="text-complementary-white" />
                    <StandartTittle>joaosilva@gmail.com</StandartTittle>
                </div>
                <div className="flex items-center justify-start text-5 gap-10">
                    <FontAwesomeIcon icon={faPhone} className="text-complementary-white" />
                    <StandartTittle>55+ 11 98765-4321</StandartTittle>
                </div>
            </div>



            <div className="flex items-start justify-start text-5  gap-10 mt-[70px] text-start">

                <div>
                    <FontAwesomeIcon icon={faMap} className="text-complementary-white" />
                </div>

                <div className="items-start justify-start flex flex-col">
                    <StandartTittle className="text-start"> Rua Niterói, 180 - São Caetano do Sul</StandartTittle>
                    <StandartTittle className="text-start"> <strong>09510-200</strong></StandartTittle>
                </div>
            </div>
            <div className="items-start justify-center flex flex-col gap-[10px] mt-[70px]">
                <ButtonLink onClick={openSecondModal}>Sair</ButtonLink>
                <ButtonLink onClick={openSecondModal}>Encerrar conta</ButtonLink>
            </div>

            {/* Modal edição */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex justify-center h-full">
                    <form className="flex flex-col gap-5 w-full text-complementary-white text-[20px] max-h-[80vh] overflow-y-auto">
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

                        <Button onClick={closeModal} className="w-full rounded-[30px]">Salvar</Button>

                        <div className="flex justify-center">
                            <ButtonLink onClick={closeModal}>Já tenho conta</ButtonLink>
                        </div>
                    </form>
                </div>
            </Modal>


            <Modal isOpen={isSecondModal} onClose={closeSecondModal}>
                <div className="flex flex-col items h-full gap-5">
                    <Title className="text-complementary-white"><strong>Deletar conta?</strong></Title>
                    <Link href={'/'}>
                        <Button>Confirmar</Button>
                    </Link>
                    <ButtonLink onClick={closeSecondModal}>Cancelar</ButtonLink>
                </div>
            </Modal>

        </div>
    )
}