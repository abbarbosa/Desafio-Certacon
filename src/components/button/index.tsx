'use client'
import Lottie from "lottie-react";
import chevronAnimation from "../../Assets/icons/chevron-right.json"

type ButtonProps = {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div>
            <button className={` bg-primary-red w-[510px] h-[73px] rounded-[30px] flex items-center justify-center gap-[5px] text-complementary-white text-[24px] hover:bg-[#4d1e27] font-chillax`}
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

export const ButtonLink: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div>
            <button className="text-[24px] underline text-complementary-white decoration-complementary-white font-chillax">
                {children}
            </button>
        </div>
    )
}

export const CircleButton: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div>
            <button className="h-11 w-11 rounded-full border-complementary-white border text-complementary-white flex items-center justify-center hover:scale-110 transition duration-300">
                {children}
            </button>
        </div>
    )
}