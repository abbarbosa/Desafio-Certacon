'use client'

import { BarGraphic } from "@/components/graphics";
import { Title } from "@/components/tittles/Index";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"


function Dashboard() {

    const [fullName, setFullName] = useState<string>("");
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedFirstName = localStorage.getItem("firstName");
        const storedLastName = localStorage.getItem("lastName");

        if (!token) {
            router.push("/"); // Redireciona para login se não houver token
        }

        // Se ambos firstName e lastName forem encontrados, combinamos eles
        if (storedFirstName && storedLastName) {
            setFullName(`${storedFirstName} ${storedLastName}`); // Combina o nome e sobrenome
        }
    }, [router]);


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/"); // Redireciona para login se não houver token
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