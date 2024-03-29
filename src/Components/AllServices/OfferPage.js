import React from "react";
import a from "../../Pages/AllServices/images/bighomerush.jpg";
import b from "../../Pages/AllServices/images/waxing.jpg";
import c from "../../Pages/AllServices/images/spotless.jpg";
import d from "../../Pages/AllServices/images/homepainting.jpg";
import e from "../../Pages/AllServices/images/spawome.jpg";
import f from "../../Pages/AllServices/images/salonmen.jpg";
import g from "../../Pages/AllServices/images/acrepair.jpg";
import { Flex, Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OfferPage.css";

const OfferPage = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Box ml="200px" height="260px">
      <Box style={{ marginTop: "100px", width: "1200px" }}>
        <Slider {...settings}>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={a}></img>
            </div>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={b}></img>
            </div>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={c}></img>
            </div>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={d}></img>
            </div>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={e}></img>
            </div>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={f}></img>
            </div>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={g}></img>
            </div>
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export default OfferPage;
