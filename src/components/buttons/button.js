// "use client";

// import { useState, useRef, useCallback, useEffect } from "react";

// import { Button as MuiButton } from "@mui/material";
// import { CircleHelp } from "lucide-react";

// import { Badge } from "@/components/badge";

// import { iconStyle, btnStyle } from "../../assets/theme/theme";

// export function Button({
//     icon: Icon = CircleHelp,
//     sx,
//     size = iconStyle.size.base,
//     color = iconStyle.color.main,
//     strokeWidth,
//     badge = false,
//     badge_value = 0,
//     minHeight = {
//         xs: "45px",
//         sm: "40px",
//     },
//     minWidth = {
//         xs: "45px",
//         sm: "40px",
//     },
//     clickEffect = true,
//     onClick,
//     className = "",
//     children,
//     ...props
// }) {
//     const [active, setActive] = useState(false);
//     const timeoutRef = useRef(null);

//     const trigger = useCallback(() => {
//         setActive(true);

//         clearTimeout(timeoutRef.current);

//         timeoutRef.current = setTimeout(() => {
//             setActive(false);
//             timeoutRef.current = null;
//         }, 200);
//     }, []);

//     useEffect(() => {
//         return () => clearTimeout(timeoutRef.current);
//     }, []);

//     const handleClick = (event) => {
//         onClick?.(event);

//         if (clickEffect) {
//             trigger();
//         }
//     };

//     return (
//         <MuiButton
//             onClick={handleClick}
//             className={`${className} ${clickEffect && active ? "btn-effect" : undefined}`}
//             sx={{
//                 ...btnStyle.default,
//                 borderRadius: "12px",
//                 minWidth: minWidth,
//                 minHeight: minHeight,
//                 ...sx,
//             }}
//             {...props}
//         >
//             {children
//                 ||
//                 (
//                     <>
//                         {badge && (
//                             <Badge value={badge_value} />
//                         )}
//                         <Icon strokeWidth={strokeWidth} size={size} color={color} />
//                     </>
//                 )
//             }
//         </MuiButton>
//     );
// }














"use client";

import {
    useRef,
    useCallback,
    useEffect,
    useId,
} from "react";

import { Button as MuiButton } from "@mui/material";
import { CircleHelp } from "lucide-react";

import { Badge } from "@/components/badge";

import { useUIState } from "../../hooks/clientHooks/useUisState";

import { iconStyle, btnStyle } from "../../assets/theme/theme";

export function Button({
    icon: Icon = CircleHelp,
    sx,
    size = iconStyle.size.base,
    color = iconStyle.color.main,
    strokeWidth,
    badge = false,
    badge_value = 0,
    minHeight = {
        xs: "45px",
        sm: "40px",
    },
    minWidth = {
        xs: "45px",
        sm: "40px",
    },
    clickEffect = true,
    onClick,
    className = "",
    children,
    ...props
}) {
    const generatedId = useId();

    const stateKey = `buttonClickEffect-${generatedId}`;

    const { open, close, isOpen } = useUIState();

    const active = isOpen(stateKey);

    const timeoutRef = useRef(null);

    const trigger = useCallback(() => {
        open(stateKey);

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            close(stateKey);
            timeoutRef.current = null;
        }, 200);
    }, [open, close, stateKey]);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const handleClick = (event) => {
        onClick?.(event);

        if (clickEffect) {
            trigger();
        }
    };

    return (
        <MuiButton
            onClick={handleClick}
            className={`${className} ${
                clickEffect && active ? "btn-effect" : ""
            }`}
            sx={{
                ...btnStyle.default,
                borderRadius: "12px",
                minWidth,
                minHeight,
                ...sx,
            }}
            {...props}
        >
            {children || (
                <>
                    {badge && <Badge value={badge_value} />}

                    <Icon
                        strokeWidth={strokeWidth}
                        size={size}
                        color={color}
                    />
                </>
            )}
        </MuiButton>
    );
}
