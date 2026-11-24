"use client";

import { useMediaQuery } from "@mui/material";

import { Drawer } from "@/components/drawer/drawer";

export default function MenuDrawer({
    children,
    ...props
}) {
    const isTablet = useMediaQuery("(max-width: 800px)");
    const isMobile = useMediaQuery("(max-width: 600px)");

    const menuAnchor = isTablet && !isMobile ? "left" : "right";

    return (
        <Drawer stateKey="menu" anchor={menuAnchor} {...props}>
            {children}
        </Drawer>
    );
}