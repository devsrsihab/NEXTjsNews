import { getCategoryNews } from "@/utiles/getCategoryNews";
import {
  Typography,
  Grid,
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicCateNews = async ({ searchParams }) => {
  const { data: categoriesNews } = await getCategoryNews(searchParams.category);
  // console.log(data)

  return (
    <div>
      <h2>
        
        {/* categories news */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* card  */}
          {categoriesNews.map((news) => (
            <>
              
              <Grid key={news._id} item xs={6}>
                <Link href={`/${news.category}/${news._id}`} >
                
              
                <Card className="shadow-none border-b-2 border-[#15151533] ">
                  <CardActionArea>
                    <CardMedia sx={{ 
                      "& img":{
                        width: "100%",
                        height: "250px",
                      }
                     }}   >
                      <Image
                        src={news?.thumbnail_url}
                        width={100}
                        height={200}
                        className="min-w-full object-cover "
                        alt="bit coin photo"
                      />
                    </CardMedia>
                    <CardContent className="space-y-3  py-10  ">
                      <Typography
                        gutterBottom
                        className="text-xl font-semibold"
                      >
                       {news?.title.length > 30
                       ? news?.title?.slice(0,30) + "..."
                       : news?.title
                       
                       }
                      </Typography>
                      <Typography classname="text-base" color="text.secondary">
                        By {news?.author?.name} - {news?.author?.published_date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {news?.details.length > 150
                      ? news?.details.slice(0,150) + "......"
                      : news?.details
                      
                      }
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Link>
              </Grid>
            </>
          ))}
        </Grid>
      </h2>
    </div>
  );
};

export default DynamicCateNews;
