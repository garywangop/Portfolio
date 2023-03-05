import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../styles/Experience.css";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        // background: "#233",
        // background: "white",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            },
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "#fff",
        background: "tomato",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    },
    heading: {
        color: "tomato",
        padding: "5rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: "tomato",
    },
    subtitle1: {
        color: "tan",
        // color: "black",
    },
}));

const Experience = () => {
    const classes = useStyles();
    return (
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    Present
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Software engineer
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Amazon
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <ul className="form-style">
                            <li>Developed a self service merchandising portal for vendors to order advertising campaigns across 12 marketplaces.</li>
                            <li>Developed an internal admin portal for marketing managers to manage product category and placement metadata.</li>
                            <li>Used ReactJS as frontend framework, Spring Boot as backend framework, and DynamoDB as database for both
                                vendor portal and admin portal.</li>
                            <li>Migrated legacy systems from internal environment to native AWS.</li>
                            <li>Collaborated with other teams to enable language of preference feature in Saudi Arabia.</li>
                        </ul>
                    </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2021
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Software engineer
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Golden Source Capital Inc
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <ul className="form-style">
                            <li>Developed a cryptocurrency trading platform to support customers trading cryptocurrencies and anticipating a
                                variety of promotional activities.</li>
                            <li>Designed and implemented full stack web applications like cloud mining, exchange mining, and notification services, which included using Vue.js as frontend framework, and Spring Boot as backend framework.</li>
                            <li>Wrote unit test with Junit and collaborated with other team members to manual test web applications.</li>
                        </ul>
                    </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Full Stack Developer
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Nonprofit Tech Support Group
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <ul className="form-style">
                            <li>Built a property management web application in order to help approximately 200 residents to solve maintenance
                                problems, package safety issues, community room schedule conflicts, condo fee payment, and board member com-
                                munication.</li>
                            <li>Performed full stack software development for core web applications, which included using React JS as frontend
                                framework, and Sprint Boot as backend framework.</li>
                            <li>Implemented and maintained resident, message, and reservation services in Java and Spring container environment.</li>
                            <li>Utilized MySQL to implement complex data relationships.</li>
                        </ul>
                    </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2019
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Test Engineer
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        ZTE USA
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <ul className="form-style">
                            <li>Performed handset software and hardware tests based on Verizon and Sprint standards in order to get certifica-
                                tion before release to the market.</li>
                            <li>Executed both application level(I-RAT) and radio level(OTA) test cases on Android devices according to carrier’s
                                regulations and requirements.</li>
                            <li>Identified bugs, collected and analyzed logs by using Qualcomm products(QXDM and QPST) with onsite and off-
                                shore R&D and manufacturing team.</li>
                            <li>Completed more than 20 handset certification tests and launched to the market.</li>
                        </ul>
                    </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2016
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        UI Developer
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Marlabs Inc
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <ul className="form-style">
                            <li>Designed and implemented front-end web page for customers to register and login.</li>
                            <li>Consumed JSON and XML from RESTful web services by using JavaScript and AngularJS.</li>
                            <li>Developed the front-end web page by using HTML5, CSS3, and JavaScript, taking advantage of the frameworks AngularJS.</li>
                            <li>Estimated time to develop for all approved prototypes and the implementation of those prototypes using jQuery and CSS as well as showing project leads and receiving and updating implementation due to feedbacks.</li>
                        </ul>
                    </Typography>

                </Box>
            </Box>
        </Box>
    );
};

export default Experience;
