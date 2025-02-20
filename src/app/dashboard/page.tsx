'use client'

import { BarGraphic } from "@/components/graphics";
import { Title } from "@/components/tittles/Index";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"


function Dashboard() {

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/");
        }
    }, [router]);

    return (
        <div className="bg-primary-black h-full w-[100%] flex flex-col gap-[30px]">
            <div className="pl-[5%] flex items-start">
                <Title className="text-complementary-white text-start">Bem vindo!</Title>
            </div>
            <BarGraphic />
        </div>
    )
}
export default (Dashboard);