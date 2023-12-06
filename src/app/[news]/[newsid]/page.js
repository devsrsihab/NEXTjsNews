import { getSingleNews } from "@/utiles/getSingleNews";
import { Container, Grid, Box, Typography, Avatar } from "@mui/material";
import Image from "next/image";

const NewsDetails = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsid);
  //   console.log(news);

  return (
    <Box className="mt-6 mb-20">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Image
              src={news?.thumbnail_url}
              width={800}
              height={800}
              className="min-w-full mb-6 object-cover "
              alt="bit coin photo"
            />
            {/* inner gird */}
            <Grid container spacing={2}>
              <Grid
                sx={{
                  "& img": {
                    width: "100%",
                    height: "250px",
                  },
                }}
                item
                xs={6}
              >
                <Image
                  src={news?.image_url}
                  width={100}
                  height={100}
                  className="min-w-full object-cover "
                  alt="bit coin photo"
                />
              </Grid>
              <Grid
                sx={{
                  "& img": {
                    width: "100%",
                    height: "250px",
                  },
                }}
                item
                xs={6}
              >
                <Image
                  src={news?.image_url}
                  width={100}
                  height={100}
                  className="min-w-full object-cover "
                  alt="bit coin photo"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            {/* title */}
            <Typography gutterBottom variant="h4" component="div">
              {news?.title}
            </Typography>
            {/* user info */}
            <Box className="flex items-center gap-2">
              <Avatar alt={news.author.title} src={news.author.img} />
              {/* <Image
              width={80}
              height={80}
              alt="author"
              src={news?.author?.img}
              className="object-full object-cover "
              /> */}
              <Typography>{news?.author?.name}</Typography>-
              <Typography>{news?.author?.published_date}</Typography>
            </Box>
            {/* deails */}
            <Typography
              sx={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "20px 0px",
                color: "gray",
              }}
            >
              {news?.details}
            </Typography>
            {/* quoate */}
            <Typography className="mt-6 font-bold text-xl">
              ``Many desktop publishing packages and web page editors now use as
              their default model text!
            </Typography>
            <Typography>-- Awlad Hossain</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetails;
