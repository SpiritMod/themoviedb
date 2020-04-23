// Core
import React from 'react';

// Components
import { MainLayout } from "../../layouts";
import { PopularFilms } from '../../bus/popularFilms/';

export const PopularFilmsPage = () => {
  return (
    <MainLayout>
      <PopularFilms />
    </MainLayout>
  );
};
