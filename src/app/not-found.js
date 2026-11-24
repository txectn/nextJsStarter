import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
    title: "Page Not Found | Laphael",
    description: "Sorry, the page you're looking for doesn't exist or may have been moved. Explore Laphael's latest collections.",
};

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>

                <h2 className={styles.title}>
                    Page Not Found
                </h2>

                <p className={styles.description}>
                    Oops! This page seems to have gone missing.
                    {/* Let's get you back on track. */}
                </p>

                <Link href="/" className={styles.homeButton}>
                    Back to Home
                </Link>
            </div>
        </main>
    );
}