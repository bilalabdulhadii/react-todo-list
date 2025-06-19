import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function DeleteDialog({
    todo,
    openDeleteDialog,
    handleCloseDeleteDialog,
    handleRemoveTodo,
}) {
    return (
        <Dialog
            open={openDeleteDialog}
            onClose={() => handleCloseDeleteDialog()}
            aria-labelledby="delete-task-title"
            aria-describedby="delete-task-description"
        >
            <DialogTitle id="delete-task-title">Delete Task?</DialogTitle>
            <DialogContent>
                <DialogContentText id="delete-task-description">
                    Are you sure you want to delete this task
                    <b> "{todo?.title}" </b> ? This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleCloseDeleteDialog()}>
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        handleRemoveTodo(todo);
                        handleCloseDeleteDialog();
                    }}
                    autoFocus
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
