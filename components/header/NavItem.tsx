"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type NavItemProps = {
    href: string;
    name: string;
};

export default function NavItem(props: NavItemProps) {
    const pathname = usePathname();
    const active = (path: string) => (path == pathname ? "text-orange" : "text-white");
    const router = useRouter();

    return (
        <li className={`${active(props.href)} hover:text-orange transitionable font-semibold list-none`}>
            <Button
                type="submit"
                variant={"ghost"}
                className="p-0 m-0 h-fit text-base"
                onClick={() => router.push(props.href, { scroll: true })}
            >
                {props.name}
            </Button>
        </li>
    );
}
