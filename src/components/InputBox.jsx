import React from 'react'

const Input = ({ label, placeholder, value, name, onChange, required }) => {
    return (
        <div>
            <div className="relative w-full">
                <label
                    htmlFor={name}
                    className="absolute -top-[10px] left-3  text-[12px] lg:text-[15px] text-[#6c25ff] bg-white px-1 pr-3 z-10"
                >
                    {label}
                    {
                        required ? <span className="text-red-500">*</span> : null
                    }
                </label>
                <input
                    type={name}
                    name={name}
                    required
                    placeholder={placeholder}
                    value={value}
                    className="h-7.5 md:h-8 lg:h-9 w-full border-[1.5px] border-gray-300 rounded-md px-3 text-sm text-gray-900 focus:outline-none focus:border-[#6c25ff]"
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Input
