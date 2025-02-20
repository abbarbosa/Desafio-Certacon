'use client'
import { useState, useEffect } from "react";
import { Button, ButtonLink, ExtraButton } from "@/components/button";
import { StandartTittle, Title } from "@/components/tittles/Index";
import fundo from "../../Assets/bgLogin.png";
import { Modal } from "@/components/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


//interface com dados do produto
export interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export default function Produtos() {
    const router = useRouter()
    const [isModalAdd, setIsModalAdd] = useState(false);
    const openModalAdd = () => setIsModalAdd(true);
    const closeModalAdd = () => setIsModalAdd(false);

    const [isSecondModal, setIsSecondModal] = useState(false);
    const openSecondModal = () => setIsSecondModal(true);
    const closeSecondModal = () => setIsSecondModal(false);

    const [isUpdateModal, setIsUpdateModal] = useState(false);
    const openUpdateModal = () => setIsUpdateModal(true);
    const closeUpdateModal = () => setIsUpdateModal(false);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productCategory, setProductCategory] = useState("electronic");

    const [products, setProducts] = useState<ProductProps[]>([]);
    const [productToDelete, setProductToDelete] = useState<any | null>(null);
    const [productImageFile, setProductImageFile] = useState<File | null>(null);
    const [productImagePreview, setProductImagePreview] = useState<string | null>(null);
    const [productToEdit, setProductToEdit] = useState<any | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");



    // Redireciona para login se não houver token
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/");
        }
    }, [router]);

    // Carrega categorias da API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((json) => setCategories(json))
            .catch((error) => console.error('Erro ao carregar as categorias:', error));
    }, []);

    // Função para carregar os produtos do localStorage
    const loadProducts = () => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const saveProducts = (updatedProducts: any[]) => {
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProductImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    //função para adicionar produto
    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          const newProduct: ProductProps = {
            id: new Date().getTime(),
            title: productName,
            price: parseFloat(productPrice),
            description: productDescription,
            image: productImagePreview || fundo.src,
            category: productCategory,
          };
      
          const updatedProducts: ProductProps[] = [...products, newProduct];
          setProducts(updatedProducts);
          saveProducts(updatedProducts);
      
          setProductName('');
          setProductPrice('');
          setProductDescription('');
          setProductImageFile(null);
          setProductImagePreview(null);
          setProductCategory('electronic');
          closeModalAdd();
      
          toast.success("Produto adicionado com sucesso!");
      
        } catch (error: any) {
          toast.error("Erro ao adicionar produto. Tente novamente.");
        }
      };
      

    //função para deletar produto
    const handleDeleteProduct = async () => {
        if (!productToDelete) return;
    
        try {
            const updatedProducts = products.filter((product) => product.id !== productToDelete.id);
            setProducts(updatedProducts);
            saveProducts(updatedProducts);
            closeSecondModal();
    
            // Exibindo o toast de sucesso
            toast.success("Produto deletado com sucesso!");
        } catch (error) {
            // Exibindo o toast de erro
            toast.error("Erro ao deletar o produto. Tente novamente.");
        }
    };
    

    //função para atualizar produto
    const handleUpdateProduct = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!productToEdit) return;
    
        try {
            const updatedProduct = {
                ...productToEdit,
                title: productName,
                price: parseFloat(productPrice),
                description: productDescription,
                image: productImagePreview || productToEdit.image,
                category: productCategory,
            };
    
            const updatedProducts = products.map((product) =>
                product.id === productToEdit.id ? updatedProduct : product
            );
            setProducts(updatedProducts);
            saveProducts(updatedProducts);
    
            setProductName('');
            setProductPrice('');
            setProductDescription('');
            setProductImageFile(null);
            setProductImagePreview(null);
            setProductCategory('electronic');
            closeUpdateModal();

            toast.success("Produto atualizado com sucesso!");
        } catch (error: any) {
            toast.error("Erro ao atualizar produto. Tente novamente.");
        }
    };
    

    const handleOpenUpdateModal = (product: any) => {
        setProductToEdit(product);
        setProductName(product.title);
        setProductPrice(product.price.toString());
        setProductDescription(product.description);
        setProductImagePreview(product.image);
        setProductCategory(product.category);
        openUpdateModal();
    };

    // Filtrando os produtos pela categoria
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className="bg-primary-black h-screen pt-[10px]">
            <div className="items-center justify-center w-full flex gap-10">

                <select
                    className="w-1/4 h-[50px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white text-complementary-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Todas as categorias</option>
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))
                    ) : (
                        <option>Carregando...</option>
                    )}
                </select>

                <ExtraButton onClick={openModalAdd}>
                    <FontAwesomeIcon icon={faPlus} />
                </ExtraButton>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5 px-5">
                {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col gap-4 text-complementary-white w-full max-w-[510px] mx-auto p-4 font-chillax 
                        bg-primary-black rounded-[30px] max-h-[80vh] overflow-y-auto"
                        style={{
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex items-center justify-between px-[10px]">
                            <div className="flex flex-col items-start pl-[30px] pt-[15px]">
                                <StandartTittle className="text-complementary-white">
                                    <strong>R${product.price}</strong>
                                </StandartTittle>
                                <StandartTittle className="text-complementary-white">
                                    {product.title.slice(0, 10)}{product.title.length > 10 ? '...' : ''}
                                </StandartTittle>
                            </div>

                            <div className="flex items-center">
                                <Link href={`/produtos/${product.id}`}>
                                    <ExtraButton className="w-[44px] h-[44px] rounded-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 border-transparent">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </ExtraButton>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-end justify-end pt-[100px] pr-[20px] gap-1">
                            <ExtraButton onClick={() => handleOpenUpdateModal(product)} className="w-[44px] h-[44px] rounded-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80">
                                <FontAwesomeIcon icon={faPen} />
                            </ExtraButton>
                            <ExtraButton onClick={() => {
                                setProductToDelete(product);
                                openSecondModal();
                            }} className="w-[44px] h-[44px] rounded-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80">
                                <FontAwesomeIcon icon={faTrash} />
                            </ExtraButton>
                        </div>
                    </div>
                )) : (
                    <p className="text-white">Nenhum produto encontrado.</p>
                )}
            </div>

            {/* Modal para adicionar produto */}
            <Modal isOpen={isModalAdd} onClose={closeModalAdd}>
                <div className="w-full h-full items-center justify-center flex flex-col overflow-y-auto max-h-[100vh]">
                    <form
                        className="flex flex-col gap-4 text-complementary-white w-full max-w-[510px] mx-auto p-4 font-chillax"
                        onSubmit={handleAddProduct}
                    >
                        <input
                            className="w-full h-[70px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white"
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                            placeholder="Nome do produto"
                        />

                        <input
                            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white"
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                            placeholder="Preço"
                        />

                        <input
                            className="w-full h-[260px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white"
                            type="text"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            required
                            placeholder="Descrição"
                        />

                        <input
                            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                        {/* Campo de seleção de categoria */}
                        <select
                            className="w-full h-[50px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white text-complementary-white "
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        >
                            {categories.length > 0 ? (
                                categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))
                            ) : (
                                <option>Carregando...</option>
                            )}
                        </select>
                        <Button type="submit">Salvar</Button>
                    </form>
                    <ButtonLink onClick={closeModalAdd} >Cancelar</ButtonLink>
                </div>
            </Modal>

            {/* Modal de confirmação de exclusão */}
            <Modal isOpen={isSecondModal} onClose={closeSecondModal}>
                <div className="w-full h-full items-center justify-center flex flex-col gap-5">
                    <Title className="text-complementary-white ">
                        <strong>Deletar conta?</strong>
                    </Title>

                    <Button

                        onClick={handleDeleteProduct}
                    >
                        Confirmar
                    </Button>

                    <ButtonLink onClick={closeSecondModal}>Cancelar</ButtonLink>
                </div>
            </Modal>

            {/* Modal de edição de produto */}
            <Modal isOpen={isUpdateModal} onClose={closeUpdateModal}>
                <div className="w-full h-full items-center justify-center flex flex-col overflow-y-auto max-h-[100vh]">
                    <form
                        className="flex flex-col gap-4 text-complementary-white w-full max-w-[510px] mx-auto p-4 font-chillax"
                        onSubmit={handleUpdateProduct}
                    >
                        <input
                            className="w-full h-[70px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white"
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                            placeholder="Nome do produto"
                        />

                        <input
                            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white"
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                            placeholder="Preço"
                        />

                        <input
                            className="w-full h-[260px] rounded-[30px] pl-[10px] bg-primary-black border  border-complementary-white"
                            type="text"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            required
                            placeholder="Descrição"
                        />

                        <input
                            className="w-full h-[75px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                        {/* Campo de seleção de categoria */}
                        <select
                            className="w-full h-[50px] rounded-[30px] pl-[10px] bg-primary-black border border-complementary-white text-complementary-white "
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        >
                            {categories.length > 0 ? (
                                categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))
                            ) : (
                                <option>Carregando...</option>
                            )}
                        </select>

                        <Button className="flex justify-center items-center w-full" type="submit">Salvar</Button>
                    </form>

                    <ButtonLink onClick={closeUpdateModal}>Cancelar</ButtonLink>
                </div>
            </Modal>
        </div>
    );
}
