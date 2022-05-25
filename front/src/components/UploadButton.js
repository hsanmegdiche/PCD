import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";


const Input = styled("input")({
  display: "none",
});

export default function UploadButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading..."
          variant="outlined"
          component="span"
        >
          Upload CV
        </LoadingButton>
      </label>
    </Stack>
  );
}
