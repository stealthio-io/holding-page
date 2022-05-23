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

import "./App.css";

const techs = [
  {
    title: "WEB 3.0",
    description:
      "The first future-proof recruitment software ecosystem built on the blockchain",
  },
  {
    title: "ONE VERSION OF THE TRUTH",
    description:
      "The first all-in-one, end-to-end recruitment technology with a single version of the truth.",
  },
  {
    title: "BLOCKCHAIN TOKENOMICS",
    description:
      "Innovative pricing using blockchain tokens to PAYG only for the functions that you use.",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Powerful AI automations enhance current workflows and pro-actively develop unexploited data-driven revenue-streams.",
  },
  {
    title: "IMMERSIVE CANDIDATE ENGAGEMENT",
    description:
      "Candidate engagement like never before, through automations and immersive experiences.",
  },
  {
    title: "METAVERSE READY",
    description:
      "Built-in Metaverse interoperability, enabling immersive engagement in the new world of remote working.",
  },
];

const people = [
  {
    name: "CARLOS BENITO",
    image: "/profiles/Carlos-Benito-Garcia.jpg",
    role: "Business Growth Consultant",
    linkedin: "https://www.linkedin.com/in/recruitmenttrainingexpert/",
  },
  {
    name: "JÉRÔME LEBLANC BARBEDIENNE",
    image: "/profiles/Jerome-Leblanc-Barbedienne.jpg",
    role: "Wealth Management Operations",
    linkedin: "https://www.linkedin.com/in/jeromeleblancbarbedienne/",
  },
  {
    name: "PETER WHARTON",
    image: "/profiles/Peter-Wharton.jpg",
    role: "Executive Search Business Owner",
    linkedin: "https://www.linkedin.com/in/peterdwharton/",
  },
  {
    name: "JOSE MORENTE",
    image: "/profiles/Jose-Morente.jpg",
    role: "Executive Search Business Owner",
    linkedin: "https://www.linkedin.com/in/jose-morente/",
  },
  {
    name: "CLARE WATSON",
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
    name: "RICH COLVILL",
    image: "/profiles/Rich-Colvill.jpg",
    role: "Creative & Art Director",
    linkedin: "https://www.linkedin.com/in/richcolvill/",
  },
  {
    name: "STUART BROWN",
    image: "/profiles/Stuart-Brown.jpg",
    role: "Recruitment Group Investment Director",
    linkedin: "https://www.linkedin.com/in/stuart-brown78/",
  },
  {
    name: "SARAH GOODRICH",
    image: "/profiles/Sarah-Goodrich.jpg",
    role: "Recruitment COO",
    linkedin: "https://www.linkedin.com/in/goodrichs/",
  },
  {
    name: "PAUL RAWSON",
    image: "/profiles/Paul-Rawson.jpg",
    role: "Recruitment Marketing Transformation",
    linkedin: "https://www.linkedin.com/in/paulrawsonmarketingdirector/",
  },
  {
    name: "JESUS SAN JUAN",
    image: "/profiles/Jesus.jpg",
    role: "AI, Machine Learning, IoT Specialist",
    linkedin:
      "https://www.linkedin.com/in/jes%C3%BAs-juli%C3%A1n-san-juan-su%C3%A1rez-3b8aab5/",
  },
  {
    name: "AHMED NAMIR",
    image: "/profiles/Ahmed-Namir.jpg",
    role: "Recruitment Business Owner",
    linkedin: "https://www.linkedin.com/in/ahmednamir/",
  },
  {
    name: "JAMES WOODHEAD",
    image: "/profiles/James-Woodhead.jpg",
    role: "Recruitment Head of Impact",
    linkedin: "https://www.linkedin.com/in/james-woodhead-4b097555/",
  },
  {
    name: "GAVIN CHASE",
    image: "/profiles/Gavin-Chase.png",
    role: "Recruitment Partnerships Director",
    linkedin: "https://www.linkedin.com/in/executive/",
  },
];

const pages = ["Vision", "Contact", "Team", "Technology"];

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{ background: "#1e132c", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img height="40" src="/Stelthio_lock-up-light.png" alt="" />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img height="40" src="/Stelthio_lock-up-light.png" alt="" />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <>
                <a
                  href={`#${page.toLocaleLowerCase()}`}
                  key={page}
                  style={{
                    color: "#e8e8e8",
                    display: "block",
                    marginLeft: "1rem",
                    textDecoration: "none",
                  }}
                >
                  {page}
                </a>
              </>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} sx={{ background: "#1e132c" }}>
        <Grid
          container
          spacing={2}
          sx={{
            minHeight: "500px",
            backgroundImage: { xs: "none", md: "url(/Stelthio_graphic-2.png)" },
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{ padding: "3rem 0", display: "flex", alignItems: "center" }}
          >
            <Typography
              sx={{
                padding: "5rem 0 0",
                color: "#e8e8e8",
                fontSize: "2rem",
                fontWeight: 200,
              }}
              component="p"
              variant="h5"
              textAlign="left"
            >
              Stealth mode: A business strategy, adopting a temporary state of
              secretiveness, usually undertaken to avoid alerting competitors to
              a pending product launch, in a highly competitive software market.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: { xs: "none", md: "block" } }}
            md={5}
          ></Grid>
        </Grid>
      </Container>
      {/* 
      <Parallax
        blur={0}
        bgImage="/Stelthio_space.png"
        bgImageAlt="the cat"
        strength={400}
        style={{ marginTop: "3rem" }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                sx={{ padding: "5rem 0 4rem", color: "#e8e8e8" }}
                component="h1"
                variant="h5"
                textAlign="left"
              >
                <strong>STEALTH MODE:</strong> A business strategy, adopting a
                temporary state of secretiveness, usually undertaken to avoid
                alerting competitors to a pending product launch, in a highly
                competitive software market.
              </Typography>
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }} md={7}>
              <img
                style={{ width: "100%", float: "right" }}
                src="/Stelthio_graphic-1.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </Parallax> */}

      <Container
        maxWidth={false}
        sx={{ padding: "5rem 0 5rem", background: "#18191d" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ padding: { xs: "0", md: "0 3rem" } }}>
            <Typography
              sx={{ textAlign: "center", color: "#e8e8e8", padding: "0 1rem" }}
              component="p"
            >
              STEALTHIO is designed by talent experts, for recruitment industry
              professionals and we want you, recruitment professionals to share
              in ownership of the company.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ padding: { xs: "0", md: "0 3rem" } }}>
            <Typography
              sx={{ textAlign: "center", color: "#e8e8e8", padding: "0 1rem" }}
              component="p"
            >
              STEALTHIO is far more than just another combined CRM with ATS,
              it’s so much more than simple AI automations, and reassuringly, it
              isn’t another expensive API plug-in tool to add to
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ padding: { xs: "0", md: "0 3rem" } }}>
            <Typography
              sx={{ textAlign: "center", color: "#e8e8e8", padding: "0 1rem" }}
              component="p"
            >
              STEALTHIO is here to completely transform and revolutionise the
              way recruiters use technology to improve performance and
              engagement in the new world of Web 3.0.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        id="vision"
        maxWidth={false}
        sx={{
          padding: "0",
          background: "#1e132c",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="/Stelthio_graphic-1.png"
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                textAlign: "left",
                alignItems: "left",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "3rem",
              }}
            >
              <Typography
                variant="h5"
                component="p"
                sx={{
                  marginBottom: "2rem",
                  color: "#e8e8e8",
                  textAlign: "left",
                }}
              >
                VISON
              </Typography>

              <Typography
                component="p"
                sx={{
                  padding: "0 6rem 0 0",
                  marginBottom: "1rem",
                  color: "#e8e8e8",
                }}
              >
                To positively impact lives and careers, with the world’s first
                web 3.0 native, end-to-end, all-in- one, fully immersive talent
                management ecosystem.
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{ marginBottom: "2rem", color: "#e8e8e8" }}
              >
                MISSION
              </Typography>

              <Typography
                component="p"
                sx={{
                  padding: "0 6rem 0 0",
                  marginBottom: "1rem",
                  color: "#e8e8e8",
                }}
              >
                To completely disrupt the recruitment tech industry with a
                tech-stack paradigm shift
              </Typography>

              <Typography
                component="p"
                sx={{
                  padding: "0 6rem 0 0",
                  marginBottom: "1rem",
                  color: "#e8e8e8",
                }}
              >
                To enable recruiters to step-change operational efficiencies and
                revenues
              </Typography>

              <Typography
                component="p"
                sx={{
                  padding: "0 6rem 0 0",
                  marginBottom: "1rem",
                  color: "#e8e8e8",
                }}
              >
                To inspire and enable, engaging and fully immersive candidate
                experiences
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        id="contact"
        sx={{
          padding: "5rem 0 5rem",
          background: "#e8e8e8",
        }}
        maxWidth={false}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
                alignItems: "left",
                display: "flex",
                flexDirection: "column",
                padding: { xs: "3rem", md: "0" },
              }}
            >
              <Typography
                component="p"
                variant="h5"
                sx={{
                  padding: "0",
                  marginBottom: "1rem",
                  color: "#18191d",
                }}
              >
                Recruiter or Recruitment Business Owner?
              </Typography>
              <Typography
                component="p"
                variant="h6"
                sx={{
                  padding: "0",
                  marginBottom: "1rem",
                  color: "#18191d",
                }}
              >
                Get in on the action!
              </Typography>

              <Typography
                component="p"
                sx={{
                  padding: "0",
                  marginBottom: "1rem",
                  color: "#18191d",
                }}
              >
                We want you to share in the success of the company. Register
                with the Stealthio community now:
              </Typography>

              <ul
                style={{
                  padding: "0 0 0 1rem",
                  color: "#18191d",
                }}
              >
                <li>
                  get details of how to secure your free company share-options
                </li>
                <li>get early-bird access to the private token sale</li>
                <li>
                  get community access to the strictly limited NFT auction
                </li>
                <li>get the chance to win free annual licences</li>
                <li>plus many other benefits and giveaways</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                textAlign: "center",
                alignItems: "left",
                display: "flex",
                flexDirection: "column",
                padding: { xs: "3rem", md: "0" },
              }}
            >
              <TextField
                id="company"
                variant="outlined"
                label="Company name"
                type="text"
                required
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="name"
                variant="outlined"
                label="Your name"
                type="text"
                required
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="email"
                variant="outlined"
                label="Email"
                type="email"
                required
                sx={{ marginBottom: "1rem" }}
              />
              <Button variant="outlined">Keep me informed</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        id="team"
        maxWidth={false}
        sx={{ padding: "5rem 0 5rem", background: "#1e132c" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={11} md={6}>
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
                component="p"
                sx={{ marginBottom: "2rem", color: "#e8e8e8" }}
              >
                MEET THE COLLECTIVE
              </Typography>

              <Typography
                component="p"
                sx={{
                  padding: { xs: "1rem", md: "0 0 0 5rem" },
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
                  padding: { xs: "1rem", md: "0 0 0 5rem" },
                  color: "#e8e8e8",
                }}
              >
                Here's what were bring to the collective.
              </Typography>

              <Typography
                component="p"
                sx={{
                  marginBottom: "3rem",
                  padding: { xs: "1rem", md: "0 0 0 5rem" },
                  color: "#e8e8e8",
                }}
              >
                Contact us if you believe that you could add value to the team.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {people.map((person) => (
            <Grid item xs={12} md={4} lg={3}>
              <Box
                sx={{
                  textAlign: "left",
                  alignItems: { xs: "center", md: "left" },
                  display: "flex",
                  paddingRight: { xs: "0rem", md: "3rem" },
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
              >
                <a href={person.linkedin} target={"_blank"}>
                  <img
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: "20px",
                      border: "5px solid #e8e8e8",
                    }}
                    alt={person.name}
                    src={person.image}
                  />
                </a>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ color: "#e8e8e8", textAlign: "left" }}
                >
                  {person.name}
                </Typography>
                <Typography component="h3" sx={{ color: "#e8e8e8" }}>
                  {person.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container
        id="technology"
        sx={{ padding: "5rem 0 5rem", background: "#18191d" }}
        maxWidth={false}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: "left",
                alignItems: "left",
                display: "flex",
                flexDirection: "column",
                padding: { xs: " 1rem", md: 0 },
              }}
            >
              <Typography
                variant="h5"
                component="p"
                sx={{ marginBottom: "1rem", color: "#e8e8e8" }}
              >
                TECHNOLOGY
              </Typography>

              <Typography
                component="p"
                sx={{
                  padding: "0",
                  marginBottom: "5rem",
                  color: "#e8e8e8",
                }}
              >
                A taste of Stealthio disruption:
              </Typography>

              <Grid container spacing={2}>
                {techs.map((tech) => (
                  <Grid item xs={12} md={6} lg={4}>
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
                        component="p"
                        sx={{ marginBottom: "2rem", color: "#e8e8e8" }}
                      >
                        {tech.title}
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          padding: "0",
                          marginBottom: "1rem",
                          color: "#e8e8e8",
                        }}
                      >
                        {tech.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <img style={{ width: "100%" }} src="/Stelthio_pattern-dark.png" alt="" />
    </>
  );
}

export default App;
