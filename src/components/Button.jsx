import React from 'react'

const Button = ({ label, classname, onClick, disabled }) => {
    return (
        <div>
            <button
                disabled={disabled}
                onClick={disabled ? undefined : onClick}
                className={`${classname} w-full h-8 rounded-md text-white `}
            >
                {label}
            </button>
        </div>
    )
}


export default Button
