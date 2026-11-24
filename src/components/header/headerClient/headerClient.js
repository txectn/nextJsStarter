"use client";

import { useState, useRef, useEffect } from "react";

import styles from "./headerClient.module.css";

import HeaderLeft from "../left/left";
import HeaderCenter from "../center/center";
import HeaderRight from "../right/right";

export default function HeaderClient() {
    const headerRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current?.offsetHeight || 0;

            setScrolled(
                window.scrollY > 0 &&
                window.scrollY > headerHeight
            );
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={`layout-wrapper ${styles.header} ${scrolled ? styles.scrolled : ""}`}
        >
            <div className={`layout ${styles.container}`}>
                {/* <Suspense fallback={<div></div>}><HeaderLeft className={styles.left} /></Suspense> */}
                <HeaderLeft className={styles.left} />
                <HeaderCenter className={styles.center} />
                <HeaderRight className={styles.right} />
            </div>
        </header>
    );
}