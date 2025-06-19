import "./App.css";
import Navbar from "./components/Navbar.js";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme.js";
import Container from "@mui/material/Container";
import TodoList from "./components/TodoList.js";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import { ToastProvider } from "./contexts/ToastContext.js";
import { TodosProvider } from "./contexts/TodosContext.js";

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark";
    });

    useEffect(() => {
        const html = document.documentElement;
        const theme = darkMode ? "dark" : "light";
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const setThemeMode = (isDark) => {
        setDarkMode(isDark);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <TodosProvider>
                <ToastProvider>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "100vh",
                            backgroundColor: (theme) =>
                                theme.palette.background.default,
                        }}
                    >
                        <div className="App">
                            <Container maxWidth="md">
                                <Navbar setThemeMode={setThemeMode} />
                                <TodoList />
                            </Container>
                        </div>
                    </Box>
                </ToastProvider>
            </TodosProvider>
        </ThemeProvider>
    );
}

export default App;
