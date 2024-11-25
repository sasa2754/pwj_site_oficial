"use client";

import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}

export const Menu = ({ op1, op2, op3 }: IMenu) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="font-semibold z-50 shadow-xl bg-backgroundNav  flex items-center justify-between w-full p-2 px-4 fixed">
            <div className="hidden md:flex gap-2 md:items-center">
                <Link className="cursor-pointer hover:text-neutral-600 text-2xl" href={ROUTES.home}>{op1}</Link>
                <Link className="cursor-pointer hover:text-neutral-600 text-2xl" href={ROUTES.viewOrders}>{op2}</Link>
                <Link className="cursor-pointer hover:text-neutral-600 text-2xl" href={ROUTES.webcam}>{op3}</Link>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="font-semibold focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black text-white bg-opacity-75 z-50 flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 font-semibold">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="font-semibold flex flex-col gap-5 text-center">
                        <Link className="cursor-pointer hover:text-neutral-600 text-2xl" href={ROUTES.home} onClick={toggleMenu}>{op1}</Link>
                        <Link className="cursor-pointer hover:text-neutral-600 text-2xl" href={ROUTES.viewOrders} onClick={toggleMenu}>{op2}</Link>
                        <Link className="cursor-pointer hover:text-neutral-600 text-2xl" href={ROUTES.webcam} onClick={toggleMenu}>{op3}</Link>
                    </div>
                </div>
            )}
        </nav>

    );
};