'use client'

import { BarGraphic} from "@/components/graphics";
import { Title } from "@/components/tittles/Index";
import { ResponsiveContainer } from "recharts";

export default function Dashboard() {
    return (
        <div className="bg-primary-black h-[100%] flex flex-col gap-[30px]">
            <div className="pl-[120px] flex items-start">
                <Title className="text-complementary-white">Olá, <strong>João Silva</strong>!</Title>
            </div>
            <BarGraphic />
        </div>
    )
}