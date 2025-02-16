import { Title } from "@/components/tittles/Index";

export default function Dashboard() {
    return (
        <div className="bg-primary-black h-screen flex ">
            <div className="pl-[120px] flex items-start">
                <Title className="text-complementary-white">Olá, <strong>João Silva</strong>!</Title>
            </div>
        </div>
    )
}