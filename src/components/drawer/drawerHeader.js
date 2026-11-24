"use client";

// import { Button } from "@mui/material";

import { Button } from "../../components/buttons/button";

import { X } from "lucide-react";

import { useUIState } from "../../hooks/clientHooks/useUisState";
import { useResponsiveAction } from "../../hooks/clientHooks/useResponsiveAction";

import { btnStyle, iconStyle } from "../../assets/theme/theme";

import styles from "./drawerHeader.module.css";

export function DrawerHeader({
    stateKey = "drawer",
    label = "Menu",
    headerClass,
    leftClass,
    rightClass,
    buttonSx,
}) {
    const { close } = useUIState();

    const runResponsive = useResponsiveAction();

    const handleOpen = (stateKey) => {
        runResponsive(() => close(stateKey));
    };

    return (
        <div className={styles.header + " " + headerClass}>
            <div className={styles.left + " " + leftClass}>
                {label}
            </div>
            <div className={styles.right + " " + rightClass}>
                <Button
                    onClick={() => handleOpen(stateKey)}
                    icon={X}
                    sx={{
                        ...buttonSx
                    }}
                >
                    <X size={iconStyle.size.base} />
                </Button>
            </div>
        </div>
    );
}