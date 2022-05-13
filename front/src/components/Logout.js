import { IconButton, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import axios from "axios";
import { GlobalState } from "./GlobalState";

export default function Logout() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const handleSubmit = async () => {
    try {
      await axios.get("/user/logout", {
        headers: {
          Authorization: token,
        },
      });
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <MenuItem onClick={handleSubmit} sx={{ m: 1 }}>
      Logout
    </MenuItem>
  );
}
