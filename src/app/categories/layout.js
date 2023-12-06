import CategoryList from "@/components/UI/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid className="mt-5 mb-32" container spacing={8}>
          <Grid item xs={6} md={3}>
            <CategoryList/>
          </Grid>
          <Grid item xs={6} md={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
