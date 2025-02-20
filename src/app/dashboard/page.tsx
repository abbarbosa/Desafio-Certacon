'use client'

import { BarGraphic } from "@/components/graphics";
import { Title } from "@/components/tittles/Index";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Dashboard() {

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/");
        }
    }, [router]);

    return (
        <div className="bg-primary-black min-h-screen w-full flex flex-col gap-[30px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex items-center justify-center w-full">
                <Title className="text-complementary-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">Bem-vindo!</Title>
            </div>

            <div className="w-full flex justify-center sm:justify-start md:justify-center lg:justify-center xl:justify-center">
                <BarGraphic />
            </div>
        </div>
    )
}

export default Dashboard;
