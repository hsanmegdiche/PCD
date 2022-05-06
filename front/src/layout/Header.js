import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { GlobalState } from "../components/GlobalState";
import Logout from "../components/Logout";
import InfoIcon from "@mui/icons-material/Info";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <IconButton href="/">
          <HomeIcon color="primary" />
        </IconButton>
        <Link
          to="/aboutthis"
          style={{ textDecoration: "none", marginLeft: "1350px" }}
        >
          <IconButton>
            <InfoIcon color="inherit" />
          </IconButton>
        </Link>
        {isLogged && <Logout />}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
