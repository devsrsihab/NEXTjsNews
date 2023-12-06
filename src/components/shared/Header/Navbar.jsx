"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import SocialIcons from "../SocialIcons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-black" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo */}
          <Image src={logo} width={100} height={100} alt="logo" />
          {/* menu box */}
          <NavLinks />
          {/* navbar icons */}
          <SocialIcons />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
