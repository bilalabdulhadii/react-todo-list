import { createTheme } from "@mui/material/styles";

const basePalette = {
    primary: {
        main: "#2b6cb0", // Elegant deep blue
    },
    secondary: {
        main: "#ed8936", // Warm orange
    },
    custom: {
        accent: "#38b2ac", // Teal accent
    },
};

const lightTheme = createTheme({
    palette: {
        mode: "light",
        ...basePalette,
        background: {
            default: "#f5f7fa", // Page background
            paper: "#ffffff", // Surface (cards, dialogs, etc.)
        },
        text: {
            primary: "#1a202c", // Dark text
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
    },
    shape: {
        borderRadius: 10,
    },
    transitions: {
        custom: {
            smooth: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    transition:
                        "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        ...basePalette,
        background: {
            default: "#1a202c", // Dark page background
            paper: "#2d3748", // Dark card surface
        },
        text: {
            primary: "#f7fafc", // Light text
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
    },
    shape: {
        borderRadius: 10,
    },
    transitions: {
        custom: {
            smooth: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    transition:
                        "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
                },
            },
        },
    },
});

export { lightTheme, darkTheme };
