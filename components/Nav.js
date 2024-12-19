"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        name: "ראשי",
        path: "/",
    },
    {
        name: "השירותים שלי",
        path: "/services",
    },
    {
        name: "מחשבון משכנתא",
        path: "/",
    },
    {
        name: "מאמרים וטיפים",
        path: "/blog",
    },
    {
        name: "קצת עלי",
        path: "/about",
    },
    {
        name: "המלצות",
        path: "/recommendations",
    },
];


const Nav = () => {
return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index}>
                    {link.name}
                </Link>
        );
   })}
    </nav>
 );
};

export default Nav;