
"use client";

const styles = {
    main: {
        maxWidth: "600px",
        margin: "100px auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "28px",
        marginBottom: "16px",
        color: "#222",
    },
    description: {
        color: "#666",
        marginBottom: "24px",
        lineHeight: "1.6",
    },
    button: {
        padding: "12px 24px",
        backgroundColor: "#222",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
    },
};

export default function ShopError({ error, reset }) {
    return (
        <main style={styles.main}>
            <h1 style={styles.title}>
                Something went wrong!
            </h1>

            <p style={styles.description}>
                We couldn't load the products. Please try again.
            </p>

            <button
                style={styles.button}
                onClick={() => reset()}
            >
                Try Again
            </button>

            {process.env.NODE_ENV === "development" && (
                <p style={{ marginTop: "20px", color: "#999" }}>
                    {error.message}
                </p>
            )}
        </main>
    );
}
