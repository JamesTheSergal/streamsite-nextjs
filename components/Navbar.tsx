import '../app/globals.css'
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="navbar bg-[#6e3df5]">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl bg-[#7a7fff]">Snergal.live</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/" className='bg-[#000000] text-white'>Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

