import { Separator } from "@/components/ui/separator";
import NavItem from "./NavItem";

export default function HeaderUL(props: { className: string; separator: boolean }) {
    return (
        <ul className={props.className}>
            <NavItem href="/" name="home" />
            {props.separator ? <Separator orientation="horizontal" /> : null}
            <NavItem href="/guide" name="guide" />
            {props.separator ? <Separator orientation="horizontal" /> : null}
            <NavItem href="/discord" name="support" />
        </ul>
    );
}
