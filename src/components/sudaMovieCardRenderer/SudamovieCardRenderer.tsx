import React from 'react';
import { Grid } from '@mui/material';
import SudamovieCard from '../sudamovieCard/SudamovieCard';
import SudaMovieAppBar from '../sudaMovieAppBar/SudaMovieAppBar';

  const SudamovieCardRenderer: React.FC<{ movies }> = ({ movies }) => {
    return (
      <>
      <SudaMovieAppBar/>
      <Grid container spacing={2} rowSpacing={1}>
        {movies.map((movie, index) => (

          <SudamovieCard key={index} movie={movie} />


        ))}
      </Grid></>
    );
  };
  export default SudamovieCardRenderer;


