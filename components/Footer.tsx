import Link from "next/link";
import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6";
import NavItem from "./header/NavItem";
import { Separator } from "./ui/separator";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-slate border-slate-800 text-white flex flex-row items-center justify-center mt-8">
            <div className="flex flex-row gap-8 my-12 h-full items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div>
                        © Knaughts Labs
                        <br />
                        All rights reserved.
                    </div>
                    <div className="flex flex-row gap-4">
                        <Link href="/twitter">
                            <FaXTwitter className="size-5 hover:text-orange transitionable" />
                        </Link>
                        <Link href="/discord">
                            <FaDiscord className="size-5 hover:text-orange transitionable" />
                        </Link>
                        <Link href="/github">
                            <FaGithub className="size-5 hover:text-orange transitionable" />
                        </Link>
                    </div>
                </div>

                {/* <div className="border-l text-slate-800"></div> */}
                <Separator orientation="vertical" className="bg-slate-800 h-3/5" />

                <div>
                    <ul className="flex flex-col gap-2 justify-center h-full m-0">
                        <NavItem name="terms of use" href="/terms" />
                        <NavItem name="privacy policy" href="/privacy" />
                        <NavItem name="source code" href="https://github.com/knaughtslabs/knaughts-bot" />
                        <Link
                            className="hover:text-orange transitionable font-semibold list-none"
                            href="mailto:support@knaughts.xyz"
                            target="_blank"
                        >
                            contact
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
