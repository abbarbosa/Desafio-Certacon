import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { StandartTittle } from "../tittles/Index";

// Defina o tipo do dado que será armazenado no estado
interface ChartData {
    name: string;
    valor: number;
}

export const BarGraphic = () => {
    // Defina o tipo de estado
    const [data, setData] = useState<ChartData[]>([]);
    const [categories, setCategories] = useState<string[]>([]);  // Estado para categorias
    const [products, setProducts] = useState<any[]>([]); // Estado para os produtos

    // Função para buscar os dados de produtos e categorias
    useEffect(() => {
        // Buscar categorias
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((categoryData) => {
                setCategories(categoryData);
            })
            .catch((error) => console.error('Erro ao buscar categorias:', error));

        // Buscar produtos
        fetch('https://fakestoreapi.com/products')  // Substitua pela URL da sua API
            .then((response) => response.json())
            .then((productData) => {
                setProducts(productData);
            })
            .catch((error) => console.error('Erro ao buscar produtos:', error));
    }, []);

    const processApiData = (products: any[], categories: string[]) => {
        const processedData = categories.map(category => {
            const categoryData = products.filter(item => item.category === category);
            const totalValue = categoryData.reduce((sum, item) => sum + item.price, 0); 
            return { name: category, valor: totalValue };
        });
        return processedData;
    };

    useEffect(() => {
        if (categories.length > 0 && products.length > 0) {
            const processedData = processApiData(products, categories);
            setData(processedData);
        }
    }, [categories, products]);

    return (
        <div className="flex items-center justify-center flex-col pt-[10%]">
            <StandartTittle>Comparação de preços dos produtos</StandartTittle>
            <ResponsiveContainer width="90%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="5 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="valor" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            <StandartTittle>Produtos por categoria</StandartTittle>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={data} dataKey="valor" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c", "#d0ed57", "#ffc0cb" , "#333"][index % 100]} />
                        ))}
                    </Pie>
                    <Legend layout="horizontal" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
