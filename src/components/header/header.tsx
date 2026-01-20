'use client';

import { useEffect, useState } from "react";
import { Menu } from "./menu";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-30 flex h-[68] items-center justify-center border-b bg-gray/50 backdrop-blur-xl transition-colors ${isScrolled ? "border-[#1f2937]" : "border-transparent"}`}>
            <div className="flex justify-between w-full max-w-7xl">
                <div>{'<AI />'}</div>
                <Menu />
            </div>
        </header>
    )
}
