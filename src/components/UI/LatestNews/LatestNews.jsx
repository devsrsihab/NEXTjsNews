import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box } from "@mui/material";
import bitCoinImg from "@/assets/images/bitCoin.png";
import postImg1 from "@/assets/images/postImg1.png";
import postImg2 from "@/assets/images/postImg2.png";
import postImg3 from "@/assets/images/postImg3.png";
import postImg4 from "@/assets/images/postImg4.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      {/* // top cart */}
      <Card className="shadow-none border-b-2 border-[#15151533] " >
      <Box className=" mb-5 border-b-2 border-[#15151533] " >
          <Typography
            className="m-0 p-4 border-b-4 inline-block border-red-500"
            gutterBottom
            variant="h4"
            component="div"
          > National News</Typography>
        </Box>
        <CardActionArea>
          <CardMedia>
            <Image src={bitCoinImg} alt="bit coin photo" className="min-w-full" />
          </CardMedia>
          <CardContent className="space-y-6  py-10  ">
            <p className="bg-red-500 p-3 text-xl text-white rounded inline-block">
              Technology
            </p>
            <Typography gutterBottom variant="h4" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography variant="h6" color="text.secondary">
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* mini cards */}
      <div className="mini-cards mt-20">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* card 01 */}
          <Grid item xs={6}>
            <Card className="shadow-none border-b-2 border-[#15151533] ">
              <CardActionArea>
                <CardMedia>
                  <Image src={postImg1} className="min-w-full object-cover " alt="bit coin photo" />
                </CardMedia>
                <CardContent className="space-y-3  py-10  ">
                  <Typography gutterBottom className="text-xl font-semibold">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography classname="text-base" color="text.secondary">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.....
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* card 02 */}
          <Grid item xs={6}>
            <Card className="shadow-none border-b-2 border-[#15151533] ">
              <CardActionArea>
                <CardMedia>
                  <Image src={postImg2} className="min-w-full object-cover " alt="bit coin photo" />
                </CardMedia>
                <CardContent className="space-y-3  py-10  ">
                  <Typography gutterBottom className="text-xl font-semibold">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography classname="text-base" color="text.secondary">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.....
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* card 03 */}
          <Grid item xs={6}>
            <Card className="shadow-none border-b-2 border-[#15151533] ">
              <CardActionArea>
                <CardMedia>
                  <Image src={postImg3} className="min-w-full object-cover " alt="bit coin photo" />
                </CardMedia>
                <CardContent className="space-y-3  py-10  ">
                  <Typography gutterBottom className="text-xl font-semibold">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography classname="text-base" color="text.secondary">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.....
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* card 04 */}
          <Grid item xs={6}>
            <Card className="shadow-none border-b-2 border-[#15151533] ">
              <CardActionArea>
                <CardMedia>
                  <Image src={postImg4} className="min-w-full object-cover " alt="bit coin photo" />
                </CardMedia>
                <CardContent className="space-y-3  py-10  ">
                  <Typography gutterBottom className="text-xl font-semibold">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography classname="text-base" color="text.secondary">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.....
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LatestNews;
