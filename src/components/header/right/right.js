import { useUIState } from "@/hooks/clientHooks/useUisState";

import { useResponsiveAction } from "@/hooks/clientHooks/useResponsiveAction";

import { Button } from "@/components/buttons/button";

import { Search, ShoppingBag, UserRound, TextAlignJustify } from "lucide-react";

import { iconStyle } from "@/assets/theme/theme";

export default function HeaderRight({ className = "", ...props }) {
    const buttonStyles = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "3.5rem",
        zIndex: "1",
    }

    const { toggle, open } = useUIState();

    const runResponsive = useResponsiveAction();
    const handleOpen = (stateKey) => {
        runResponsive(() => toggle(stateKey));
    };

    return (
        <div className={`${className}`} {...props}>
            <Button
                onClick={() => handleOpen("search")}
                icon={Search}
                size={iconStyle.size.base + 1.75}
                sx={{
                    ...buttonStyles,
                    right: "7.93rem",
                    "@media(max-width: 600px)": {
                        position: "relative",
                        top: "auto",
                        transform: "none",
                        right: "-2.3rem"
                    }
                }}
            />
            <Button
                onClick={() => handleOpen("cart")}
                icon={ShoppingBag}
                badge={true}
                badge_value={2}
                sx={{
                    ...buttonStyles,
                    right: "3.5rem",
                    "@media(max-width: 600px)": {
                        display: "none",
                    }
                }}
            />
            <Button
                onClick={() => handleOpen("user")}
                icon={UserRound} size={iconStyle.size.base + 2}
                sx={{
                    ...buttonStyles,
                    right: "-1rem",
                    "@media(max-width: 600px)": {
                        display: "none",
                    }
                }}
            />
            <Button
                onClick={() => handleOpen("menu")}
                icon={TextAlignJustify} size={iconStyle.size.base + 0}
                sx={{
                    ...buttonStyles,
                    right: "-1rem",
                    display: "none",
                    "@media(max-width: 600px)": {
                        display: "flex",
                        position: "relative",
                        top: "auto",
                        transform: "none",
                        right: "-1.3rem",
                    }
                }}
            />
        </div>
    );
}


