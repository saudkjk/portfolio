import React from "react";
import { Snackbar } from "@mui/material";

export default function SnackbarComponent({ snackbar, handleCloseSnackbar }) {
    return (
        <Snackbar
            open={snackbar.open}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
            message={snackbar.message}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        />
    );
}
