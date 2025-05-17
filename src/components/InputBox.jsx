import React from 'react'

const Input = ({ label, placeholder, value, name, onChange }) => {
    return (
        <div>
            <div className="relative w-full">
                <label
                    htmlFor={name}
                    className="absolute -top-[10px] left-3  text-[12px] text-[#6c25ff] bg-white px-1 pr-3 z-10"
                >
                    {label}
                </label>
                <input
                    type={name}
                    name={name}
                    required
                    placeholder={placeholder}
                    value={value}
                    className="h-7.5 w-full border-[1.5px] border-gray-300 rounded-md px-3 text-sm text-gray-900 focus:outline-none focus:border-[#6c25ff]"
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Input
