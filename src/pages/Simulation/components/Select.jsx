import { ChevronDown } from 'lucide-react';
import React from 'react'

const Select = ({label, value, onChange, options, placeholder}) => {
    return (
        <div className="bg-white rounded-lg p-4 border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            </div>
        </div>
    );
}

export default Select