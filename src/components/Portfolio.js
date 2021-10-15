/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import covid19tracker from "../assets/images/covid19tracker.png";
import feedbackSender from "../assets/images/feedbackSender.png";
import pomofocus from "../assets/images/pomofocus.png";
import secretRoomChat from "../assets/images/secretRoomChat.png";
import sudoku from "../assets/images/sudoku.png";
import weather from "../assets/images/weather.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
    paddingBottom: "50px",
  },
  cardContainer: {
    marginBottom: 0,
    maxWidth: 345,
    borderRadius: "16px",
    margin: "3rem auto",
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
}));

const projects = [
  {
    name: "Covid19 Case Tracker",
    short_description:
      "A web application for keeping track of Corona virus cases at any country",
    description: `Created a web application for keeping track of Corona virus cases at any country and graph display fortotal cases by day`,
    technology: "React, Highcharts, MaterialUI",
    image: covid19tracker,
    link: "https://covid19-case-tracker-linh.herokuapp.com",
    code: "https://github.com/linhcu1612/CovidTracker",
  },
  {
    name: "Feedback Sender",
    short_description:
      "A web application for sending survey to customer and real-time tracking of the response from receiver",
    description: `Developed web application for sending survey to customer and real-time tracking of the response from receiver by using SendGrid’s WebhookAPI with the ability to add credits by integrating StripeAPI.`,
    technology: "React, Nodejs, Expressjs, MongoDB, WebhookAPI",
    image: feedbackSender,
    link: "https://full-stack-application.herokuapp.com",
    code: "https://github.com/linhcu1612/FeedbackSender",
  },
  {
    name: "FOPO",
    short_description: "A task management software using Pomodoro technique",
    description: `Developed a task management software using Pomodoro technique in which user focus to finish a task in 25 minutes, add in with the ability to play study music in the background`,
    technology: "React, Redux, MaterialUI",
    image: pomofocus,
    link: "https://fopo.herokuapp.com/",
    code: "https://github.com/linhcu1612/FOMO",
  },
  {
    name: "Secret Room Chat",
    short_description:
      "A real-time chat application using Firebase's Firestore Database",
    description: `Created web application for real-time chat application using Firebase's Firestore Database. Users can create new chat room and invite new users to the chat room.`,
    technology: "React, Redux, Styled Component, Firebase",
    image: secretRoomChat,
    link: "https://chatapp-5c2b7.web.app",
    code: "https://github.com/linhcu1612/ChatApp",
  },
  {
    name: "Sudoku Game Application",
    short_description: "A desktop application for solving Sudoku",
    description: `Developed desktop application for solving Sudoku with implement of backtracking algorithms for auto solving.`,
    technology:
      "Java, Swing, Design Pattern, Object Oriented Programming theory",
    image: sudoku,
    link: "",
    code: "https://github.com/linhcu1612/ChatApp",
  },
  {
    name: "Weather Application",
    short_description:
      "web application for real-time weather at most of the large city",
    description: `Created web application for real-time weather at most of the large city using OpenWeatherMap API.`,
    technology: "HTML, CSS, vanilla JavaScript",
    image: weather,
    link: "",
    code: "https://github.com/linhcu1612/weather-app-js",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
      <Typography variant='h4' align='center' className={classes.heading}>
        Personal Projects
      </Typography>
      <Carousel responsive={responsive}>
        {projects.map((project, i) => (
          <>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='140'
                  image={project.image}
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    gutterBottom
                    align='center'
                    style={{ fontWeight: "bold", color: "tan" }}>
                    {project.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto 20%",
              }}>
              <Button
                size='medium'
                style={{ color: "tomato" }}
                href={project.code}
                startIcon={<CodeIcon />}>
                Code
              </Button>
              <Button
                size='medium'
                style={{ color: "tomato" }}
                href={project.link}
                startIcon={<LinkIcon />}>
                Live Demo
              </Button>
            </CardActions>
          </>
        ))}
      </Carousel>
    </Box>
  );
};

export default Portfolio;
