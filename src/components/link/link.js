"use client";

import { Suspense } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

function NavLinkContent({ href, children, ...props }) {
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname === href) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <NextLink
            href={href}
            onClick={handleClick}
            {...props}
        >
            {children}
        </NextLink>
    );
}

export function Link({ fallback = null, ...props }) {
    return (
        <Suspense fallback={fallback}>
            <NavLinkContent {...props} />
        </Suspense>
    );
}