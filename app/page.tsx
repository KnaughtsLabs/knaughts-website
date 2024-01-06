/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Knaughts - Superpowered Notes",
    description: "Knaughts website home page.",
};

export default function Home() {
    return (
        <main className="text-white centered text-start">
            <section id="hero" className="my-48">
                <h1 className="font-title text-4xl md:text-6xl">
                    Super-powered notes for <br /> Discord.
                </h1>
                <br />
                <p className="subtitle text-sm font-title md:text-lg">
                    (okay, not really super-powered... it just sounded cool)
                </p>

                <br />

                <div className="flex flex-row mt-6">
                    <Link href="/invite">
                        <Button className="mr-4">Add to Discord</Button>
                    </Link>

                    <Link href="/guide">
                        <Button variant={"secondary"} className="mr-4">
                            View Guide
                        </Button>
                    </Link>
                </div>
            </section>

            <section id="about" className="bg-slate-800 py-8 w-[100vw]">
                <div className="centered text-center">
                    <h2>About Knaughts</h2>
                    <br />
                    <p>
                        Knaughts (pronounced “noughts” - like noughts and crosses) is an intuitive note-taking bot for
                        Discord with <span className="font-bold">markdown support</span>. With Knaughts, you can
                        conveniently create, view, delete and edit your <span className="font-bold">encrypted</span>{" "}
                        notes. We're working hard to get some new functionality implemented, including an awesome web
                        app where you'll be able to manage your notes. The best place to stay updated is on our{" "}
                        <Link href="/twitter" className="link">
                            Twitter/X page
                        </Link>{" "}
                        ⎯ stick around for updates!
                    </p>
                </div>
            </section>
        </main>
    );
}
