"use client";

import { Drawer as MuiDrawer } from "@mui/material";

import { useUIState } from "../../hooks/clientHooks/useUisState";
import { drawerStyle } from "../../assets/theme/theme";

export function Drawer({
    children,
    anchor = "left",
    stateKey = "drawer",
    sx,
    slotProps,
    backdrop,
    ...props
}) {
    const { close, isOpen } = useUIState();

    const isHorizontal = anchor === "left" || anchor === "right";

    const styles = isHorizontal
        ? drawerStyle.horizontal
        : drawerStyle.vertical;

    return (
        <MuiDrawer
            open={isOpen(stateKey)}
            onClose={() => close(stateKey)}
            anchor={anchor}
            slotProps={{
                ...slotProps,

                backdrop: {
                    ...slotProps?.backdrop,

                    sx: [
                        styles.backdrop,
                        ...(Array.isArray(slotProps?.backdrop?.sx)
                            ? slotProps.backdrop.sx
                            : slotProps?.backdrop?.sx
                                ? [slotProps.backdrop.sx]
                                : []),
                    ],
                },
            }}
            sx={[
                styles.paper,
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...props}
        >
            {children}
        </MuiDrawer>
    );
}