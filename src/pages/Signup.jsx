import React, { useEffect, useState } from 'react'
import Input from '../components/InputBox'
import Button from '../components/Button'
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useNavigate } from 'react-router-dom'


const Signup = () => {

    const navigate = useNavigate()

    const [fullname, setFullname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [agency, setAgency] = useState("")

    const allowSubmit = email.trim() !== "" && password.trim() !== "" &&
        fullname.trim() != "" && phoneNumber.trim() !== "" && companyName.trim() != ""
        && agency.trim() != ""

    const onSubmitSignup = (e) => {
        e.preventDefault();
        console.log(fullname, phoneNumber, email, password, companyName, agency);
        const user = {
            email, password
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
        <div className='max-w-xs max-sm:w-[280px] lg:max-w-[470px] md:max-w-[370px] mx-auto h-[90vh] border border-gray-200 flex flex-col my-[5vh] rounded-xs shadow'>
            <form onSubmit={allowSubmit ? onSubmitSignup : null} className='flex flex-col gap-6 px-5 mt-10'>
                <p className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9'>Create your <br /> Popx account</p>
                <div className='flex flex-col mt-5'>
                    <div className='flex flex-col gap-4'>
                        <Input label="Full Name" placeholder="Enter your full name" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required="yes" />
                        <Input label="Phone number" placeholder="Enter your phone number" name="phonenumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required="yes" />
                        <Input label="Email address" placeholder="Enter email address" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required="yes" />
                        <Input label="Password" placeholder="Enter password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} required="yes" />
                        <Input label="Company name" placeholder="Enter your company name" name="companyname" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required="yes" />
                        <div>
                            <label htmlFor="agency" className="block mb-2 font-medium text-gray-700 text-xs">
                                Are you an agency?<span className="text-red-500">*</span>
                            </label>
                            <div id="agency" className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer text-xs">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="yes"
                                        className="accent-green-500 w-3 h-3"
                                        onChange={(e) => setAgency(e.target.value)}
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-xs">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="no"
                                        className="accent-red-500 w-3 h-3"
                                        onChange={(e) => setAgency(e.target.value)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-end'>
                    <Button
                        label="Create Account"
                        classname={`${allowSubmit ? 'bg-[#6c25ff] hover:bg-[#6c25ec] cursor-pointer' : 'bg-gray-300 cursor-not-allowed'} text-white rounded-lg transition duration-200 `}
                        disabled={!allowSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default Signup
