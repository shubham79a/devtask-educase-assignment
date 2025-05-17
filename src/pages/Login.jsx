import React, { useEffect, useState } from 'react'
import Input from '../components/InputBox'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const allowSubmit = email.trim() !== "" && password.trim() !== ""

    const onSubmitLogin = (e) => {
        e.preventDefault();
        console.log(email, password)
        const user = {
            email: email,
            password: password
        }
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/profile")
    }


    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            navigate("/profile")
        }
    })

    return (
        <div className='max-w-xs max-sm:w-[280px] mx-auto h-[90vh] border border-gray-200 flex flex-col justify-start my-[5vh] rounded-xs shadow'>
            <form className='flex flex-col gap-6 px-5 py-8'>
                <div>
                    <p className='text-2xl font-semibold leading-7'>Signin to your <br /> Popx account</p>
                    <p className='text-base text-gray-500 leading-[19px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, debitis!</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <Input label="Email Address" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Button
                        onClick={allowSubmit ? onSubmitLogin : null}
                        label="Login"
                        classname={`${allowSubmit ? 'bg-[#6c25ff] hover:bg-[#6c25d3] cursor-pointer' : 'bg-gray-300 cursor-not-allowed'} text-white rounded-lg transition duration-200 `}
                        disabled={!allowSubmit}
                    />
                </div>
            </form>

        </div>
    )
}

export default Login
