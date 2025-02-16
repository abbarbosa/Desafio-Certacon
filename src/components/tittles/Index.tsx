'use client'

type TittleProps = {
    styles?: string,
    children: React.ReactNode,
    className?:string
}


export const Title: React.FC<TittleProps> = ({ children, styles }) => {
    return (
        <div>
            <h1 className={`font-chillax text-[48px] ${styles}`}>{children}</h1>
        </div>
    )
}

export const StandartTittle: React.FC<TittleProps> = ({ children, className }) => {
    return (
        <div>
            <h2 className={`font-chillax text-[24px] text-complementary-white text-center ${className}`}>
                {children}
            </h2>
        </div>
    )
}