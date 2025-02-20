'use client'

import Header from "@/components/header"
import { usePathname } from "next/navigation"
import { ToastContainer } from "react-toastify"


export default function Template({ children }: { children: React.ReactNode }) {
    //variável que usa o pathname para verificar a rota atual
    const Pathame = usePathname()

    //variavél para listar as páginas que vão ficar sem header
    const NoHeaderPages = ['/', '/cadastro']


    return <div>
        {/* Páginas sem header, inclui pathame e tira o header */}
        <ToastContainer />
        {!NoHeaderPages.includes(Pathame) && <Header />}
        {children}</div>
}