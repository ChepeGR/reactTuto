//autor, año 
import {Card , CardMedia, CardContent, Typography, CardActions, Button, Grid, AppBar, Toolbar, IconButton, Link    } from "@mui/material"
import { Hd as HdIcon } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import SudaMovieFooter from "../sudamovieFooter/SudaMovieFooter";


interface Movie {
    movieName?: string;
    director?: string;
    releaseYear?: number;
    description?: string;
    trailer?: string;
    originalLanguage?: string;
    subtitles?: string[];
    videoQuality?: string;
    imagen?: any;
}
  
  interface MovieCardProps {
      movie: Movie;
    }

    const SudamovieCard: React.FC<MovieCardProps> = ({ movie }) =>  {
    

        const [hidden, setHidden] = useState(true);

        return (
        <div>
            <div>
                <AppBar position="fixed" color="transparent">
                    <Toolbar variant="regular">
                        <Typography variant="h3" color="black"> SudaMovie </Typography>
                        <IconButton edge="end" aria-label="menu" sx={{ mr: 20 }}>
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Card sx={{ width: 345}} >
                    <CardActions>
                        <CardMedia 
                        onMouseEnter={() => setHidden(false)}
                        onMouseLeave={() => setHidden(true)}
                        component="img"
                        image={movie.imagen}>
                            
                        </CardMedia>
                    </CardActions>
                    {hidden? null : <><CardContent>
                            <Typography variant="h3"> {movie.movieName}</Typography>
                            <Typography variant="h5"> {movie.director} </Typography>
                            <Typography variant="body1"> {movie.originalLanguage} </Typography>
                            <Typography variant="body1"> {movie.subtitles} </Typography>
                            <Typography variant="h5" color="grey">{movie.releaseYear}</Typography>
                        </CardContent><CardActions>
                                <Button href={movie.trailer} size="small">
                                    Watch Trailer
                                </Button>
                                <SudaMovieFooter text="Hola" icon={() => <HdIcon />} />
                            </CardActions></>}
                        
                </Card>
             </div>
           
        </div>
     
      );
    }

export default SudamovieCard;