import { Box } from "@mui/material";

export function Badge({ value = 0, sx, ...props }) {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "3px",
                right: "-1px",
                zIndex: 2,
                width: "17px",
                height: "17px",
                borderRadius: "50%",
                backgroundColor: "var(--badge-bg)",
                color: "var(--badge-color)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "10px",
                "@media(max-width: 600px)": {
                    right: "2.5px",
                    top: "3.5px",
                },
                ...sx
            }}
            {...props}
        >
            {value}
        </Box>
    )
}