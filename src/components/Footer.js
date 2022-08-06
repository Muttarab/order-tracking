import React from "react";
import { Box, IconButton, Typography, makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";

const useStyle = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "rgb(128, 128, 128)",
        color: "#fff",
        padding: theme.spacing(2),
        position: "relative",
    },
    iconButton: {
        position: "absolute",
        right: 5,
        top: -25,
        backgroundColor: "rgb(128, 128, 128)",
        color: '#fff',
    },
}));

export default function Footer() {
    const classes = useStyle();
    let date = new Date();
    return (
        <Box className={classes.footerContainer} id='Footer'>
            <IconButton
                className={classes.iconButton}
                to='Header'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                component={Link}>
                <ArrowUpwardIcon />
            </IconButton>
            <Typography variant='body1' component='h4' align='center' color='inherit'>
                Designed and Developed by <b>Next Mamas</b> , All Rights Reserved © {date.getFullYear()}
            </Typography>
        </Box>
    );
}
