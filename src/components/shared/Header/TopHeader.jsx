import { currentDate } from "@/utiles/currentDate";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import dragonImage from '@/assets/images/theDragonNews.png';
const TopHeader = () => {

    const currDate = currentDate()

    return <>
      <Box className=" py-10 space-y-5  " >
        <Container>
            <Image
            className="mx-auto"
            src={dragonImage}
            width={471}
            height={60}
            alt='dragonNewslogo'
            />
            <Typography variant="body2" color="gray" textAlign="center"   >
            Journalism Without Fear or Favour
            </Typography>
            <Typography variant="body2" color="gray" textAlign="center"   >
            {currDate}
            </Typography>
        </Container>

      </Box>
    
    </>
};

export default TopHeader;