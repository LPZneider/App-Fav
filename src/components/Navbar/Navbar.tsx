import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

const Navbar: React.FC = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Programming React TEST
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Favoritos
          </Button>
        </Toolbar>
      </AppBar>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
    </>
  );
};

export default Navbar;
