import React from 'react'
import { Hd as HdIcon } from '@mui/icons-material';
import {Button, Grid, Typography} from "@mui/material";

interface SudaMovieCompProps {
    text?: string;
    icon?: any;
    subtitles?:string[];
    
}
const SudaMovieFooter = ({ text, icon: Icon, subtitles}) => {
    if(text && Icon){
        return(
        <Grid container flexDirection={'row'} columnSpacing={2} sx={{display: 'flex'}}>
            <Icon size="small"></Icon>
            <Typography>{text}</Typography>
            <Typography variant="subtitle2" align='center'></Typography>
        </Grid>
     )
    }
    if(text && !Icon){
        return(
            <Grid container flexDirection={'column'} columnSpacing={2} sx={{display: 'flex'}}>
                <Typography>Falta el icono</Typography>
                <Typography variant="subtitle2" align='center'></Typography>
            </Grid>
        )

    }
    if(!text && Icon){
        return(    
            <Grid container flexDirection={'row'} columnSpacing={1} sx={{display: 'flex'}}>
                <Icon size="small"></Icon>
                <Typography variant="subtitle2" align='center'></Typography>
            </Grid>
        )
    
    }
    else{
        return(<Typography>ALGO ANDA MAL</Typography>)
    }
    
}
export default SudaMovieFooter;