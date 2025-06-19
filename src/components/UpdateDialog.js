import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
        >
            <DialogTitle id="update-task-title">Update Task</DialogTitle>
            <DialogContent>
                <DialogContentText id="update-task-description">
                    Make changes to your task details below.
                </DialogContentText>
                <TextField
                    required
                    margin="dense"
                    id="title"
                    name="title"
                    label="Task Title"
                    type="text"
                    autoComplete="off"
                    fullWidth
                    variant="standard"
                    value={updatedTodo.title}
                    onChange={(e) =>
                        setUpdatedTodo({
                            ...updatedTodo,
                            title: e.target.value,
                        })
                    }
                />
                <TextField
                    required
                    margin="dense"
                    id="description"
                    name="description"
                    label="Task Description"
                    type="text"
                    autoComplete="off"
                    fullWidth
                    variant="standard"
                    value={updatedTodo.description}
                    onChange={(e) =>
                        setUpdatedTodo({
                            ...updatedTodo,
                            description: e.target.value,
                        })
                    }
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleCloseUpdateDialog()}>
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        handleUpdateTodo(updatedTodo);
                        handleCloseUpdateDialog();
                    }}
                >
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
}
