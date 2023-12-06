import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIcons = () => {
  return (
    <>
      {/* icons */}
      <Box className="text-center">
        <IconButton className="text-white">
          <FacebookIcon />
        </IconButton>
        <IconButton className="text-white">
          <TwitterIcon />
        </IconButton>
        <IconButton className="text-white">
          <LinkedInIcon />
        </IconButton>
        <IconButton className="text-white">
          <InstagramIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default SocialIcons;
