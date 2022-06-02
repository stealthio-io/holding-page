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

import Collective from "./collective";
import Technology from "./technology";
import Footer from "./footer";

import "./App.css";
import Vision from "./vision";

const pages = [
  "Vision",
  // "Contact",
  "Team",
  "Technology",
];

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

      <Container
        maxWidth={false}
        sx={{
          display: { xs: "none", md: "block" },
          background: "#1e132c",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}
      >
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Typography
              sx={{
                padding: "10rem 0 3rem",
                color: "#e8e8e8",
                fontSize: "1.5rem",
                fontWeight: 200,
              }}
              component="p"
              variant="h2"
              textAlign="left"
            >
              Build deeper relationships, gain insights
              <br /> and be more effective.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <img
              style={{
                position: "relative",
                zIndex: 1,
                marginBottom: "-7rem",
                width: "80%",
                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
              src="/Stelthio_lock-up-light.png"
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: "500px",
              // backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundImage: { xs: "none", md: "url(/Stelthio_space.png)" },
            }}
          >
            <Typography
              sx={{
                padding: "10rem 0 0 7rem",
                color: "#e8e8e8",
                fontSize: "2rem",
                fontWeight: 300,
              }}
              component="p"
              variant="h4"
              textAlign="left"
            >
              Go further.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          background: "#1e132c",
          // paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}
      >
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
                fontSize: "1.5rem",
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
        strength={300}
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
              sx={{ textAlign: "left", color: "#e8e8e8", padding: "0 1rem" }}
              component="p"
            >
              STEALTHIO is designed by talent experts, for recruitment industry
              professionals and we want you, recruitment professionals to share
              in ownership of the company.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ padding: { xs: "0", md: "0 3rem" } }}>
            <Typography
              sx={{ textAlign: "left", color: "#e8e8e8", padding: "0 1rem" }}
              component="p"
            >
              STEALTHIO is far more than just another combined CRM with ATS,
              it’s so much more than simple AI automations, and reassuringly, it
              isn’t another expensive API plug-in tool to add to
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ padding: { xs: "0", md: "0 3rem" } }}>
            <Typography
              sx={{ textAlign: "left", color: "#e8e8e8", padding: "0 1rem" }}
              component="p"
            >
              STEALTHIO is here to completely transform and revolutionise the
              way recruiters use technology to improve performance and
              engagement in the new world of Web 3.0.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Vision />

      {/* <Container
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
      </Container> */}

      <Collective />
      <Technology />
      <Footer />
    </>
  );
}

export default App;
