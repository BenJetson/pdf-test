import { Error } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NotFound = () => (
  <>
    <Box sx={{ textAlign: "center" }}>
      <Error sx={{ fontSize: 280, my: 3, color: "red" }} />
      <Typography variant="h1">HTTP 404</Typography>
      <Typography variant="body1">This page does not exist. </Typography>
    </Box>
  </>
);

export default NotFound;
