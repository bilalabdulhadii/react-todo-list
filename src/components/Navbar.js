import { useTheme } from "@emotion/react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Logo from "../assets/logo.png";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Badge,
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
            }}
        >
            <AppBar
                position="static"
                sx={{
                    borderRadius: "20px",
                    backgroundColor: (theme) => theme.palette.primary.main,
                }}
            >
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => window.location.reload()}
                    >
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
                            }}
                        >
                            TODO LIST
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={5} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={() =>
                                setThemeMode(theme.palette.mode !== "dark")
                            }
                        >
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
