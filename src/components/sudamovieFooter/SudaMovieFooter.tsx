import React from 'react'
import { Hd as HdIcon } from '@mui/icons-material';
import {Button, Grid, Typography} from "@mui/material";

interface SudaMovieCompProps {
    text?: string;
    icon?: any;
    
}
const SudaMovieFooter = ({ text, icon: Icon, movie }) => {
    if(text && Icon){
        return(
        <Grid container>
            <Icon></Icon>
            <Typography>{text}</Typography>
            <Typography variant="subtitle2"> {movie.subtitles} </Typography>
        </Grid>
     )
    }
    if(text && !Icon){
        return(
            <Grid>
                <Typography>Falta el icono</Typography>
                <Typography variant="subtitle2"> {movie.subtitles} </Typography>
            </Grid>
        )

    }
    if(!text && Icon){
        return(    
            <Grid>
                <Icon></Icon>
                <Typography variant="subtitle2"> {movie.subtitles} </Typography>
            </Grid>
        )
    
    }
    else{
        return(<Typography>ALGO ANDA MAL</Typography>)
    }
    
}
export default SudaMovieFooter;