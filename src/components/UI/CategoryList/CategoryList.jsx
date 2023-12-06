import { getAllCategoris } from "@/utiles/getAllCategoris";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: categories } = await getAllCategoris();
  console.log(categories);

  return (
    <Box className="bg-[#F3F3F3] p-10 rounded-xl ">
      <Typography variant="h4" color="text.primary">
        Categories
      </Typography>
      <Divider />
      <Stack spacing={2} sx={{ mt: 2.5 }}>
        {categories?.map((category) => (
          <Button variant="outlined" key={category._id}>
            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
