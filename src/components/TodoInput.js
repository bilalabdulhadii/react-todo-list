import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useToast } from "../contexts/ToastContext";

export default function TodoInput({ dispatch }) {
    const [titleInput, setTitleInput] = useState("");
    const { showToast } = useToast();

    function handleNewTodo() {
        dispatch({ type: "add", payload: { titleInput } });
        setTitleInput("");
        showToast("Task added successfully");
    }

    return (
        <Grid
            container
            direction="row"
            spacing={1}
            sx={{ display: "flex", justifyContent: "start" }}
        >
            <Grid sx={{ flexGrow: 1 }}>
                <TextField
                    fullWidth
                    id="new-task"
                    label="New Task"
                    variant="outlined"
                    autoComplete="off"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.background.paper,
                        borderRadius: (theme) =>
                            `${theme.shape.borderRadius}px`,
                    }}
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                />
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Button
                    variant="contained"
                    endIcon={<AddIcon />}
                    style={{ width: "100%", height: "100%" }}
                    onClick={handleNewTodo}
                    disabled={titleInput.trim() === ""}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}
