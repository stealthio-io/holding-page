import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { deepOrange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Parallax } from "react-parallax";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const people = [
  {
    name: "Carlos Benito",
    image: "/profiles/Carlos-Benito-Garcia.jpg",
    role: "Business Growth Consultant",
    linkedin: "https://www.linkedin.com/in/recruitmenttrainingexpert/",
  },
  {
    name: "Jérôme Leblanc Barbedienne",
    image: "/profiles/Jerome-Leblanc-Barbedienne.jpg",
    role: "Wealth Management Operations",
    linkedin: "https://www.linkedin.com/in/jeromeleblancbarbedienne/",
  },
  {
    name: "Peter Wharton",
    image: "/profiles/Peter-Wharton.jpg",
    role: "Executive Search Business Owner",
    linkedin: "https://www.linkedin.com/in/peterdwharton/",
  },
  {
    name: "Jose Morente",
    image: "/profiles/Jose-Morente.jpg",
    role: "Executive Search Business Owner",
    linkedin: "https://www.linkedin.com/in/jose-morente/",
  },
  {
    name: "Clare Watson",
    image: "/profiles/Clare-Watson.jpg",
    role: "Digital Transformation Director",
    linkedin: "https://www.linkedin.com/in/clarewatson12/",
  },
  // {
  //   name: "ANDREW MARKHAM-DAVIES",
  //   image: "",
  //   role: "Blockchain & Tokenisation Specialist",
  //   linkedin: null,
  // },
  {
    name: "Rich Colvill",
    image: "/profiles/Rich-Colvill.jpg",
    role: "Creative & Art Director",
    linkedin: "https://www.linkedin.com/in/richcolvill/",
  },
  {
    name: "Stuart Brown",
    image: "/profiles/Stuart-Brown.jpg",
    role: "Recruitment Group Investment Director",
    linkedin: "https://www.linkedin.com/in/stuart-brown78/",
  },
  {
    name: "Sarah Goodrich",
    image: "/profiles/Sarah-Goodrich.jpg",
    role: "Recruitment COO",
    linkedin: "https://www.linkedin.com/in/goodrichs/",
  },
  {
    name: "Paul Rawson",
    image: "/profiles/Paul-Rawson.jpg",
    role: "Recruitment Marketing Transformation",
    linkedin: "https://www.linkedin.com/in/paulrawsonmarketingdirector/",
  },
  {
    name: "Jesus San Juan",
    image: "/profiles/Jesus.jpg",
    role: "AI, Machine Learning, IoT Specialist",
    linkedin:
      "https://www.linkedin.com/in/jes%C3%BAs-juli%C3%A1n-san-juan-su%C3%A1rez-3b8aab5/",
  },
  {
    name: "Ahmed Namir",
    image: "/profiles/Ahmed-Namir.jpg",
    role: "Recruitment Business Owner",
    linkedin: "https://www.linkedin.com/in/ahmednamir/",
  },
  {
    name: "James Woodhead",
    image: "/profiles/James-Woodhead.jpg",
    role: "Recruitment Head of Impact",
    linkedin: "https://www.linkedin.com/in/james-woodhead-4b097555/",
  },
  {
    name: "Gavin Chase",
    image: "/profiles/Gavin-Chase.png",
    role: "Recruitment Partnerships Director",
    linkedin: "https://www.linkedin.com/in/executive/",
  },
];

export default () => {
  return (
    <Container
      id="team"
      maxWidth={false}
      sx={{ padding: "5rem 0 5rem", background: "#1e132c" }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={1}
          md={2}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              textAlign: "left",
              alignItems: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginBottom: "2rem",
                color: "#e8e8e8",
                fontSize: "3rem",
                fontWeight: "300 !important",
                paddingLeft: { xs: "1rem", md: 0 },
              }}
            >
              Meet the collective
            </Typography>

            <Typography
              component="p"
              sx={{
                padding: { xs: "1rem", md: "0 0 0 10rem" },
                marginBottom: "1rem",
                color: "#e8e8e8",
              }}
            >
              Unified by a shared vision of the possibilities of disruptive
              technology and how these technologies can be used to deliver a
              true paradigm-shift in the way we do recruitment.
            </Typography>

            <Typography
              component="p"
              sx={{
                marginBottom: "1rem",
                padding: { xs: "1rem", md: "0 0 0 10rem" },
                color: "#e8e8e8",
              }}
            >
              Here's what we bring to the collective.
            </Typography>

            <Typography
              component="p"
              sx={{
                marginBottom: "3rem",
                padding: { xs: "1rem", md: "0 0 0 10rem" },
                color: "#e8e8e8",
              }}
            >
              Contact us if you believe that you could add value to the team.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: { xs: 0, md: "3rem" } }}>
        {people.map((person) => (
          <Grid item xs={12} md={4} lg={3}>
            <Box
              sx={{
                textAlign: "left",
                alignItems: "baseline",
                display: "flex",
                paddingRight: { xs: "0rem", md: "3rem" },
                flexDirection: "column",
                marginBottom: "1rem",
                overflow: "hidden",
              }}
            >
              <a href={person.linkedin} target={"_blank"}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "80px 0px 80px 0px",
                    border: "5px solid #e8e8e8",
                  }}
                  alt={person.name}
                  src={person.image}
                />
              </a>
              <Typography
                component="p"
                sx={{
                  color: "#e8e8e8",
                  textAlign: "left",
                  fontSize: "1rem",
                  paddingLeft: { xs: "1rem", md: 0 },
                }}
              >
                {person.name}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  color: "#e8e8e8",
                  fontWeight: 300,
                  fontSize: "0.7rem",
                  paddingLeft: { xs: "1rem", md: 0 },
                }}
              >
                {person.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
