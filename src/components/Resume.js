/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100vh",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  bold: {
    fontWeight: "bold",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component='header' className={classes.mainContainer}>
      <Typography variant='h4' align='center' className={classes.heading}>
        Working Experience
      </Typography>
      <Box component='div' className={classes.timeLine}>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          2021
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}>
            Software Engineer Intern
          </Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            Sellcrowd
          </Typography>
          <Typography
            variant='subtitle1'
            align='left'
            className={classes.subtitle1}>
            <ul>
              <li>
                Deployed and maintained affiliate tracking software using
                <span className={classes.bold}> MERN </span>
                stack on <span className={classes.bold}>AWS etc2</span> in which
                save <span className={classes.bold}>15%</span> cost compared to
                buying a physical server
              </li>
              <li>
                Fixed bugs and implement new design from existing websites using
                <span className={classes.bold}> Vue</span>,
                <span className={classes.bold}>Vuex</span> and
                <span className={classes.bold}> Nuxtjs</span>. Implemented
                enhancements that significantly improved web functionality and
                loading speed by <span className={classes.bold}> 13%</span>
              </li>
              <li>
                Created <span className={classes.bold}>Nodejs</span> application
                for automatically crawl 2000 job data from Linkedin Job and
                upload on <span className={classes.bold}>Firebase </span>
                database in under 2s
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          2020
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}>
            Web Developer
          </Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            Freelancer
          </Typography>
          <Typography
            variant='subtitle1'
            align='left'
            className={classes.subtitle1}>
            <ul>
              <li>
                Developed dynamic and interactive website using
                <span className={classes.bold}> Pug </span>,
                <span className={classes.bold}>Gulp </span>,
                <span className={classes.bold}>Sass </span>
                and <span className={classes.bold}>jQuery</span> that ensured
                high traffic, page views, and User Experience
              </li>
              <li>
                Oversaw full life cycle of software development for 3 projects
                with 100% on time delivery while staying 5% under budget
              </li>
              <li>
                Designed processes for cleanup and performance improvement, that
                minimized downtime by 13%
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
