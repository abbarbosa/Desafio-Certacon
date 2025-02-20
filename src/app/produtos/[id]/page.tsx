'use client'

import { useState, useEffect } from "react";
import { StandartTittle, Title } from "@/components/tittles/Index";
import { Button, ButtonLink, ExtraButton } from "@/components/button";
import Lottie from "lottie-react";
import chevronAnimation from "../../../Assets/icons/chevron-right.json";
import Link from "next/link";
import { Modal } from "@/components/modal";
import { useParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Snackbar, Alert } from "@mui/material";  // Importando o Snackbar e Alert do MUI

export default function ProdutoDetalhado({ params }: { params: { id: string } }) {
    const { id } = useParams();
    const [product, setProduct] = useState<any | null>(null);
    const [isSecondModal, setIsSecondModal] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);  // Estado para o Snackbar
    const [snackbarMessage, setSnackbarMessage] = useState("");  // Mensagem do Snackbar
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");  // Tipo de Snackbar

    const openSecondModal = () => setIsSecondModal(true);
    const closeSecondModal = () => setIsSecondModal(false);

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchParams = async () => {
            if (!params) return;

            const { id } = await params;

            if (!id) return;

            // Pega os produtos armazenados no localStorage
            const storedProducts = localStorage.getItem("products");
            if (storedProducts) {
                const products = JSON.parse(storedProducts);
                const foundProduct = products.find((p: any) => p.id === Number(id));
                setProduct(foundProduct);
            }
        };

        fetchParams();
    }, [params]);

    if (!id) {
        return <p>Produto não encontrado...</p>;
    }

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-white">
                <Title>Produto não encontrado!</Title>
            </div>
        );
    }

    // Função de deletar produto
    const handleDeleteProduct = async () => {
        if (!product) return;

        try {
            const storedProducts = localStorage.getItem("products");
            if (storedProducts) {
                const products = JSON.parse(storedProducts);

                const updatedProducts = products.filter((p: any) => p.id !== product.id);

                saveProducts(updatedProducts);

                closeSecondModal();

                // Exibe o Snackbar de sucesso
                setSnackbarMessage("Produto deletado com sucesso!");
                setSnackbarSeverity("success");
                setOpenSnackbar(true);

                setTimeout(() => {
                    window.location.href = '/produtos';
                }, 1000);
            }

        } catch (error) {
            // Exibe o Snackbar de erro
            setSnackbarMessage("Erro ao deletar o produto. Tente novamente.");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
        }
    };

    const saveProducts = (updatedProducts: any[]) => {
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

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

                <Title className="text-complementary-white text-[30px] lg:text-[36px]"> / {product.title} </Title>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-5 mt-10">
                <div className="rounded-[30px] w-full lg:w-[593px] h-[300px] lg:h-[469px] flex">
                    <img
                        src={product.image}
                        className="rounded-[30px] w-full h-full object-cover"
                        alt={product.title}
                    />
                </div>

                <div className="flex items-start flex-col gap-[10px] text-center lg:text-start">
                    <div className="flex items-center justify-center gap-5">
                        <Title className="text-complementary-white font-bold">{product.title}</Title>
                        <StandartTittle>{product.category}</StandartTittle>
                    </div>
                    <StandartTittle className="w-full lg:w-[410px] h-auto lg:h-[160px] text-start">
                        {product.description}
                    </StandartTittle>
                    <StandartTittle className="w-full text-[48px] text-start">
                        {product.price}
                    </StandartTittle>

                    <div className="flex flex-col gap-5  mb-[10px]">
                        <ButtonLink
                            className=" h-[70px] text-5 gap-[10px] flex items-center"
                            onClick={openSecondModal}
                        > <FontAwesomeIcon icon={faTrash} />
                            Excluir produto
                        </ButtonLink>
                    </div>
                </div>
            </div>

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
                                onClick={handleDeleteProduct}
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

            {/* Snackbar do MUI */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}
