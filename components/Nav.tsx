import Image from "next/image";
import Link from "next/link";

export default function Nav(){

    const navStuff: object[] = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Sign In", href: "/signin" }
    ];
    return(
        <nav className="flex items-center justify-between px-10 py-3 shadow-sm sticky top-0">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/logo.png"
                    alt="Naija Venture Hub Logo"
                    width={500}
                    height={500}
                    className="w-10 h-10"
                />
                <p className="text-lg font-semibold">Naija Venture Hub</p>
            </Link>

            <div className="flex items-center text-lg gap-5">
                {
                    navStuff.map((item, index)=> (
                        <Link key={index} href={item.href}>{item.label}</Link>
                    ))
                }
            </div>
        </nav>
    )
}