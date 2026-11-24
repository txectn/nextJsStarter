"use client";

import Link from "next/link";

import styles from "./navBar.module.css";

export default function NavBar() {

    const data = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Blogs", path: "/blogs" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className={styles.navBar}>
            {data.map((item) => (
                <Link
                    href={item.path}
                    className={`underline ${styles.link}`}
                    key={item.path}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}