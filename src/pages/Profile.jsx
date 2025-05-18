import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // store as object

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login");
            return;
        }

        try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        } catch (error) {
            console.error("Invalid user data in localStorage.");
            navigate("/login");
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className='max-w-xs max-sm:w-[280px] lg:max-w-[470px] md:max-w-[370px] mx-auto h-[90vh] border border-gray-200 flex flex-col my-[5vh] rounded-xs shadow'>
            <div className='flex justify-between mx-4 py-3 items-center border-b border-b-gray-500'>
                <p>Account Settings</p>
                <button className='bg-black text-white px-3 py-1 rounded-md' onClick={logout}>Logout</button>
            </div>

            <div className='p-5'>
                <div className="flex items-center gap-5">
                    <img className='w-20 h-20 rounded-full' src="https://static.vecteezy.com/system/resources/previews/035/595/632/non_2x/ai-generated-happy-girl-in-cute-dress-smiling-and-looking-at-the-camera-photo.jpg" alt="" />
                    <div>
                        <p className='text-lg font-medium'>{user?.name || 'Shubham'}</p>
                        <p className='text-sm text-gray-600'>{user?.email}</p>
                    </div>
                </div>
                <div className='mt-5 text-sm text-gray-600'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere in expedita porro rerum natus? Eveniet
                        laudantium, repellendus velit rem at deserunt.
                        officiis vel culpa.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Profile;
