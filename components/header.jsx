"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLargeFill, RiMenu3Line } from "react-icons/ri";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = (data) => {
        setShowMenu(data)
    }

    return (
        <header className="px-6 lg:px-20 py-7 flex justify-between items-center fixed w-full bg-transparent z-10" >
            <Image className="hover:scale-105 transition-all cursor-pointer" src={'/img/logo_principal.png'} width={150} height={150} alt="Logo Desktop"></Image>
            <nav className="hidden lg:flex gap-8 items-center">
                <ul className="flex gap-6 bg-[#030303da] rounded-full py-3 px-8 text-lg font-normal cursor-pointer">
                    <Link href="#s_1" className="hover:text-primary transition-colors" >Home</Link>
                    <Link href="#s_2" className="hover:text-primary transition-colors">About us</Link>
                    <Link href="#s_3" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="#s_4" className="hover:text-primary transition-colors">Contact</Link>
                </ul>
                <button className="bg-primary px-6 py-4 rounded-full hover:scale-105 transition-all">Agendar</button>
            </nav>
            <button className="border-2 p-1 rounded-lg lg:hidden hover:bg-[#00000099]" onClick={() => toggleMenu(true)}>
                <RiMenu3Line className="text-2xl " />
            </button>
            {/* menu movil */}


            <div className={`w-full h-full bg-[#000000f5] fixed left-0 top-0 transition-transform duration-300 ease-in-out ${showMenu ? 'transform translate-x-0' : 'transform -translate-x-full'} `} >
                <div className="relative w-full">
                    <button className="absolute right-0 mt-7 mr-8 text-3xl" onClick={() => toggleMenu(false)}><RiCloseLargeFill /></button>
                </div>
                <div className="w-full h-full flex justify-center flex-col gap-20 items-center">
                    <ul className="text-center text-2xl cursor-pointer">
                        <li className="p-3 hover:border-b-[2px]">About us</li>
                        <li className="p-3 hover:border-b-[2px]">Services</li>
                        <li className="p-3 hover:border-b-[2px]">Contacto</li>
                    </ul>
                    <Image src='/img/logo_principal.png' width={120} height={120} alt="Logo Mobile" />
                </div>
            </div>
        </header>
    )
}