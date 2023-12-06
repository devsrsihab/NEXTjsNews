import LatestNews from "@/components/UI/LatestNews/LatestNews";
import Sidebar from "@/components/UI/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid className="mt-5 mb-32" container spacing={8}>
        <Grid item xs={6} md={8}>
         <LatestNews/>
        </Grid>
        <Grid item xs={6} md={4}>
          <Sidebar/>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
