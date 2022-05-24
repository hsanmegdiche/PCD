import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

export default function UploadButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("File not exist.");

      if (file.type !== "application/pdf")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setLoading(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file" onChange={handleUpload}>
        <Input
          accept="application/pdf"
          id="contained-button-file"
          multiple
          type="file"
        />
        <LoadingButton
          variant="outlined"
          component="span"
          loading={loading}
          onClick={handleClick}
          loadingIndicator="Loading..."
        >
          Upload PDF Version
        </LoadingButton>
      </label>
    </Stack>
  );
}
