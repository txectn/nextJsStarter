"use client";

export default function ProductError({ error, reset }) {
    return (
        <main style={styles.main}>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>

            <button onClick={() => reset()}>
                Try Again
            </button>
        </main>
    );
}

const styles = {
    main: {
        maxWidth: "600px",
        margin: "100px auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
};