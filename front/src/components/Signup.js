import React from "react";
import Yminsignup from "./sousComponents/Yminsignup.js";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div style={{ marginLeft: "200px", marginTop: "50px" }}>
        <p></p>
        <div>
          <img
            alt=""
            src="https://www.es-france.com/img/cms/Recrutement/recrutement-ES.png"
            style={{
              paddingLeft: "230px",
              marginTop: "40px",
              height: "150px",
              width: "auto",
            }}
          />
        </div>
        <div>
          <Yminsignup />
        </div>
      </div>
    </div>
  );
}
export default Signup;
