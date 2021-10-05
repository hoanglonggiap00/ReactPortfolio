/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    padding: "12px !important",
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href='https://www.facebook.com/cu.nhatlinh'>
        <BottomNavigationAction icon={<Facebook />} className={classes.root} />
      </a>
      <a href='https://github.com/linhcu1612'>
        <BottomNavigationAction
          icon={<GitHubIcon />}
          className={classes.root}
        />
      </a>
      <a href='https://www.instagram.com/cu.nhatlinh/'>
        <BottomNavigationAction icon={<Instagram />} className={classes.root} />
      </a>
      <a href='https://www.linkedin.com/in/linh-nhat-67b105193/'>
        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;
