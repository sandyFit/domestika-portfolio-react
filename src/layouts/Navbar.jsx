import React from 'react';
import { FaAsterisk } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 flex justify-center items-center w-full h-[120px] z-10'>
            <div className="flex justify-between items-center w-full h-full px-16 py-6">
                <div className="flex justify-around gap-2">
                    <p className='text-2xl font-semibold text-zinc-500 text-opacity-85 uppercase'>
                        Available for work
                    </p>

                    <FaAsterisk
                        className='rotating-icon'
                        style={{color: '#9935d8'}}
                    />
                </div>

                <ul className='flex items-start gap-16'>
                    {['about', 'projects', 'contact', 'curriculum'].map((item, index) => (
                        <li className='text-zinc-600 text-2xl font-semibold hover:text-zinc-500'
                            key={index}
                        >
                            <Link to={item} smooth='true' duration={500}>
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </Link>
                        </li>
                    ))}
                    
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar