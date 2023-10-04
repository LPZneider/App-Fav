import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomDialog></CustomDialog>
    </>
  );
};

export default Navbar;
