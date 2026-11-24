import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

import Providers from "../context/providers";

import "../assets/css/App.css";
import "../assets/css/reset.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata = {
  title: "Shop | Laphael",
  description: "Discover the latest fashion trends at Laphael. Explore our collection of stylish clothing and find quality pieces that match your style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html >
  );
}
