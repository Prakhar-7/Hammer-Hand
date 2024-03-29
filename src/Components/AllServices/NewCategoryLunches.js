import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import a from "../../Pages/AllServices/images/expertcounselling.jpg";
import b from "../../Pages/AllServices/images/furnituremaking.jpg";
import c from "../../Pages/AllServices/images/airpurifier.jpg";
import d from "../../Pages/AllServices/images/ropurifier.jpg";
import { Link as RouterLink } from "react-router-dom";

const NewCategoryLunches = () => {
  return (
    <Box height="480px">
      <h1 style={{ fontSize: "50px" }}>New Category Lunches</h1>
      <Flex mt="100px" ml="150px" gap="15px">
      <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px" }}
            width="280px"
            alt="Big Home Rush"
            src={a}
          ></img>
          <p>Expert Counselling</p>
          <p>Advanced Skin Treatments</p>
        </Box>
        </RouterLink>
        <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px"}}
            width="280px"
            alt="Big Home Rush"
            src={b}
          ></img>
          <p>Furniture Making, Upholstery & Polish</p>
        </Box>
        </RouterLink>
        <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px"}}
            width="280px"
            alt="Big Home Rush"
            src={c}
          ></img>
          <p>Air Purifier</p>
        </Box>
        </RouterLink>
        <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px"}}
            width="280px"
            alt="Big Home Rush"
            src={d}
          ></img>
          <p style={{textAlign:"center"}}>Buy RO Water Purifier</p>
        </Box>
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default NewCategoryLunches;
