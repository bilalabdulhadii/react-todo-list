import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import { useToast } from "../contexts/ToastContext";

export default function TodoCard({
    todo,
    handleOpenDeleteDialog,
    handleOpenUpdateDialog,
    dispatch,
}) {
    const { showToast } = useToast();

    function handleCheckTodo() {
        dispatch({ type: "completed", payload: { id: todo.id } });
        if (!todo.isCompleted) {
            showToast("Task marked as completed");
        } else {
            showToast("Task marked as not completed");
        }
    }

    return (
        <Card
            sx={{
                transition:
                    "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
            }}
        >
            <CardContent sx={{ textAlign: "left" }}>
                <Grid container direction="row" spacing={2}>
                    <Grid size={8}>
                        <Typography
                            variant="h5"
                            component="div"
                            style={{
                                textDecoration: todo.isCompleted
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            style={{
                                textDecoration: todo.isCompleted
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.description}
                        </Typography>
                    </Grid>
                    <Grid
                        size={4}
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            aria-label="delete"
                            color="primary"
                            onClick={handleCheckTodo}
                        >
                            {todo.isCompleted ? (
                                <CheckCircleIcon />
                            ) : (
                                <CheckCircleOutlineIcon />
                            )}
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            color="primary"
                            onClick={() => handleOpenUpdateDialog(todo)}
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            color="primary"
                            onClick={() => handleOpenDeleteDialog(todo)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
