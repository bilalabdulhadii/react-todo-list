import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Filters({ filterType, handleSetFilterType }) {
    return (
        <ToggleButtonGroup
            color="primary"
            value={filterType}
            exclusive
            onChange={(e) => {
                handleSetFilterType(e.target.value);
            }}
            aria-label="Platform"
            sx={{
                height: "100%",
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
            }}
        >
            <ToggleButton value="all">ALl</ToggleButton>
            <ToggleButton value="active">Active</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
        </ToggleButtonGroup>
    );
}
