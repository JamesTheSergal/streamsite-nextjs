import '../app/globals.css'
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Snergal.live</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

