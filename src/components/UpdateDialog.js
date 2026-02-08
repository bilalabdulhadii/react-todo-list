import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function UpdateDialog({
    todo,
    openUpdateDialog,
    handleCloseUpdateDialog,
    handleUpdateTodo,
}) {
    const [updatedTodo, setUpdatedTodo] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        if (todo) {
            setUpdatedTodo({
                title: todo.title,
                description: todo.description,
            });
        }
    }, [todo]);

    return (
        <Dialog
            open={openUpdateDialog}
            onClose={() => handleCloseUpdateDialog()}
            aria-labelledby="update-task-title"
            aria-describedby="update-task-description"
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
                },
            }}
        >
            <Box
                sx={{
                    px: 3,
                    py: 2.5,
                    background:
                        "linear-gradient(135deg, rgba(43,108,176,0.2), rgba(237,137,54,0.2))",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                }}
            >
                <DialogTitle
                    id="update-task-title"
                    sx={{
                        p: 0,
                        fontWeight: 700,
                        letterSpacing: 0.2,
                    }}
                >
                    Update Task
                </DialogTitle>
                <DialogContentText
                    id="update-task-description"
                    sx={{ mt: 0.5, color: "text.secondary" }}
                >
                    Refine the details and keep your task clear and actionable.
                </DialogContentText>
            </Box>
            <DialogContent sx={{ pt: 3, pb: 2 }}>
                <TextField
                    required
                    margin="dense"
                    id="title"
                    name="title"
                    label="Task Title"
                    type="text"
                    autoComplete="off"
                    fullWidth
                    variant="outlined"
                    value={updatedTodo.title}
                    onChange={(e) =>
                        setUpdatedTodo({
                            ...updatedTodo,
                            title: e.target.value,
                        })
                    }
                    sx={{
                        mb: 2,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                        },
                    }}
                />
                <TextField
                    required
                    margin="dense"
                    id="description"
                    name="description"
                    label="Task Description"
                    autoComplete="off"
                    fullWidth
                    multiline
                    minRows={4}
                    variant="outlined"
                    value={updatedTodo.description}
                    onChange={(e) =>
                        setUpdatedTodo({
                            ...updatedTodo,
                            description: e.target.value,
                        })
                    }
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                        },
                    }}
                />
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3 }}>
                <Button
                    onClick={() => handleCloseUpdateDialog()}
                    variant="outlined"
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        handleUpdateTodo(updatedTodo);
                        handleCloseUpdateDialog();
                    }}
                    variant="contained"
                >
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
}
