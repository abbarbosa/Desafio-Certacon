'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../../Assets/logo/logo.svg';
import { StandartTittle } from '../tittles/Index';
import { usePathname } from 'next/navigation';
import { ExtraButton } from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkStyle = (path:string) => (
        path === pathname
            ? 'font-chillax text-[24px] !text-[#282828] bg-[#E7E3E0] px-10 py-5 rounded-[30px]'
            : 'font-chillax text-[24px] text-[#E7E3E0] mx-10'
    );

    return (
        <header className='w-full bg-primary-black px-6 py-4 flex items-center justify-between'>
            <Link href={'/dashboard'}>
                <Logo className='h-[37px] w-[157px]' />
            </Link>

            <button onClick={toggleMenu} className='md:hidden text-complementary-white'>
                <FontAwesomeIcon icon={faBars} className='text-3xl' />
            </button>

            <nav className='hidden md:flex gap-[95px] items-center justify-center'>
                <Link href={'/produtos'}>
                    <StandartTittle className={linkStyle('/produtos')}>Produtos</StandartTittle>
                </Link>
                <Link href={'/dashboard'}>
                    <StandartTittle className={linkStyle('/dashboard')}>Dashboard</StandartTittle>
                </Link>
            </nav>

            <div className='hidden md:flex gap-[10px]'>
                <Link href={'/perfil'}>
                    <ExtraButton>
                        <FontAwesomeIcon icon={faUser} className='text-complementary-white w-[25px] h-[25px]' />
                    </ExtraButton>
                </Link>
                <Link href={'/'}>
                    <ExtraButton>
                        <FontAwesomeIcon icon={faDoorOpen} className='text-complementary-white w-[25px] h-[25px]' />
                    </ExtraButton>
                </Link>
            </div>

            {isMenuOpen && (
                <div className='fixed inset-0 z-50'>
                    <div className='fixed inset-0 bg-black bg-opacity-50' onClick={toggleMenu}></div>
                    <div className='fixed right-0 top-0 h-full bg-white p-6 shadow-lg w-[75%] max-w-[300px] transition-transform duration-300 transform translate-x-0'>
                        <button onClick={toggleMenu} className='absolute top-4 right-4 text-2xl'>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <nav className='flex flex-col gap-4 mt-10 text-[18px] text-center font-chillax'>
                            <Link href={'/produtos'} onClick={toggleMenu} className='hover:font-bold'>Produtos</Link>
                            <Link href={'/dashboard'} onClick={toggleMenu} className='hover:font-bold'>Dashboard</Link>
                            <Link href={'/perfil'} onClick={toggleMenu} className='hover:font-bold'>Perfil</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
