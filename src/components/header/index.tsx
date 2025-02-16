'use client'
import Link from "next/link"
import Logo from "../../Assets/logo/logo.svg"
import { StandartTittle } from "../tittles/Index"
import { usePathname } from "next/navigation";
import { CircleButton } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const pathname = usePathname();


    const linkStyle = (path: string) => (
        path === pathname
            ? 'font-chillax text-[24px] text-[#282828] bg-[#E7E3E0] px-10 py-5 rounded-[30px]'
            : 'font-chillax text-[24px] text-[#E7E3E0] mx-10'
    );


    return (
        <div className='h-[150px] w-[100%] flex items-center justify-center bg-primary-black px-[120px] gap-[230px]'>
            <div>
                <Logo className="h-[37px] w-[157px]" />
            </div>

            <div className="flex items-center justify-center gap-[95px]">
                <Link href={'/produtos'}>
                    <StandartTittle className={linkStyle('/produtos')}>Produtos</StandartTittle>
                </Link>

                <Link href={'/dashboard'}>
                    <StandartTittle className={linkStyle('/dashboard')}>Dashboard</StandartTittle>
                </Link>
            </div>



            <div className="flex gap-[10px]">
                <Link href={'/perfil'}>
                    <CircleButton>
                        <FontAwesomeIcon icon={faUser} className="text-complementary-white w-[25px] h-[25px]" />
                    </CircleButton>
                </Link>

                <Link href={'/'}>
                    <CircleButton>
                        <FontAwesomeIcon icon={faDoorOpen} className="text-complementary-white w-[25px] h-[25px]" />
                    </CircleButton>
                </Link>

            </div>
        </div>
    )
}
