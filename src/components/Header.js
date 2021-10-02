/** @format */

import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import classess from "./Header.module.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    height: "50vh",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [show, setShow] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = +currPos.y === 0 && +currPos.x === 0;
      setShow(isShow);
    },
    [show]
  );

  return (
    <>
      <Box className={classes.typedContainer}>
        <Grid container justify='center'>
          <Avatar className={classes.avatar} src={avatar} alt='Linh Cu' />
        </Grid>
        <Typography className={classes.title} variant='h3'>
          Linh Cu
        </Typography>

        <Typography className={classes.subtitle} variant='h5'>
          <Typed
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Fullstack Developer",
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
      <div
        className={classess.mouse_scroll}
        style={show ? { opacity: 1 } : { opacity: 0 }}>
        <div className={classess.mouse}>
          <div className={classess.wheel}></div>
        </div>
        <div>
          <span className={classess.unu}></span>
          <span className={classess.doi}></span>
          <span className={classess.trei}></span>
        </div>
      </div>
    </>
  );
};

export default Header;
