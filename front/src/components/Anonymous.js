import React from "react";
<<<<<<< HEAD
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import Upload from "./sousComponents/Upload";
=======
import Upload from "./sousComponents/Upload";
import { useSnackbar } from "notistack";

>>>>>>> 515ada2b4e0e27a6c7d7af157568f3251ddc532c
function Anonymous() {
  return (
    <div>
      {" "}
      <br />
      CVs
      <br />
      <Upload />
      <br />
      Offres PFes
      <Upload />
    </div>
  );
}

export default Anonymous;
