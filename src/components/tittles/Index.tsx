'use client'

type TittleProps = {
    children: React.ReactNode,
    className?:string
}


export const Title: React.FC<TittleProps> = ({ children, className }) => {
    return (
        <div>
            <h1 className={` text-[48px] font-chillax ${className}`}>{children}</h1>
        </div>
    )
}

export const StandartTittle: React.FC<TittleProps> = ({ children, className }) => {
    return (
        <div>
            <h2 className={` text-[24px] text-complementary-white text-center font-chillax ${className}`}>
                {children}
            </h2>
        </div>
    )
}