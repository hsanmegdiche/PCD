import React from "react";
import Upload from "./sousComponents/Upload";
import { useSnackbar } from "notistack";

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
