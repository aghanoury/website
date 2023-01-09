import React from 'react';
import Link from 'next/link';


const Header = () => <div className="text-2xl">Boonami</div>
const menu_items = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Resume", href: "/contact" },
    { text: "Photos", href: "/photos" },
    { text: "Contact", href: "/contact"}
    ]
const Navbar = () => {
    return (
        <div className="flex flow-row space justify-between font-bold">
            <Header />
            <div className="nav-desktop flex flex-row space-x-2">
                {menu_items.map((item, index) => (
                    <Link className="border-2 border-black px-2 py-0.5 rounded-md" href={item.href} key={index}>{item.text}</Link>
                ))}
            </div>
            <div className="nav-mobile lg:hidden h-full">

            </div>
        </div>
    );
};

export default Navbar;

