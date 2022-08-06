import React from "react";
import { makeStyles, Typography, AppBar, Toolbar, Button, Box, Hidden, IconButton } from '@material-ui/core';
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

const useStyle = makeStyles(() => ({
    navbar: {
        backgroundColor: '#FFB6C1',
        color: '#fff'
    },
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
    },
    navlinks: {
        color: '#fff'
    }
}));

export default function Navbar({ handleDrawerToogler }) {
    const classes = useStyle();
    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.toolbar} style={{ backgroundColor: "#FFFFFF" }}>
                <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                    <img src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/NM_TM_Long_400_by_100_fd982fb5-0269-436f-a5fc-d62004434fad_350x.png?v=1659298782" alt='NextMamas' height={50} width={200} />
                </Typography>
                <Box component={Hidden}>
                    <Box>
                        <a href="https://www.nextmamas.com/">
                        <Button style={{color:"#1654ce"}}>
                            Back to Website
                        </Button>
                        </a>
                    </Box>
                </Box>
                <Box component={Hidden} smUp>
                    <IconButton onClick={handleDrawerToogler} color="inherit">
                        <MenuOpenRoundedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}