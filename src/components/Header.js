import React, { useState } from "react";
import { Box } from '@material-ui/core';
import Drawer from './Drawer'
import Navbar from './Navbar'

export default function Header() {
    const [initialState, setInitialState] = useState(false);
    const handleDrawerToogler = () => {
        setInitialState(!initialState);
    };
    const navlinks = [
        { label: "Track Order", Id: "Track" },
    ];

    return (
        <Box id='Header'>
            <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
            <Drawer
                initialState={initialState}
                navlinks={navlinks}
                handleDrawerToogler={handleDrawerToogler}
            />
        </Box>
    )
}