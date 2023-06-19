import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./location-styles.css";

const Location = () => {
  const [locationIframeAnimation, setLocationIframeAnimation] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFuncs = {
    "location-iframe": setLocationIframeAnimation,
    text: setTextAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".location-animation-element", observer);
  }, []);

  return (
             <div>
    <Box className="location-content-background" id="location">
      <Container maxWidth="lg">
        <Box
          id="text"
          className="content location-content location-animation-element"
        >
          <Box className="left-content">
            <Zoom in={textAnimation} timeout={2000}>
              <Box className="text-container">
                <Typography variant="h3" align="left" gutterBottom>
                  Our Location
                </Typography>
                <Typography variant="h5" align="left" gutterBottom>
                  Our famous Italian pizzeria is situated in the heart of the
                  city, with a prime location that's easily accessible and
                  surrounded by plenty of parking options.
                  <br />
                  <br />
                  Whether you're a local or a tourist, our convenient location
                  makes it easy to stop by and enjoy our delicious pizzas.
                </Typography>
              </Box>
            </Zoom>
          </Box>
          
          <Box className="right-content">
            <Zoom in={locationIframeAnimation} timeout={1400}>
              <iframe
                id="location-iframe"
                className="map location-animation-element"
                src="https://www.google.com/maps/place/Proddatur,+Andhra+Pradesh+516360/data=!4m2!3m1!1s0x3bb478a47629fd07:0x18fbb5ffaf99cfd2?sa=X&ved=2ahUKEwiT7JvuyMT_AhUhaGwGHQegCI8Q8gF6BAgPEAI"
                loading="lazy"
              ></iframe>
            </Zoom>
          </Box>

        </Box>
        <p className="image-credit white">
            Image source:{" "}
            <a target="_blank" href="https://heyhannover.de/">
              Hey Hannover
            </a>
            .
          </p>
      </Container>
    </Box>
    </div>
  );
};

export default Location;
