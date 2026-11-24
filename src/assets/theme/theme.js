export const breakpoints = Object.freeze({
  sd: 600,
  md: 960,
  lg: 1200,
});

export const iconStyle = Object.freeze({
  size: {
    xs: 12,
    sm: 16,
    base: 20,
    base_md: 22,
    md: 24,
    lg: 28,
    xl: 32,
  },
  color: {
    main: "var(--text-main)",
    inverse: "var(--text-inverse)",
  }
});

export const btnStyle = Object.freeze({
  default: {
    backgroundColor: "var(--bg-main)",
    color: "var(--text-main)",
    fontSize: "var(--fs-sm)",
    fontWeight: "var(--fw-regular)",
    textTransform: "none",
    border: "none",
    boxShadow: "none",

    "@media (pointer: fine)": {
      "&:hover": {
        backgroundColor: "var(--bg-hover)",
      },
    },

    "@media (pointer: coarse)": {
      "&:active": {
        backgroundColor: "var(--bg-hover)",
      },
    },

    "& .MuiTouchRipple-child": {
      color: "var(--mui-ripple-color-default)",
    },

    "&.btn-effect": {
      "@media (pointer: coarse)": {
        backgroundColor: "var(--bg-hover)",
      },
    },
  },

  darkSurface: {
    backgroundColor: "var(--bg-inverse)",
    color: "var(--text-inverse)",
    fontSize: "var(--fs-sm)",
    fontWeight: "var(--fw-regular)",
    textTransform: "none",
    border: "none",
    boxShadow: "none",

    "@media (pointer: fine)": {
      "&:hover": {
        backgroundColor: "var(--mui-hover-bg-inverse)",
      },
    },

    "@media (pointer: coarse)": {
      "&:active": {
        backgroundColor: "var(--mui-hover-bg-inverse)",
      },
    },

    "& .MuiTouchRipple-child": {
      color: "var(--mui-ripple-color-inverse)",
    },
  },

  darkElement: {
    backgroundColor: "var(--bg-inverse)",
    color: "var(--text-inverse)",
    fontSize: "var(--fs-sm)",
    fontWeight: "var(--fw-regular)",
    textTransform: "none",
    border: "none",
    boxShadow: "none",

    "@media (pointer: fine)": {
      "&:hover": {
        backgroundColor: "var(--mui-hover-bg-dark)",
      },
    },

    "@media (pointer: coarse)": {
      "&:active": {
        backgroundColor: "var(--mui-hover-bg-dark)",
      },
    },

    "& .MuiTouchRipple-child": {
      color: "var(--mui-ripple-color-dark)",
    },
  },

  primary: {
    backgroundColor: "var(--brand-primary)",
    color: "var(--text-inverse)",
    fontSize: "var(--fs-sm)",
    fontWeight: "var(--fw-regular)",
    textTransform: "none",
    border: "none",
    boxShadow: "none",

    "@media (pointer: fine)": {
      "&:hover": {
        backgroundColor: "var(--mui-hover-bg-primary)",
      },
    },

    "@media (pointer: coarse)": {
      "&:active": {
        backgroundColor: "var(--mui-hover-bg-primary)",
      },
    },

    "& .MuiTouchRipple-child": {
      color: "var(--mui-ripple-color-primary)",
    },
  },
});

export const drawerStyle = Object.freeze({
  horizontal: {
    paper: {
      "& .MuiDrawer-paper": {
        width: 370,
        backgroundColor: "var(--bg-main)",
        color: "var(--text-main)",
        boxShadow: "none",
        "@media (max-width: 400px)": {
          width: 300,
        },
        "@media (max-width: 350px)": {
          width: 260,
        },
        "@media (max-width: 260px)": {
          width: "100%",
        },
      },
    },

    backdrop: {
      backgroundColor: "rgb(from var(--bg-inverse) r g b / 40%)",
    }
  },

  vertical: {
    paper: {
      "& .MuiDrawer-paper": {
        height: 300,
        backgroundColor: "var(--bg-main)",
        color: "var(--text-main)",
        boxShadow: "none",
      },
    },

    backdrop: {
      backgroundColor: "rgb(from var(--bg-inverse) r g b / 40%)",
    }
  },
});