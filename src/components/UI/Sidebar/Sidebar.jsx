import {
  Card,
  Box,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import postImg5 from "@/assets/images/postImg5.png";
import sidebarImg from "@/assets/images/sidebarImg.png";
import RelatedPosts from "./RelatedPosts";

const Sidebar = () => {
  return (
    <>
      {/* // top card */}
      <Card
        className="shadow-none border-b-2 border-[#15151533] "
        id="mui-Card"
      >
        <Box className=" mb-5 border-b-2 border-[#15151533] ">
          <Typography
            className="m-0 p-4 border-b-4 inline-block border-red-500"
            gutterBottom
            variant="h4"
            component="div"
          >
            {" "}
            Sylhet
          </Typography>
        </Box>

        <CardActionArea>
          <CardMedia>
            <Image src={postImg5} alt="bit coin photo" width={800} />
          </CardMedia>
          <CardContent className="space-y-6  py-10  ">
            <p className="bg-red-500 p-3 text-xl text-white rounded inline-block">
              Technology
            </p>
            <Typography gutterBottom className="text-xl font-semibold">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography classname="text-base" color="text.secondary">
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* related post card */}
      <RelatedPosts />
      {/*  sidebarImg */}
      <Image src={sidebarImg} className="min-w-full mt-6" height={400} alt='sidebarImg'  />
    </>
  );
};

export default Sidebar;
