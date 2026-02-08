import { useTheme } from "@emotion/react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../assets/logo_white.png";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Avatar,
} from "@mui/material";

export default function Navbar({ setThemeMode }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                flexGrow: 1,
                position: "sticky",
                top: "0",
                zIndex: "1000",
                paddingTop: "20px",
            }}>
            <AppBar
                position="static"
                sx={{
                    borderRadius: "20px",
                    backgroundColor: (theme) => theme.palette.primary.main,
                }}>
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => window.location.reload()}>
                        <Avatar
                            alt="Logo"
                            src={Logo}
                            sx={{ width: 32, height: 32 }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                userSelect: "none",
                                marginLeft: "5px",
                                fontFamily: "serif",
                                fontSize: "1.5em",
                            }}>
                            TODO LIST
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="view github repository"
                            component="a"
                            href="https://github.com/bilalabdulhadii/react-todo-list"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: "#fff",
                                mr: 1,
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(255, 255, 255, 0.22)",
                                },
                            }}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="toggle theme"
                            onClick={() =>
                                setThemeMode(theme.palette.mode !== "dark")
                            }
                            sx={{
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(255, 255, 255, 0.22)",
                                },
                            }}>
                            {theme.palette.mode === "light" ? (
                                <DarkModeIcon />
                            ) : (
                                <LightModeIcon />
                            )}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
