import React from 'react';
// import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import LanguageIcon from "@material-ui/icons/Language";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
    This Website {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Project() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className="container border border-primary my-2 ">
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography gutterBottom variant="h3" component="h2">
            <svg
              width="1em"
              height="1em"
              color="yellow"
              viewBox="0 0 16 16"
              className="bi bi-globe m-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
              />
            </svg>
            Projects
          </Typography>

          <Grid container spacing={3}>
            {/* {cards.map((card) => ( */}
            <Grid item key={1} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.foodsafety.gov/sites/default/files/styles/og_image_style/public/2019-05/food_poisoning_2.jpg?itok=ku7Kt0mY"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="secondary"
                  >
                    Food Corner
                  </Typography>
                  <Typography>Search any Food and see its Recipe</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      window.open(
                        "https://csb-wq34d.netlify.app/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    visit
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={2} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQivCjmOL9keNkLvusBVsOMOBnp3LJ26w6qyg&usqp=CAU"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="secondary"
                  >
                    Car Purchase
                  </Typography>
                  <Typography>
                    Predicts whether you should buy a car or not according to
                    age and salary.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      window.open(
                        "https://car-prediction--app.herokuapp.com/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    Visit
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={3} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    Visit
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={4} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    Visit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <div className="text-center m-2">
          <GitHubIcon
            color="primary"
            fontSize="large"
            onClick={() =>
              window.open(
                "https://github.com/devrasmeriya",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <LinkedInIcon
            color="primary"
            fontSize="large"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/devendra-rasmeriya-903900183",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
