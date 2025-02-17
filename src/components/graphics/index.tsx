import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { StandartTittle } from "../tittles/Index";

export const BarGraphic = () => {

    const data = [
        { name: 'Eletrônicos', valor: 400 },
        { name: 'Decoração', valor: 100 },
        { name: 'Vestuário', valor: 350 },
        { name: 'Alimentos', valor: 290 },
        { name: 'Produtos de limpeza', valor: 130 }
    ];

    return (
        <div className="flex items-center justify-center flex-col font-chillax">
            <StandartTittle>Comparação de preços dos produtos</StandartTittle>
            <ResponsiveContainer width="100%" height={300}>
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
                            <Cell key={`cell-${index}`} fill={["#8884d8",
                                "#82ca9d",
                                "#ffc658",
                                "#ff8042",
                                "#8dd1e1",
                                "#a4de6c",
                                "#d0ed57",
                                "#ffc0cb"][index % 8]} />
                        ))}
                    </Pie>
                    <Legend layout="horizontal" height={36} />
                </PieChart>
            </ResponsiveContainer>

        </div>
    )
} 