import React from 'react'

const Buttons = ({children, onClick, variant = 'primary', type = 'button', disabled = false}) => {
    const baseStyles = "w-full font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50",
        google: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            {children}
        </button>
    );
}

export default Buttons