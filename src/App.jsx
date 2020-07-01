import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import {
  loadRestaurantRegions,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantRegions());
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
    </>
  );
}
