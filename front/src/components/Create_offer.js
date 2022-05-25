import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { green } from "@mui/material/colors";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import UploadButton from "./UploadButton";
import { GlobalState } from "./GlobalState";
import axios from "axios";

const theme = createTheme();

function offer() {

  const [offer_title, setof] = useState("");
  const [description, setde] = useState("");
  const [skills, setsk] = useState("");
  const [Languages, setla] = useState("");
  const [pdf, setpd] = useState("");
  const [duration, setdu] = useState("");

  // States for checking the errors

  // Handling the name change

  // Handling the email change
  const handlede = (e) => {
    setde(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post("/offer/create", {
    //   offer_title,description,skills,Languages,pdf,duration

    // });
    console.log(offer_title);
    console.log(description);

    console.log(skills);
    console.log(Languages);
    console.log(duration);
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
              disablePortal
              id="combo-box-demo"
              options={JD}
              onChange={(event, value) => {
                setof(value.label);
              }}
              sx={{ width: 450 }}
              renderInput={(params) => (
                <TextField {...params} label="JOB TITLE" />


                <TextField
              id="outlined-multiline-flexible"
              label="Description"
              onChange={handlede}
              multiline
              sx={{ width: 450 }}
              minRows={3}

              <Autocomplete
              multiple
              id="tags-standard"
              onChange={(event, value) => {
                setsk(value);
              }}
              options={technicalskills}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                />
              )}
            />
            <br></br> <br></br>
            <br></br> 
            <br></br>
            <TextField
              label="Duration"
              id="outlined-start-adornment"
              onChange={(event, value) => {
                setdu(value);
              }}
              sx={{ width: 450 }}
              InputProps={{
                startAdornment: (
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
const technicalskills = [
  { label: "Graphic designer" },
  { label: "IT support" },
];
export default Offer;