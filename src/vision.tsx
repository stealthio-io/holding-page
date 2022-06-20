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

export default () => {
  return (
    <Container
      id="vision"
      maxWidth={false}
      sx={{
        padding: "0",
        background: "#1e132c",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          md={6}
          sx={{
            padding: "0 !important",
            margin: 0,
            display: { xs: "none", md: "block" },
          }}
        >
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
          sx={{ display: "flex", alignItems: "center", padding: 0 }}
        >
          <Box
            sx={{
              textAlign: "left",
              alignItems: "left",
              display: "flex",
              flexDirection: "column",
              padding: "3rem",
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                marginBottom: "1rem",
                color: "#e8e8e8",
                textAlign: "left",
                fontWeight: 300,
              }}
            >
              Vision_
            </Typography>

            <Typography
              component="p"
              sx={{
                padding: "0 6rem 0 0",
                marginBottom: "3rem",
                color: "#e8e8e8",
              }}
            >
              To positively impact lives and careers, with the world’s first web
              3.0 native, end-to-end, all-in- one, fully immersive talent
              management ecosystem.
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{ marginBottom: "1rem", color: "#e8e8e8", fontWeight: 300 }}
            >
              Mission_
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
  );
};
