import axios from "axios";
import React, { Component } from "react";
const state = {
  // Initially, no file is selected
  selectedFile: null,
};

// On file select (from the pop up)
const onFileChange = (e) => {
  // Update the state
  state.selectedFile = e.target.files[0];
};

// On file upload (click the upload button)
const onFileUpload = async (e) => {
  if (!state.selectedFile) return alert("File not exist.");

  if (state.selectedFile.size > 100000 * 100000)
    return alert("Size too large!");

  if (
    state.selectedFile.type !== "application/pdf" &&
    state.selectedFile.type !== "application/pdf"
  )
    // 1mb
    return alert("File format is incorrect.");
  e.preventDefault();

  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append("file", state.selectedFile);

  // Details of the uploaded file

  // Request made to the backend api
  // Send formData object
  await axios.post("api/upload", formData, {
    headers: { "content-type": "multipart/form-data" },
  });
  //console.log(res);
};

// File content to be displayed after
// file upload is complete
const fileData = () => {
  if (state.selectedFile) {
    return (
      <div>
        <h2>File Details:</h2>
        <p>File Name: {state.selectedFile.name}</p>
        <p>File Type: {state.selectedFile.type}</p>
        <p>
          Last Modified: {state.selectedFile.lastModifiedDate.toDateString()}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <br />
      </div>
    );
  }
};
function Upload() {
  return (
    <div>
      <div>
        <input type="file" name="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      {fileData()}
    </div>
  );
}

export default Upload;
