"use client";
import { Button } from "@/components/ui/button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import HeaderUL from "./HeaderUL";
import Image from "next/image";

export default function Header() {
    return (
        <header
            className={`bg-slate py-8 border-b border-slate-800 w-full sticky z-50 top-0 backdrop-blur supports-[backdrop-filter]:bg-background/80`}
        >
            <div className="inner flex flex-row items-center justify-between w-4/5 m-auto">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <HiOutlineMenuAlt1 className="text-white h-7 w-7" />
                        </SheetTrigger>
                        <SheetContent
                            side={"left"}
                            className="bg-slate flex flex-col items-right text-right border-0 border-r border-slate-800"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-white text-start">Where to?</SheetTitle>
                            </SheetHeader>
                            <hr />
                            <SheetDescription className="flex flex-col justify-between h-full">
                                <SheetClose>
                                    <HeaderUL
                                        separator={true}
                                        className="flex flex-col gap-4 items-start text-gray-200"
                                    />
                                </SheetClose>
                                <Button className="hover:cursor-not-allowed">app coming soon</Button>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>

                <a href="/">
                    <Image src="/img/knaughts-logo-full.svg" alt="The Knaughts logo." width={180} height={80} />
                </a>

                <nav className="hidden md:flex md:flex-row md:gap-4">
                    <HeaderUL separator={false} className="flex gap-4 items-center text-gray-200" />
                    <Button className="hover:cursor-not-allowed">app coming soon</Button>
                </nav>
            </div>
        </header>
    );
}
