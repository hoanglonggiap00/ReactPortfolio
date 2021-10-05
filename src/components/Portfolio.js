/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import covid19tracker from "../images/covid19tracker.png";
import feedbackSender from "../images/feedbackSender.png";
import pomofocus from "../images/pomofocus.png";
import secretRoomChat from "../images/secretRoomChat.png";
import sudoku from "../images/sudoku.png";
import weather from "../images/weather.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
    paddingBottom: "50px",
  },
  cardContainer: {
    maxWidth: 345,
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
    name: "Focus With Pomodoro",
    short_description: "A task management software using Pomodoro technique",
    description: `Developed a task management software using Pomodoro technique in which user focus to finish a task in 25 minutes, add in with the ability to play study music in the background`,
    technology: "React, Redux, MaterialUI, howler.js",
    image: pomofocus,
    link: "https://pomofocus-linh.herokuapp.com",
    code: "https://github.com/linhcu1612/Pomofocus",
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
      <Grid container justify='center'>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='140'
                  image={project.image}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {project.short_description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "auto 50px",
                }}>
                <Button size='small' color='primary' href={project.code}>
                  Code
                </Button>
                <Button size='small' color='primary' href={project.link}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
