import { useMediaQuery, useTheme } from "@mui/material";

export function useResponsiveAction() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const run = (callback) => {
        if (isMobile) {
            // setTimeout(callback, 200);
            setTimeout(callback, 150);
        } else {
            callback();
        }
    };

    return run;
}