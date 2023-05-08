import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 550, position: 'fixed', bottom: 0, zIndex: 100 }}>
            <BottomNavigation
                sx={{ backgroundColor: "#2d313a", }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction sx={{ color: "white" }} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction sx={{ color: "white" }} label="Search" icon={<SearchIcon />} />
                <BottomNavigationAction sx={{ color: "white" }} label="TV" icon={<TvIcon />} />
                <BottomNavigationAction sx={{ color: "white" }} label="Movie" icon={<MovieIcon />} />
            </BottomNavigation>
        </Box>
    );
}