import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TodoCard from "./TodoCard";
import { useMemo, useState } from "react";
import Filters from "./Filters";
import DeleteDialog from "./DeleteDialog";
import UpdateDialog from "./UpdateDialog";
import TodoInput from "./TodoInput";
import Grid from "@mui/material/Grid";
import TodoListEmpty from "./TodoListEmpty";
import { useToast } from "../contexts/ToastContext";
import { useTodos } from "../contexts/TodosContext";

export default function TodoList() {
    const { todos, dispatch } = useTodos();

    const { showToast } = useToast();
    const [filterType, setFilterType] = useState("all");
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const [dialogTodo, setDialogTodo] = useState(null);

    const completedTodos = useMemo(() => {
        return todos.filter((t) => {
            return t.isCompleted;
        });
    }, [todos]);

    const activeTodos = useMemo(() => {
        return todos.filter((t) => {
            return !t.isCompleted;
        });
    }, [todos]);

    let todosToBeRendered = todos;

    if (filterType === "completed") {
        todosToBeRendered = completedTodos;
    } else if (filterType === "active") {
        todosToBeRendered = activeTodos;
    }

    const handleSetFilterType = (value) => {
        setFilterType(value);
    };

    const handleRemoveTodo = (removeTodo) => {
        dispatch({ type: "delete", payload: { id: removeTodo.id } });
        showToast("Task deleted");
    };

    const handleUpdateTodo = (updatedTodo) => {
        dispatch({
            type: "update",
            payload: { id: dialogTodo.id, updatedTodo: updatedTodo },
        });
        showToast("Task updated");
    };

    const handleOpenDeleteDialog = (cardTodo) => {
        setDialogTodo(cardTodo);
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        document.activeElement?.blur();
        setOpenDeleteDialog(false);
    };

    const handleOpenUpdateDialog = (cardTodo) => {
        setDialogTodo(cardTodo);
        setOpenUpdateDialog(true);
    };

    const handleCloseUpdateDialog = () => {
        document.activeElement?.blur();
        setOpenUpdateDialog(false);
    };

    const todosList =
        todosToBeRendered.length > 0 ? (
            todosToBeRendered.map((t) => (
                <TodoCard
                    key={t.id}
                    todo={t}
                    handleOpenDeleteDialog={handleOpenDeleteDialog}
                    handleOpenUpdateDialog={handleOpenUpdateDialog}
                    dispatch={dispatch}
                />
            ))
        ) : (
            <TodoListEmpty filter={filterType} />
        );

    return (
        <Box
            sx={{
                width: "100%",
                marginTop: "30px",
                textAlign: "center",
                padding: "10px 0 100px",
            }}
        >
            <Grid
                container
                direction="row"
                spacing={{ xs: 2, sm: 2, md: 1, lg: 1 }}
                sx={{ marginBottom: "30px" }}
            >
                <Grid
                    size={{
                        xs: 12,
                        sm: 12,
                        md: 4,
                        lg: 4,
                    }}
                >
                    <Filters
                        filterType={filterType}
                        handleSetFilterType={handleSetFilterType}
                    />
                </Grid>
                <Grid size="grow">
                    <TodoInput dispatch={dispatch} />
                </Grid>
            </Grid>

            <Stack spacing={2}>{todosList}</Stack>

            <DeleteDialog
                todo={dialogTodo}
                openDeleteDialog={openDeleteDialog}
                handleCloseDeleteDialog={handleCloseDeleteDialog}
                handleRemoveTodo={handleRemoveTodo}
            />
            <UpdateDialog
                todo={dialogTodo}
                openUpdateDialog={openUpdateDialog}
                handleCloseUpdateDialog={handleCloseUpdateDialog}
                handleUpdateTodo={handleUpdateTodo}
            />
        </Box>
    );
}
