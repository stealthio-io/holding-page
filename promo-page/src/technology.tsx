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

const techs = [
  {
    title: "Web 3.0",
    description:
      "The first future-proof recruitment software ecosystem built on the blockchain",
  },
  {
    title: "One version of the truth",
    description:
      "The first all-in-one, end-to-end recruitment technology with a single version of the truth.",
  },
  {
    title: "Blockchain tokenomics",
    description:
      "Innovative pricing using blockchain tokens to PAYG only for the functions that you use.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Powerful AI automations enhance current workflows and pro-actively develop unexploited data-driven revenue-streams.",
  },
  {
    title: "Immersive candidate engagement",
    description:
      "Candidate engagement like never before, through automations and immersive experiences.",
  },
  {
    title: "Metaverse ready",
    description:
      "Built-in Metaverse interoperability, enabling immersive engagement in the new world of remote working.",
  },
];

export default () => {
  return (
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
              variant="h6"
              component="p"
              sx={{ marginBottom: "1rem", color: "#e8e8e8", fontWeight: 300 }}
            >
              Technology_
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
                      variant="h6"
                      component="p"
                      sx={{
                        marginBottom: "2rem",
                        color: "#e8e8e8",
                        fontWeight: 300,
                      }}
                    >
                      {tech.title}_
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
  );
};
