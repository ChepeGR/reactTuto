import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import React from "react"

interface SudaMovieCardProps {
  
}

const SudaMovieAppBar: React.FC<SudaMovieCardProps> = ({})=>{
    return(
        <div>
            <AppBar position="fixed" color="secondary">
                    <Toolbar variant="regular">
                        <Typography variant="h3" color="black"> SudaMovie </Typography>
                        <IconButton edge="end" aria-label="menu" sx={{ mr: 20 }}>
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
            </AppBar>
        </div>

    )
}
export default SudaMovieAppBar;