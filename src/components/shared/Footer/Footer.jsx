import { Box, Container, IconButton, Typography } from "@mui/material";
import SocialIcons from "../SocialIcons";
import NavLinks from "../Header/NavLinks";

const Footer = () => {
  return (
    <>
      <Box className="bg-[#011321] text-white py-10 ">
        <Container>
          {/* icons */}
          <SocialIcons />
          {/* menu box */}
          <NavLinks />
          {/* copyright  */}
          <Typography
            style={{ color: "rgba(255, 255, 255, 0.40)" }}
            className="text-center"
          >
            @2023 Dragon News. Design by Programming Hero
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
