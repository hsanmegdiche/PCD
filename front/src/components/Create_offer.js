import * as React from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green } from "@mui/material/colors";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import UploadButton from "./UploadButton";

const theme = createTheme();

export default function offer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: green[500] }}>
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an offer
          </Typography>
          <br></br>
          <br></br>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={JD}
              sx={{ width: 450 }}
              renderInput={(params) => (
                <TextField {...params} label="JOB TITLE" />
              )}
            />
            <br></br>
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              sx={{ width: 450 }}
              minRows={3}
              maxRows={4}
            />
            <br></br>
            <br></br>
            <Autocomplete
              multiple
              id="tags-standard"
              options={technicalskills}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="TECHNICAL SKILLS"
                  placeholder="Favorites"
                />
              )}
            />
            <br></br>
            <Autocomplete
              multiple
              id="tags-standard"
              options={Languages}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Languages"
                  placeholder="Favorites"
                />
              )}
            />
            <br></br> <br></br>
            <TextField
              label="Duration"
              id="outlined-start-adornment"
              sx={{ width: 450 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">month</InputAdornment>
                ),
              }}
            />
            <br></br>
            <br></br>
            <UploadButton />
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              create offer
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
const technicalskills = [
  { title: "ReactJS" },
  { title: "NodeJS" },
  { title: "HTML" },
  { title: "CSS" },
  { title: "C++" },
  { title: "JAVA" },
  { title: "C" },
  { title: "Python" },
  { title: "R" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
];

const Languages = [
  { title: "english" },
  { title: "french" },
  { title: "arabic" },
  { title: "german" },
  { title: "italian" },
];

const JD = [
  { label: "full stack developer" },
  { label: "frontend developer" },
  { label: "backend developer " },
  { label: "machine learning engineer" },
  { label: "data scientist" },
  { label: "embedded software engineer" },
  { label: "security analyst" },
  { label: "business intelligence analyst" },
  { label: "devops engineer" },
  { label: "cloud engineer" },
  { label: "Database administrator" },
  { label: "Product manager" },
  { label: "software engineer" },
  { label: "Software tester" },
  { label: "project manager" },
  { label: "UI/UX  designer" },
  { label: "IT support " },
  { label: "3D designer" },
  { label: "Graphic designer" },
  { label: "IT support" },
];
