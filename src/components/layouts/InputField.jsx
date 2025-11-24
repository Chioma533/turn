import React from 'react'

const InputField = ({ type = "text", placeholder, value, onChange, required}) => {
    return (

        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full bg-slate-700/50 text-white placeholder-slate-400 rounded-lg py-3 px-4 border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
        />
    )
}

export default InputField
