import React from "react";
import Link from "next/link";

function Navbar() {
    // const router = useRouter();
    return (
        <div className="navbar">
            <div className="navbar-items">
                <Link className="navbar-item" href="/" >Home</Link>
                <Link className="navbar-item" href="/about">About</Link>
                <Link className="navbar-item" href="/photos">Photos</Link>
                <Link className="navbar-item" href="/resume">Resume</Link>
            </div>
        </div>
    );
}

export default Navbar;