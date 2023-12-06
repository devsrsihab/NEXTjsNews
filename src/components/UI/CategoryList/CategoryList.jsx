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
          <Link classsName="min-w-full block" href={`/categories/news?category=${category.title.toLowerCase()}`}  key={category._id}>
            <Button className="w-full" variant="outlined" >{category.title}</Button>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
