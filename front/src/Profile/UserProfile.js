import React, { useContext, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import CustomInput from "./CustomInput/CustomInput.js";
import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardAvatar from "./Card/CardAvatar.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";

import avatar from "./user.jpg";
import { Grid } from "@material-ui/core";
import UploadButton from "../components/UploadCV.js";
import axios from "axios";
import { GlobalState } from "../components/GlobalState.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);
function UserProfile() {
  const state = useContext(GlobalState);
  const [git, setGit] = useState("");
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  // States for registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const [id] = await state.userApi.id;
      await axios.post("/user/update", {
        id: id,
        name: name,
        lastname: lastName,
        email: email,
        github: git,
        phone: num,
      });
      window.location.href = "/profile";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    val="Hsan"
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleInputData={setName}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    val="Megdiche"
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleInputData={setlastName}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    val="hsan.megdiche@ensi-uma.tn"
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleInputData={setEmail}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Github"
                    id="github"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleInputData={setGit}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <div>
                    <CustomInput
                      labelText="Phone Number"
                      id="number"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      handleInputData={setNum}
                    />
                  </div>
                </GridItem>
              </GridContainer>
              <UploadButton />
            </CardBody>
            <CardFooter>
              <GridContainer>
                <GridItem>
                  <Button color="info" onClick={handleSubmit}>
                    Update Profile
                  </Button>
                </GridItem>
              </GridContainer>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default UserProfile;
