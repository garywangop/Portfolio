import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#222",
        margin: 0,
        padding: 0,
    },

    title: {
        color: "tan",
    },
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    avatar: {
        display: "block",
        //margin: "0.5rem auto",
        margin: "0",
        padding: "0",
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    listItem: {
        color: "tan",
        // float: "left",
    },
}));

const menuItems = [
    { listIcon: <Home />, listText: "Home", listPath: "/" },
    { listIcon: <AssignmentInd />, listText: "Experience", listPath: "/experience" },
    { listIcon: <Apps />, listText: "Project", listPath: "/project" },
    { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Topbar = () => {
    const classes = useStyles();

    const sideList = (i) => (
        <div>
            <ListItem
                button
                key={i}
                className={classes.listItem}
                component={Link}
                to={menuItems[i].listPath}
            >
                <ListItemIcon className={classes.listItem}>
                    {menuItems[i].listIcon}
                </ListItemIcon>
                <ListItemText primary={menuItems[i].listText} />
            </ListItem>
        </div>
    );

    return (
        <React.Fragment>
            <Box component="nav">
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar>
                        {sideList(0)}
                        {sideList(1)}
                        {sideList(2)}
                        {sideList(3)}
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
};

export default Topbar;
