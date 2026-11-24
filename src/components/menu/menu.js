"use client";

import { Menu as MuiMenu } from "@mui/material";

import Slide from "@mui/material/Fade";

import { useUIState } from "@/hooks/clientHooks/useUisState";

export function Menu({
    children,
    stateKey,

    sx = {},
    paperSx = {},
    listSx = {},
    backdropSx = {},

    slotProps = {},

    ...props
}) {
    const {
        isOpen,
        close,
        getData,
    } = useUIState();

    const open = isOpen(stateKey);
    const anchorEl = getData(stateKey);

    return (
        <MuiMenu
            id={`${stateKey}-menu`}
            anchorEl={anchorEl}
            open={open}
            onClose={() => close(stateKey)}

            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}

            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}

            slots={{ transition: Slide }}

            transitionDuration={{ enter: 400, exit: 280 }}

            sx={{
                ...sx,
            }}

            slotProps={{
                ...slotProps,

                transition: {
                    easing: {
                        enter: "cubic-bezier(0.16, 1, 0.3, 1)",
                        exit: "ease",
                    },
                },

                paper: {
                    ...slotProps.paper,
                    sx: {
                        ...slotProps.paper?.sx,
                        ...paperSx,
                    },
                },

                list: {
                    ...slotProps.list,
                    "aria-labelledby": `${stateKey}-button`,
                    sx: {
                        ...slotProps.list?.sx,
                        ...listSx,
                    },
                },

                backdrop: {
                    ...slotProps.backdrop,
                    sx: {
                        ...slotProps.backdrop?.sx,
                        ...backdropSx,
                    },
                },
            }}
            {...props}
        >
            {children}
        </MuiMenu>
    );
}