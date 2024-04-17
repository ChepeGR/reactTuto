import {Card , CardMedia, CardContent, Typography, CardActions, Button, Grid} from "@mui/material"
import { Hd as HdIcon } from '@mui/icons-material';
import React, { useState } from "react";
import SudaMovieFooter from "../sudamovieFooter/SudaMovieFooter";
import {useFloating, useHover, useInteractions} from '@floating-ui/react';
import SudaMovieAppBar from "../sudaMovieAppBar/SudaMovieAppBar";


interface Movie {
    movieName: string;
    director?: string;
    releaseYear?: number;
    description?: string;
    trailer?: string;
    originalLanguage?: string;
    subtitles?: string[];
    videoQuality?: string;
    imagen?: any;
}
  
interface SudaMovieCardProps {
      movie: Movie;
}

const SudamovieCard: React.FC<SudaMovieCardProps> = ({ movie }) =>  {
    const [isOpen, setIsOpen] = useState(false);

    const {refs, floatingStyles, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
      });

    const hover = useHover(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
      ]);

    return (
        <Grid item sx={{width: '50%'}}>
            <Card ref={refs.setReference} {...getReferenceProps()} tabIndex={1}>
                    <CardMedia sx={{height: '250px'}} component="img" image={movie.imagen}></CardMedia>
                            {isOpen && (
                                <>
                            <CardContent ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} sx={{width : '30%', backgroundColor: 'beige'}}>
                                <Typography variant="subtitle2"> {movie.movieName}</Typography>
                                <Typography variant="body2"> {movie.director} </Typography>
                                <Typography variant="body2"> {movie.originalLanguage} </Typography>
                                <Typography variant="body2" paragraph> {movie.description} </Typography>
                                <Typography variant="subtitle2" color="grey">{movie.releaseYear}</Typography>
                                <Button href={movie.trailer} size="small">Watch Trailer </Button>
                                <SudaMovieFooter text={undefined} icon={() => <HdIcon />} subtitles={movie.subtitles}/>
                            </CardContent>
                    </>)}
            </Card>
        </Grid>
    );
}

export default SudamovieCard;


