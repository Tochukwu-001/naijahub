"use client"
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Nav(){

    const [navOpen, setNavOpen] = useState(false);

    const navStuff: object[] = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "about"},
        { label: "Contact", href: "contact"},
        { label: "Sign In", href: "signin"},
    ]
    return(
        <nav className="flex items-center justify-between px-10 py-3 shadow-sm sticky top-0">
            <Link href="/" className="flex items-center gap-1 z-50">
                <img 
                    src="/logo.png" 
                    alt="Naija Venture Hub Logo"
                    width={500}
                    height={500}
                    className="w-10 h-10"
                />
                <p className="text-lg font-semibold max-md:hidden z-50">Naija Venture Hub</p>
            </Link>

            <div className="flex items-center text-lg gap-5 max-md:hidden">
                {
                    navStuff.map((item, index)=> (
                        <Link key={index} href={item.href}>{item.label}</Link>
                    ))
                }
            </div>

            <button onClick={()=> setNavOpen(!navOpen)} className="text-2xl md:hidden z-50">
                {
                    navOpen ? <IoMdClose /> : <RiMenu3Fill />
                }
            </button>

            {/* mobile navbar display */}
                {navOpen ? (
            <div className="bg-white h-dvh absolute w-full top-0 left-0 flex justify-center md:hidden">
                    <div className="flex flex-col items-center text-lg gap-10 pt-20">
                        {navStuff.map((item, index) => (
                            <Link key={index} href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                ) : null} 
            </div>
        </nav>
    );
}