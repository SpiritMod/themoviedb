// Core
import React from 'react';

// Components
import { MovieLayout } from "../../layouts";
import {Movie} from "../../bus/movie";

export const MoviePage = () => {
  return (
    <MovieLayout>
      <Movie />
    </MovieLayout>
  );
};
