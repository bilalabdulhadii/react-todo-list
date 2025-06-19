import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TodoListEmpty({ filter }) {
    let message;

    switch (filter) {
        case "all":
            message = "No tasks yet. Add your first one! 📝";
            break;
        case "active":
            message = "No active tasks. Time to chill ☕";
            break;
        case "completed":
            message = "You haven't completed anything yet. 🚀";
            break;
        default:
            message = "Nothing to show.";
    }
    return (
        <Box
            sx={{
                p: 3,
                textAlign: "center",
                border: "2px dashed",
                borderColor: "divider",
                borderRadius: (theme) => `${theme.shape.borderRadius}px`,
                color: (theme) => theme.palette.secondary.main,
            }}
        >
            <Typography variant="body1">{message}</Typography>
        </Box>
    );
}
