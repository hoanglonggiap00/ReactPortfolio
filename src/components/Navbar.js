/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@mui/icons-material/Dehaze";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import logo from "../assets/logos/LC.png";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "20px auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  list: {
    borderTop: "1px solid black",
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <InfoIcon />, listText: "About", listPath: "/about" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component='div'>
      <Avatar className={classes.avatar} src={avatar} alt='Mahmudul Alam' />
      <List className={classes.list}>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component='nav'>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <img
              src={logo}
              alt='LinhCu Logo'
              style={{ width: "100px", height: "80px" }}
            />
            <IconButton onClick={() => setOpen(true)}>
              <DehazeIcon className={classes.arrow} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
