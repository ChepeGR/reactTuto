import React from 'react';
import Sudamovie from '../sudamovieCard/SudamovieCard';
import { Grid } from '@mui/material';
/*
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
*/
  const SudamovieCardRenderer: React.FC<{ movies }> = ({ movies }) => {
    return (
      <Grid container spacing={2} rowSpacing={1}>
        {movies.map((movie, index) => (
          <Grid item>
            <Sudamovie key={index} movie={movie} />
          </Grid>
          
        ))}
      </Grid>
    );
  };
  export default SudamovieCardRenderer;


