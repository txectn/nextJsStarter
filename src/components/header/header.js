import DrawersGroup from "./drawersGroup/drawersGroup";
import HeaderClient from "./headerClient/headerClient";
import MobileNav from "./mobileNav/mobileNav";

export default function Header() {
    return (
        <>
            <HeaderClient />
            <DrawersGroup />
            <MobileNav />
        </>
    );
}