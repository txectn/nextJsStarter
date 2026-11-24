import { Link } from "@/components/link/link";

import { useUIState } from "@/hooks/clientHooks/useUisState";

import { TextAlignJustify } from "lucide-react";

import styles from "./headerLeft.module.css";
import { Button } from "@/components/buttons/button";
import { iconStyle } from "@/assets/theme/theme";

export default function HeaderLeft({ className = "", ...props }) {
    const { toggle } = useUIState();

    const siteName = "LAPHAEL";
    const logo = "/logo.png";

    return (
        <div className={className} {...props}>

            <Button
                onClick={() => toggle("menu")}
                icon={TextAlignJustify} size={iconStyle.size.base + 0}
                sx={{
                    position: "relative",
                    right: "1rem",
                    top: "auto",
                    transform: "none",
                    display: "none",
                    "@media(max-width: 800px)": {
                        display: "flex",
                    },
                    "@media(max-width: 600px)": {
                        display: "none",
                    },
                }}
            />
            <Link
                href="/"
                className={styles.logo}>
                <img
                    src={logo}
                    alt={`${siteName} Logo`}
                    width={iconStyle.size.base}
                />
                <span>{siteName}</span>
            </Link>
        </div>
    );
}