import { Suspense } from "react";

const styles = {
    main: {
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
    },

    product: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "center",
    },

    image: {
        width: "100%",
        maxHeight: "450px",
        objectFit: "contain",
        backgroundColor: "#f8f8f8",
        borderRadius: "12px",
    },

    details: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },

    badge: {
        display: "inline-block",
        width: "fit-content",
        padding: "6px 12px",
        backgroundColor: "#e8f5e9",
        color: "#2e7d32",
        borderRadius: "20px",
        fontSize: "13px",
    },

    title: {
        fontSize: "28px",
        fontWeight: "700",
        color: "#222",
        margin: 0,
    },

    price: {
        fontSize: "26px",
        fontWeight: "700",
        color: "#222",
        margin: 0,
    },

    description: {
        fontSize: "15px",
        lineHeight: "1.7",
        color: "#666",
    },

    skeletonContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "center",
    },

    skeletonDetails: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },

    skeleton: {
        background: "linear-gradient(90deg, #eee 25%, #f7f7f7 50%, #eee 75%)",
        backgroundSize: "200% 100%",
        borderRadius: "8px",
        animation: "shimmer 1.5s infinite",
    },

    skeletonImage: {
        width: "100%",
        height: "450px",
        borderRadius: "12px",
    },

    skeletonBadge: {
        width: "100px",
        height: "28px",
    },

    skeletonTitle: {
        width: "85%",
        height: "35px",
    },

    skeletonPrice: {
        width: "120px",
        height: "30px",
    },

    skeletonDescription: {
        width: "100%",
        height: "15px",
    },

    skeletonShort: {
        width: "65%",
        height: "15px",
    },

    skeletonInfo: {
        width: "45%",
        height: "16px",
    },
};

// Fetch product
async function getProduct(slug) {
    const response = await fetch(
        `https://dummyjson.com/products/${slug}`
    );

    if (!response.ok) {
        return null;
    }

    return response.json();
}

// Dynamic metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return {
            title: "Product Not Found | Laphael",
        };
    }

    return {
        title: `${product.title} | Laphael`,
        description: product.description,
    };
}

// Loading skeleton
function ProductLoading() {
    const skeleton = (style) => ({
        ...styles.skeleton,
        ...style,
    });

    return (
        <div className="product-skeleton" style={styles.skeletonContainer}>
            <div style={skeleton(styles.skeletonImage)} />

            <div style={styles.skeletonDetails}>
                <div style={skeleton(styles.skeletonBadge)} />
                <div style={skeleton(styles.skeletonTitle)} />
                <div style={skeleton(styles.skeletonPrice)} />
                <div style={skeleton(styles.skeletonDescription)} />
                <div style={skeleton(styles.skeletonShort)} />

                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        style={skeleton(styles.skeletonInfo)}
                    />
                ))}
            </div>

            <style>{`
                @keyframes shimmer {
                    from { background-position: 200% 0; }
                    to { background-position: -200% 0; }
                }

                @media (max-width: 768px) {
                    .product-skeleton {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}

// Product content
async function ProductContent({ params }) {
    const { slug } = await params;

    // Simulate 3-second loading
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const product = await getProduct(slug);

    if (!product) {
        return <h1>Product not found!</h1>;
    }

    return (
        <div style={styles.product}>
            <img
                src={product.thumbnail}
                alt={product.title}
                style={styles.image}
            />

            <div style={styles.details}>
                <span style={styles.badge}>
                    {product.category}
                </span>

                <h1 style={styles.title}>
                    {product.title}
                </h1>

                <p style={styles.price}>
                    ${product.price}
                </p>

                <p style={styles.description}>
                    {product.description}
                </p>

                <p style={{...styles.description, color: "black"}}>Rating: ⭐ {product.rating}</p>
                <p style={{...styles.description, color: "black"}}>Category: {product.category}</p>
                <p style={{...styles.description, color: "black"}}>Brand: {product.brand ? product.brand : "Unknown"}</p>
                <p style={{...styles.description, color: "black"}}>Available stock: {product.stock}</p>
            </div>
        </div>
    );
}

// Page
export default function Product({ params }) {
    return (
        <main style={styles.main}>
            <Suspense fallback={<ProductLoading />}>
                <ProductContent params={params} />
            </Suspense>
        </main>
    );
}