import React from "react";

import { RailBoard } from '../views';
import { MainHeader, MainFooter } from 'rail_landing/parts';

const BoardDefaultLayout = () => (
  <div className="container">
    <MainHeader />
    <RailBoard />
    <MainFooter />
  </div>
);

export default BoardDefaultLayout;