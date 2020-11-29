import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    contactContainer: {
        // background: "#233",
        height: "100vh",
    },
    heading: {
        color: "tomato",
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: "1rem",
    },
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    input: {
        color: "#fff",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tan",
    },
    field: {
        margin: "1rem 0rem",
    },
    bottomNavContainer: {
        background: "transparent",
        // background-color: "transparent",
    },
    root: {
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem",
            },
        },
    },
}));



const Contact = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.contactContainer}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" className={classes.heading}>
                        Contact me
                    </Typography>
                    <BottomNavigation className={classes.bottomNavContainer}>
                        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} href="https://www.linkedin.com/in/ge-wang-4a2b41131/"/>
                    </BottomNavigation>
                    <Typography variant="h5" className={classes.heading}>
                        Or know me more
                    </Typography>
                    <BottomNavigation className={classes.bottomNavContainer}>
                        <BottomNavigationAction icon={<GitHub />} className={classes.root} href="https://github.com/garywangop"/>
                    </BottomNavigation>
                </Box>
            </Grid>
        </Box>

    );
};
export default Contact;
