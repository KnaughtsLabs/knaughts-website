/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="home-bg text-white flex flex-col my-48 md:my-40 text-center items-center justify-center m-auto w-4/5 md:w-3/5">
            <Image src="/img/knaughts-logo-sad.png" alt="The sad Knaughts logo." height={100} width={100} />
            <h1 className="font-title">Uh oh! This page doesn't exist.</h1>
            <br />
            <p className="my-4">
                <Button variant={"link"}>
                    <Link href="/">take me home</Link>
                </Button>
            </p>
        </main>
    );
}
