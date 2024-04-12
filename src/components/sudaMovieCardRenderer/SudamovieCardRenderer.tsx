import React from 'react';
import { Grid } from '@mui/material';
import SudamovieCard from '../sudamovieCard/SudamovieCard';

  const SudamovieCardRenderer: React.FC<{ movies }> = ({ movies }) => {
    return (
      <Grid container spacing={2} rowSpacing={1}>
        {movies.map((movie, index) => (
          <Grid item>
            <SudamovieCard key={index} movie={movie} />
          </Grid>
          
        ))}
      </Grid>
    );
  };
  export default SudamovieCardRenderer;


