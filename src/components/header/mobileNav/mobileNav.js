// "use client";

// import { Suspense, useState, useEffect, useRef } from "react";

// import { usePathname } from "next/navigation";

// import { UserRound, House, Store, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/buttons/button";
// import { Badge } from "@/components/badge";

// import Link from "next/link";

// import { useUIState } from "@/hooks/clientHooks/useUisState"

// import { useResponsiveAction } from "@/hooks/clientHooks/useResponsiveAction";

// import styles from "./mobileNav.module.css";

// import { iconStyle } from "@/assets/theme/theme";

// function MobileNavContent() {
//     const mobileNavRef = useRef(null);

//     const [scrolled, setScrolled] = useState(false);

//     const { toggle, isOpen } = useUIState();

//     const runResponsive = useResponsiveAction();

//     const pathname = usePathname();

//     useEffect(() => {
//         let lastScrollY = window.scrollY;

//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             const headerHeight =
//                 mobileNavRef.current?.offsetHeight || 0;

//             if (currentScrollY <= 0) {
//                 setScrolled(false);
//             }
//             else if (
//                 currentScrollY > lastScrollY &&
//                 currentScrollY > headerHeight
//             ) {
//                 setScrolled(true);
//             }
//             else if (currentScrollY < lastScrollY) {
//                 setScrolled(false);
//             }

//             lastScrollY = currentScrollY;
//         };

//         window.addEventListener("scroll", handleScroll, {
//             passive: true,
//         });

//         handleScroll();

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const isCurrentPath = (path) => {
//         if (path === "/") {
//             return pathname === "/";
//         }

//         return pathname.startsWith(path);
//     };

//     const handleClick = (href) => {
//         if (pathname === href) {
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//         }
//     };

//     const handleOpen = (stateKey) => {
//         runResponsive(() => toggle(stateKey));
//     };


//     const NavButton = ({
//         onClick,
//         icon: Icon,
//         strokeWidth,
//         size = iconStyle.size.base,
//         color = iconStyle.color.main,
//         label,
//         sx,
//         href,
//         badge = false,
//         badge_value = 0,
//         currentPath = false,
//     }) => {
//         return (
//             <Button
//                 component={href ? Link : "button"}
//                 href={href ? href : undefined}
//                 onClick={href ? () => handleClick(href) : onClick}
//                 clickEffect={false}
//                 sx={{
//                     padding: 0,
//                     borderRadius: 0,
//                     minHeight: "auto",
//                     minWidth: "auto",
//                     width: "100%",
//                     height: "100%",

//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "0.5rem",
//                     flex: "1",

//                     "&:hover": {
//                         backgroundColor: "transparent",
//                     },

//                     "&:active": {
//                         backgroundColor: "transparent",
//                     },

//                     position: "relative",

//                     "&::before": {
//                         content: '""',
//                         position: "absolute",
//                         top: 0,
//                         left: "50%",

//                         width: "50%",
//                         height: "2px",

//                         backgroundColor: "var(--brand-primary)",

//                         transform: "translateX(-50%) scaleX(0)",
//                         transformOrigin: "center",

//                         animation: currentPath
//                             ? "revealWidth 0.3s ease forwards"
//                             : "none",

//                         "@keyframes revealWidth": {
//                             from: {
//                                 transform: "translateX(-50%) scaleX(0)",
//                             },
//                             to: {
//                                 transform: "translateX(-50%) scaleX(1)",
//                             },
//                         },
//                     },

//                     ...sx,
//                 }}
//                 className={styles.navCol}
//             >
//                 <span className={`${styles.navIcon}`}>
//                     {badge && (
//                         <Badge
//                             sx={{
//                                 top: "-0.5rem",
//                                 right: "-1rem",
//                                 "@media(max-width: 600px)": {
//                                     top: "-0.5rem",
//                                     right: "-1rem",
//                                 },
//                             }}
//                             value={badge_value}
//                         />
//                     )}

//                     <Icon
//                         strokeWidth={strokeWidth}
//                         size={size}
//                         color={currentPath ? "var(--brand-primary)" : color}
//                     />
//                 </span>

//                 <span style={{ color: currentPath ? "var(--brand-primary)" : color }} className={`${styles.navLabel}`}>
//                     {label}
//                 </span>
//             </Button >
//         );
//     };

//     return (
//         <nav
//             ref={mobileNavRef}
//             className={`${styles.mobileNav} ${scrolled ? styles.scrolled : ""}`}
//         >
//             <NavButton
//                 href="/"
//                 icon={House}
//                 label="Home"
//                 currentPath={!(isOpen("cart") || isOpen("user")) && isCurrentPath("/")}
//             />

//             <NavButton
//                 href="/shop"
//                 icon={Store}
//                 label="Shop"
//                 currentPath={!(isOpen("cart") || isOpen("user")) && isCurrentPath("/shop")}
//             />

//             <NavButton
//                 onClick={() => handleOpen("cart")}
//                 icon={ShoppingCart}
//                 strokeWidth={1.9}
//                 label="Cart"
//                 badge={true}
//                 badge_value={5}
//                 currentPath={isOpen("cart")}
//             />

//             <NavButton
//                 onClick={() => handleOpen("user")}
//                 icon={UserRound}
//                 size={iconStyle.size.base + 1.5}
//                 label="Profile"
//                 currentPath={isOpen("user")}
//             />
//         </nav>
//     );
// }


// export default function MobileNav({ fallback = null, ...props }) {
//     return (
//         <Suspense fallback={fallback}>
//             <MobileNavContent {...props} />
//         </Suspense>
//     );
// }
































"use client";

import { Suspense, useState, useEffect, useRef } from "react";

import { usePathname } from "next/navigation";

import { UserRound, House, Store, ShoppingCart } from "lucide-react";

import { Button } from "@/components/buttons/button";
import { Badge } from "@/components/badge";

import Link from "next/link";

import { useUIState } from "@/hooks/clientHooks/useUisState";
import { useResponsiveAction } from "@/hooks/clientHooks/useResponsiveAction";

import styles from "./mobileNav.module.css";

import { iconStyle } from "@/assets/theme/theme";

// Reusable navigation button
function NavButton({
    onClick,
    onNavigate,
    icon: Icon,
    strokeWidth,
    size = iconStyle.size.base,
    color = iconStyle.color.main,
    label,
    sx,
    href,
    badge = false,
    badge_value = 0,
    currentPath = false,
}) {
    return (
        <Button
            component={href ? Link : "button"}
            href={href ? href : undefined}
            onClick={(event) => {
                if (href) {
                    onNavigate?.(href);
                } else {
                    onClick?.(event);
                }
            }}
            sx={{
                padding: 0,
                borderRadius: 0,
                minHeight: "auto",
                minWidth: "auto",
                width: "100%",
                height: "100%",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                flex: "1",

                position: "relative",

                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "50%",

                    width: "50%",
                    height: "2px",

                    backgroundColor: "var(--brand-primary)",

                    transform: "translateX(-50%) scaleX(0)",
                    transformOrigin: "center",

                    animation: currentPath
                        ? "revealWidth 0.3s ease forwards"
                        : "none",

                    "@keyframes revealWidth": {
                        from: {
                            transform: "translateX(-50%) scaleX(0)",
                        },
                        to: {
                            transform: "translateX(-50%) scaleX(1)",
                        },
                    },
                },

                ...sx,
            }}
            className={styles.navCol}
        >
            <span className={`${styles.navIcon}`}>
                {badge && (
                    <Badge
                        sx={{
                            top: "-0.5rem",
                            right: "-1rem",
                            "@media(max-width: 600px)": {
                                top: "-0.5rem",
                                right: "-1rem",
                            },
                        }}
                        value={badge_value}
                    />
                )}

                <Icon
                    strokeWidth={strokeWidth}
                    size={size}
                    color={currentPath ? "var(--brand-primary)" : color}
                />
            </span>

            <span
                style={{
                    color: currentPath ? "var(--brand-primary)" : color,
                }}
                className={`${styles.navLabel}`}
            >
                {label}
            </span>
        </Button>
    );
}

// Main navigation
function MobileNavContent() {
    const mobileNavRef = useRef(null);

    const [scrolled, setScrolled] = useState(false);

    const { toggle, isOpen } = useUIState();

    const runResponsive = useResponsiveAction();

    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            const headerHeight =
                mobileNavRef.current?.offsetHeight || 0;

            if (currentScrollY <= 0) {
                setScrolled(false);
            }
            else if (
                currentScrollY > lastScrollY &&
                currentScrollY > headerHeight
            ) {
                setScrolled(true);
            }
            else if (currentScrollY < lastScrollY) {
                setScrolled(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isCurrentPath = (path) => {
        if (path === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(path);
    };

    const handleClick = (href) => {
        if (pathname === href) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    const handleOpen = (stateKey) => {
        runResponsive(() => toggle(stateKey));
    };

    return (
        <nav
            ref={mobileNavRef}
            className={`${styles.mobileNav} ${scrolled ? styles.scrolled : ""}`}
        >
            <NavButton
                href="/"
                onNavigate={handleClick}
                icon={House}
                label="Home"
                currentPath={
                    !(isOpen("cart") || isOpen("user")) &&
                    isCurrentPath("/")
                }
            />

            <NavButton
                href="/shop"
                onNavigate={handleClick}
                icon={Store}
                label="Shop"
                currentPath={
                    !(isOpen("cart") || isOpen("user")) &&
                    isCurrentPath("/shop")
                }
            />

            <NavButton
                onClick={() => handleOpen("cart")}
                icon={ShoppingCart}
                strokeWidth={1.9}
                label="Cart"
                badge={true}
                badge_value={5}
                currentPath={isOpen("cart")}
            />

            <NavButton
                onClick={() => handleOpen("user")}
                icon={UserRound}
                size={iconStyle.size.base + 1.5}
                label="Profile"
                currentPath={isOpen("user")}
            />
        </nav>
    );
}

// Export
export default function MobileNav({ fallback = null, ...props }) {
    return (
        <Suspense fallback={fallback}>
            <MobileNavContent {...props} />
        </Suspense>
    );
}
