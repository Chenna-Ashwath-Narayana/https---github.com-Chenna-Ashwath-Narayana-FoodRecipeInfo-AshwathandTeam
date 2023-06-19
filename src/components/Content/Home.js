import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Button, Typography, Slide, Zoom } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Padding } from "@mui/icons-material";

const Home = () => {

  const [nameAnimation, setNameAnimation] = useState(false);
  const [locationAnimation, setLocationAnimation] = useState(false);
  const [welcomeAnimation, setWelcomeAnimation] = useState(false);

  const [actionButtonsAnimation, setActionButtonsAnimation] = useState(false);
  const [socialButtonsAnimation, setSocialButtonsAnimation] = useState(false);

  const [imageAnimation, setImageAnimation] = useState(false);

  const animationFuncs = {
    name: setNameAnimation,
    "location-text": setLocationAnimation,
    welcome: setWelcomeAnimation,
    action: setActionButtonsAnimation,
    social: setSocialButtonsAnimation,
    "home-image": setImageAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".animation-element", observer);
  }, []);

  return (
    <>
      <Box className="home-content-background" id="home">
        <Container maxWidth="lg">
          <Box className="content home-content">
            <Box className="left-content">
              <Container>
                <Box className="text-container">
                  <Zoom in={welcomeAnimation} timeout={2000}>
                    <Typography
                      variant="h4"
                      align="left"
                      id="welcome"
                      className="animation-element"
                      gutterBottom
                    >
                      Welcome to
                    </Typography>
                  </Zoom>

                  <Zoom in={nameAnimation} timeout={2000}>
                    <Typography
                      variant="h1"
                      align="left"
                      id="name"
                      className="animation-element"
                      gutterBottom
                    >
                      Ashwath Recipe
                    </Typography>
                  </Zoom>
                  <Zoom in={locationAnimation} timeout={2000}>
                    <Typography
                      id="location-text"
                      className="text-location animation-element"
                      variant="h5"
                      align="left"
                      gutterBottom
                    >
                      CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY,PRODDATUR, 516360
                      <br />
                      KADAPA, AP
                    </Typography>
                  </Zoom>
                </Box>

                <Slide
                  direction="right"
                  in={actionButtonsAnimation}
                  timeout={1100}
                >
                  <Box
                    className="action-buttons-container animation-element"
                    id="action"
                  >
                    <Button className="action-button" href="/path"><br></br><center>Login</center></Button>
                    <Button className="action-button" href="/menu"><br/><center>view menu</center></Button>
                  </Box>
                </Slide>

                <Slide
                  direction="right"
                  in={socialButtonsAnimation}
                  timeout={1100}
                >
                  <Box
                    className="social-buttons-container animation-element"
                    id="social"
                  >
                    <Button className="social-button" href="#">
                      <FacebookIcon className="social-icon" />
                    </Button>
                    <Button className="social-button" href="https://www.instagram.com/chenna_ashwath/">
                      <InstagramIcon className="social-icon" />
                    </Button>
                    <Button className="social-button">
                      <TwitterIcon className="social-icon" />
                    </Button>
                  </Box>
                </Slide>
              </Container>
            </Box>
            <Box className="right-content">
              <Zoom in={imageAnimation} timeout={1400}>
                <div>
                  <Box
                    className="image-container animation-element"
                    id="home-image"
                  ></Box>
                  <p className="image-credit">
                    Image source: La Felicità - crédit photo{" "}
                    <a target="_blank" href="https://www.sliceofpai.com/about">
                      Joann Pai
                    </a>
                    .
                  </p>
                </div>
              </Zoom>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
