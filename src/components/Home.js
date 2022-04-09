import { PictureAsPdf } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => (
  <>
    <Box sx={{ textAlign: "center", my: 3 }}>
      <PictureAsPdf sx={{ fontSize: 280, color: "darkred" }} />
    </Box>
    <Typography variant="h1">Welcome to PDF Test!</Typography>
    <Typography variant="body1">
      This application is the ultimate interface for rendering PDF documents
      that are both <strong>Deluxe and Premium</strong>. This app is so good you
      will want to purchase this and discard Adobe PDF forever. If this is not
      the case then you are reading this text for nothing. Buy today!
    </Typography>
  </>
);

export default Home;
