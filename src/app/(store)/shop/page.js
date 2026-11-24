
import { Suspense } from "react";
import Link from "next/link";

const styles = {
    main: {
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        fontSize: "32px",
        marginBottom: "30px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "24px",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px 0",
        // border: "1px solid #eee",
        borderRadius: "12px",
        textDecoration: "none",
        color: "#222",
    },
    image: {
        width: "100%",
        height: "auto",
        objectFit: "contain",
        backgroundColor: "#f8f8f8",
        borderRadius: "8px",
    },
    title: {
        fontSize: "16px",
        fontWeight: "600",
    },
    price: {
        fontSize: "20px",
        fontWeight: "700",
    },
    rating: {
        fontSize: "13px",
        color: "#777",
    },
    loading: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "24px",
    },
    skeleton: {
        height: "300px",
        backgroundColor: "#f1f1f1",
        borderRadius: "12px",
    },
};

export const metadata = {
    title: "Shop | Laphael",
    description:
        "Explore Laphael's clothing collection and discover stylish outfits, the latest fashion trends, and quality pieces to match your personal style.",
};

function ProductLoading() {
    return (
        <div style={styles.loading}>
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} style={styles.skeleton} />
            ))}
        </div>
    );
}

async function ProductList() {
    const response = await fetch(
        "https://dummyjson.com/products?limit=12"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return (
        <div style={styles.grid}>
            {data.products.map((product) => (
                <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    style={styles.card}
                >
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={styles.image}
                    />

                    <h2 style={styles.title}>
                        {product.title}
                    </h2>

                    <p style={styles.price}>
                        ${product.price}
                    </p>

                    <p style={styles.rating}>
                        {/* ⭐ {product.rating} · {product.category} */}
                        {product.category}
                        {/* {product.stock > 10 ? "+50" : product.stock} In Stock  */}
                    </p>
                </Link>
            ))}
        </div>
    );
}

export default function Shop() {
    return (
        <main style={styles.main}>
            <h1 style={styles.heading}>Shop Page</h1>

            <hr style={{ marginBottom: "30px" }} />

            <Suspense fallback={<ProductLoading />}>
                <ProductList />
            </Suspense>
        </main>
    );
}
