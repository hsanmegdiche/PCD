import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
function Copyright(props) {
  return (
    <Container component="main" maxWidth="xs">
      <br />
      <br />
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit">embauchy.tn</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
function Header() {
  return <Copyright sx={{ mt: 8, mb: 4 }} />;
}
export default Header;
