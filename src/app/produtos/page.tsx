'use client'

import { Button, ButtonLink, ExtraButton } from "@/components/button";
import { StandartTittle, Title } from "@/components/tittles/Index";
import fundo from "../../Assets/bgLogin.png"
import { useState } from "react";
import { Modal } from "@/components/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Produtos() {

    //para abrir segundo modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const [isSecondModal, setIsSecondModal] = useState(false)
    const openSecondModal = () => setIsSecondModal(true)
    const closeSecondModal = () => setIsSecondModal(false)

    return (
        <div className="bg-primary-black h-screen">
            <div>
               
                <div className="w-[245px] h-[245px] rounded-[30px] bg-complementary-white mx-[20px]"
                    style={{ backgroundImage: `url(${fundo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >

                    <div className="flex flex-col items-start pl-[30px] pt-[15px]">
                        <StandartTittle className="text-complementary-white"><strong>R$1500</strong></StandartTittle>
                        <StandartTittle className="text-complementary-white" >Iphone 11 </StandartTittle>
                    </div>

                    <div className="flex items-end justify-end pt-[100px] pr-[20px] gap-1">
                        <ExtraButton onClick={openModal} className=" w-[44px] h-[44px] rounded-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80"><FontAwesomeIcon icon={faPen} /></ExtraButton>
                        <ExtraButton onClick={openSecondModal} className=" w-[44px] h-[44px] rounded-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80"><FontAwesomeIcon icon={faTrash} /></ExtraButton>
                    </div>


                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <div className="w-full h-full items-center justify-center flex ">
                            <form className="flex-col gap-4 text-complementary-white items-center justify-center flex" action={''}>
                                <input
                                    className="w-[510px] h-[75px] rounded-[30px] font-chillax pl-[10px] bg-transparent border border-complementary-white"
                                    type="text"
                                    required
                                    placeholder="Nome do produto"
                                />

                                <input
                                    className="w-[510px] h-[75px] rounded-[30px] font-chillax pl-[10px] bg-transparent border border-complementary-white"
                                    type="number"
                                    required
                                    placeholder="Preço"
                                />

                                <input
                                    className="w-[510px] h-[260px] rounded-[30px] font-chillax pl-[10px] bg-transparent border border-complementary-white"
                                    type="text"
                                    required
                                    placeholder="Descrição"
                                />


                                <Button onClick={closeModal}>Entrar </Button>
                                <ButtonLink onClick={closeModal}>Cancelar</ButtonLink>

                            </form>
                        </div>
                    </Modal>

                    <Modal isOpen={isSecondModal} onClose={closeSecondModal}>
                        <div className="flex flex-col items-center justify-center h-full gap-5">
                            <Title className="text-complementary-white"><strong>Deletar produto?</strong></Title>
                            <Button onClick={closeSecondModal}>Confirmar</Button>
                            <ButtonLink onClick={closeSecondModal}>Cancelar</ButtonLink>
                        </div>
                    </Modal>
                </div >
            </div>
        </div>
    )
}