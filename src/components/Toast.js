import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Toast({ toast: { state, message }, hideToast }) {
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={hideToast}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <div>
            <Snackbar open={state} autoHideDuration={1200} onClose={hideToast}>
                <Alert
                    onClose={hideToast}
                    variant="filled"
                    sx={{ width: "100%" }}
                    action={action}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
