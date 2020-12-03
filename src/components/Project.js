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


import project1 from "../assets/images/monkey.jpeg";
import project2 from "../assets/images/monkey.jpeg";
import project3 from "../assets/images/monkey.jpeg";
import project4 from "../assets/images/monkey.jpeg";
import project5 from "../assets/images/monkey.jpeg";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        // background: "#233",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto",
    },
}));

const projects = [
    {
        name: "Jupiter",
        description: `
        AWS based Web Service Development - Event Search and Ticket Recommendation.
        Front End:
        ● Developed an interactive web page for users to search nearby events and purchase tickets (HTML, CSS, JavaScript, AJAX).
        ● Used favorite records to provide personalized business recommendation.
        Back End:
        ● Created three Java servlets with RESTful APIs to handle HTTP requests and responses.
        ● Built MySQL database on Amazon RDS to store real business data from Ticketmaster API.
        ● Designed algorithms (content-based recommendation) to implement business recommendation. 
        ● Deployed to Amazon EC2 for public access and better reliability.`,
        image: project1,
        githubLink: "https://github.com/garywangop/Jupiter",
    },
    {
        name: "OnlineShop",
        description: `
        A Spring and Hibernate based Shopping and Ordering system.
        ● Used Spring framework to build a web application for users to shop and order items online.
        ● Built a web application based on Spring MVC to support item search and listing (dependency injection, inversion of control, REST API etc.).
        ● Implemented security workflow via in-memory and JDBC authentication provided by Spring Security.
        ● Utilized Hibernate to provide better support of database operations.
        ● Developed a Spring Web Flow to support item ordering.
        `,
        image: project2,
        githubLink: "https://github.com/garywangop/onlineShop",
    },
    {
        name: "Around",
        description: `
        A Cloud and React based Social Network.
        Front End:
        ● Built a geo-based social network web application with React JS.
        ● Implemented basic token based registration/login/logout flow with React Router v4 and server-side user authentication with JWT.
        ● Implemented features such as "Create Post", "Nearby Posts As Gallery" and "Nearby Posts In Map" with Ant Design, GeoLocation API and Google Map API.
        Back End:
        ● Launched a scalable web service in Go to handle posts and deployed to Google Cloud (Google Kubernetes Engine) ● Used ElasticSearch (deployed to GCE) to provide geo-location based search functions such that users can search nearby posts within a distance (e.g. 200km).
        ● Used Google Vision API to provide a face detection model and integrate with the Go service.
        `,
        image: project3,
        githubLink: "https://github.com/garywangop/Around",
    },
    {
        name: "NBA-Visual",
        description: `
        React JS based NBA Player Strength Visualization
        ● Implemented a dashboard using React, D3 and Ant Design to visualize individual player’s shot data, including a shot chart and user profile view.
        ● Fetched player data from an API provided by stats.nba.com and returned promises to resolve user’s request.
        ● Created 4 extra filters and 2 shot themes(hexbin and scatter) to provide more customized visualization on the shot chart.
        ● Optimized the user experience by adding an autocomplete player search bar providing a list of players(image and name) in the suggestion list.
        `,
        image: project4,
        githubLink: "https://github.com/garywangop/nba-web",
    },
    {
        name: "Matrix",
        description: `
        LBS based Android App for smart driving.
        ● Developed an Android App for users to exchange the nearby real-time events with Google Firebase Platform.
        ● Integrated a Google Map View within MapFragment to display the events such as speeding, parking, traffic lights and etc.
        ● Used the Google Firebase Realtime Database to save the client-post event detail (comments /images/ descriptions/ geos) for better data synchronization .
        ● Implemented the event-trigger Firebase Message System with Google Cloud Functions to broadcast notifications to users.
        ● Developed the UI with standard widgets such as RecyclerView, ViewPager, DrawerLayout, Dialog and tested several core flows with Espresso.
        ● Enhanced the user data security by using MD5 encryption and Google Firebase Authentication.
        ● Built an in-app simple voice control by using Google Speech Recognition to support hand free event report.
        `,
        image: project5,
        githubLink: "https://github.com/garywangop/Matrix",
    },
];

const Project = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                {/* Projects */}
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {/*{project.description}*/}
                                        {project.description.split("\n").map((i, key) => {
                                            return <p key={key}>{i}</p>;
                                        })}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={project.githubLink}>
                                    Source Code
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Project;
