'use client'

import Lottie from "lottie-react";
import chevronAnimation from "../../Assets/icons/chevron-right.json"
// Usado para definir as propriedades dos botões
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?:string
}


//Passa o React.FC para tipar as propriedades
//passa o children como propriedade 
export const Button: React.FC<ButtonProps> = ({ children, onClick, className}) => {
    return (
        <div>
            <button className={`bg-primary-red w-[510px] h-[73px] rounded-[30px] flex items-center justify-center gap-[5px] text-complementary-white text-[24px] hover:bg-[#4d1e27] font-chillax ${className}`}
                onClick={onClick}
            >
                {children}
                <div className="rounded-full w-[32px] h-[32px] border-complementary-white border flex items-center justify-center">
                    <Lottie
                        animationData={chevronAnimation}
                        loop={false}
                        style={{ width: 25, height: 25 }}
                    />
                </div>
            </button>
        </div>
    )
}

export const ButtonLink: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <div>
            <button
                className={`text-[24px] underline text-complementary-white decoration-complementary-white font-chillax ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export const ExtraButton: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <div>
            <button
                className={`h-11 w-11 rounded-full border-complementary-white border text-complementary-white flex items-center justify-center hover:scale-110 transition duration-300 ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}
