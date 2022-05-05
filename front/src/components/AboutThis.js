import React from "react";
import Typography from "@material-ui/core/Typography";
import PdfIcon from "@material-ui/icons/PictureAsPdf";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

function AboutThis() {
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h5" align="center">
          {" "}
          Merci de cliquer de cliquer sur les liens ci-dessous pour plus
          connaitre plus sur ce projet
        </Typography>
      </div>
      <div style={{ marginTop: "50px", marginLeft: "500px" }}>
        <PdfIcon fontSize="large" />
        <PdfIcon fontSize="large" style={{ marginLeft: "300px" }} />
      </div>
    </div>
  );
}

export default AboutThis;
