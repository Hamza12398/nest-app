import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px",
      }}
    >
      <CircularProgress
        style={{
          color: "white",
        }}
      />
    </Box>
  );
}
