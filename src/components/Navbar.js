import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  { title: "Home", to: "/" },
  { title: "Mine", to: "/mine" },
  { title: "Fancy", to: "/fancy" },
  { title: "Vivid", to: "/vivid" },
];

const Navbar = () => (
  <AppBar position="static">
    <Container>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: "flex" }}
        >
          PDF TEST
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
          {pages.map((page) => (
            <Button
              key={page.title}
              component={Link}
              to={page.to}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
