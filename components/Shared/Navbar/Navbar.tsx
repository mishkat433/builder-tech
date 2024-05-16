"use client"

import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Navbar = () => {
    const [categoryOption, setCategoryOption] = useState(false)

    const navOption =
        <>
            <li><Link href='/'>Home</Link></li>
            <li className="group relative ">

                <button className="flex items-center gap-2" onClick={() => setCategoryOption(!categoryOption)}>Categories
                    < FaAngleDown className={` group-hover:rotate-180 duration-300  ${categoryOption && 'rotate-180'}`} />
                </button>
                <div className={` overflow-hidden  absolute top-8 -left-4 rounded-md  bg-white drop-shadow-md`}>
                    <ul className={`${categoryOption ? 'max-h-[370px] duration-300' : "max-h-0"} group-hover:max-h-[370px] space-y-2 min-w-40 duration-300`}>
                        <li className="hover:bg-primary duration-300 cursor-pointer p-2 text-black hover:text-fourth" onClick={() => setCategoryOption(false)}><Link href="/category/Processor">CPU / Processor</Link></li>
                        <li className="hover:bg-primary duration-300 cursor-pointer p-2 text-black hover:text-fourth" onClick={() => setCategoryOption(false)}><Link href="/category/Motherboard">Motherboard</Link></li>
                        <li className="hover:bg-primary duration-300 cursor-pointer p-2 text-black hover:text-fourth" onClick={() => setCategoryOption(false)}><Link href="/">RAM</Link></li>
                        <li className="hover:bg-primary duration-300 cursor-pointer p-2 text-black hover:text-fourth" onClick={() => setCategoryOption(false)}><Link href="/">Power Supply Un</Link></li>
                        <li className="hover:bg-primary duration-300 cursor-pointer p-2 text-black hover:text-fourth" onClick={() => setCategoryOption(false)}><Link href="/">Storage Device</Link></li>
                        <li className="hover:bg-primary duration-300 cursor-pointer p-2 text-black hover:text-fourth" onClick={() => setCategoryOption(false)}><Link href="/">Monitor</Link></li>
                        <li className="hover:bg-primary duration-300 cursor-pointer p-2 text-black hover:text-fourth" onClick={() => setCategoryOption(false)}><Link href="/">Others</Link></li>
                    </ul>
                </div>
            </li>
            <li><Link href='/'>About</Link></li>
            <li><Link href='/'>Contact</Link></li>
        </>

    return (
        <div className="bg-secondary text-white sticky top-0 z-50">
            <div className="container mx-auto navbar">
                <div className="navbar-start ">
                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-screen">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Builder Tech</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-5 menu-horizontal">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/pc-build" className="btn">PC Builder</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;