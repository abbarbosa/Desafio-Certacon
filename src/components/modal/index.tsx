'use client'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}


export const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="h-screen w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
                {children}
            </div>
        </div>

    )
}