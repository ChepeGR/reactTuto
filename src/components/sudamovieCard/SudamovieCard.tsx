//autor, año 
import {Card , CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material"
import { Hd as HdIcon } from '@mui/icons-material';
import React, { useState } from "react";
import SudaMovieFooter from "../sudamovieFooter/SudaMovieFooter";
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
    

        const [hidden, setHidden] = useState(true);

        return (
        <div>
            <div>
                <SudaMovieAppBar movie={undefined}></SudaMovieAppBar>
                <Card sx={{ width: 345}} onMouseEnter={() => setHidden(false)}
                        onMouseLeave={() => setHidden(true)}
                        tabIndex={1}
                        onFocus={() => console.log("Entre a la card con focvus de teclado")}>
                    <CardActions>
                        <CardMedia 
                        
                        component="img"
                        image={movie.imagen}>
                            
                        </CardMedia>
                    </CardActions>
                    {hidden? null : <><CardContent 
                   >
                            <Typography variant="h3"> {movie.movieName}</Typography>
                            <Typography variant="h5"> {movie.director} </Typography>
                            <Typography variant="body1"> {movie.originalLanguage} </Typography>
                            <Typography variant="body1"> {movie.description} </Typography>
                            <Typography variant="h5" color="grey">{movie.releaseYear}</Typography>
                        </CardContent><CardActions>
                                <Button href={movie.trailer} size="small">
                                    Watch Trailer
                                </Button>
                                <SudaMovieFooter text={undefined} icon={() => <HdIcon />} movie={movie}  />
                            </CardActions></>}
                        
                </Card>
             </div>
           
        </div>
     
      );
}

export default SudamovieCard;