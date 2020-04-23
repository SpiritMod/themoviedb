// Core
import React from 'react';

import { MainLayout } from "../../layouts";
import { PopularFilmsBlock } from "../../bus/popularFilms/PopularFilmsBlock";

export const Home = () => {
  return (
    <MainLayout>
      <PopularFilmsBlock/>
    </MainLayout>
  );
};
