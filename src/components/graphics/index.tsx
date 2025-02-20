import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Title } from "../tittles/Index";

interface ChartData {
    name: string;
    valor: number;
}

interface PriceBin {
    range: string;
    count: number;
}

interface Product {
    id: number;
    price: number;
    category: string;
}

export const BarGraphic = () => {

    const [data, setData] = useState<ChartData[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Busca categorias
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((categoryData) => {
                setCategories(categoryData);
            })
            .catch((error) => console.error('Erro ao buscar categorias:', error));

        // Busca produtos
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((productData) => {
                setProducts(productData);
            })
            .catch((error) => console.error('Erro ao buscar produtos:', error));
    }, []);

    const processApiData = (products: Product[], categories: string[]) => {
        const processedData = categories.map(category => {
            const categoryData = products.filter(item => item.category === category);
            const totalValue = categoryData.reduce((sum, item) => sum + item.price, 0);
            return { name: category, valor: totalValue };
        });
        return processedData;
    };

    const createPriceBins = (products: Product[]) => {
        // Define as faixas de preço
        const priceRanges = [0, 20, 40, 60, 80, 100, 200, 500, 1000];
        const bins = priceRanges.map((range, index) => ({
            range: `${range} - ${priceRanges[index + 1] || "inf"}`,
            count: 0,
        }));


        products.forEach(product => {
            const binIndex = priceRanges.findIndex((range, index) => {
                if (index + 1 < priceRanges.length) {
                    return product.price >= range && product.price < priceRanges[index + 1];
                }
                return false;
            });
            if (binIndex !== -1) {
                bins[binIndex].count += 1;
            }
        });

        return bins;
    };

    useEffect(() => {
        if (categories.length > 0 && products.length > 0) {
            const categoryData = processApiData(products, categories);
            setData(categoryData); // Gráfico de Pizza (Produtos por categoria)

            const priceBins = createPriceBins(products);
            setPriceData(priceBins); // Gráfico de barras (Distribuição de Preços)
        }
    }, [categories, products]);

    const [priceData, setPriceData] = useState<PriceBin[]>([]); 

    return (
        <div className="flex items-center justify-center flex-col">
            <Title className="text-complementary-white  w-full font-semibold text-center mt-12">Distribuição de produtos por preços</Title>
            <ResponsiveContainer width="80%" height={400}>
                <BarChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            <Title className="text-complementary-white font-semibold text-center w-full">Produtos por categoria</Title>
            <ResponsiveContainer width="70%" height={500}>
    <PieChart>
        <Pie
            data={data}
            dataKey="valor"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            labelLine={false} 
        >
            {data.map((entry, index) => (
                <Cell
                    key={`cell-${index}`}
                    fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c", "#d0ed57", "#ffc0cb"][index % 8]}
                />
            ))}
        </Pie>
        <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ marginTop: 50 }}
        />
    </PieChart>
</ResponsiveContainer>

        </div>
    );
};
