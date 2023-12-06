import { Box, Button } from "@mui/material";
import Link from "next/link";

const NavLinks = () => {
  // menu name and llinks
  const pages = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Pages",
      link: "/pages",
    },
    {
      name: "Category",
      link: "/category",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Posts",
      link: "/posts",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        {pages.map((page) => (
          <Link key={page.link} href={page.link}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {page.name}
            </Button>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default NavLinks;
