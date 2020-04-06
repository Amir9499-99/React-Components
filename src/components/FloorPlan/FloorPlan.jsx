import React from "react";
import Kitchen from "../Kitchen/Kitchen";
import LivingRoom from "../LivingRoom/LivingRoom";
import Bedroom1 from "../Bedroom/Bedroom1";
import Bedroom2 from "../Bedroom/Bedroom2";
import Bedroom3 from "../Bedroom/Bedroom3";
import Oven from "../Oven/Oven";
import FullBath from "../Bath/FullBath";
import HalfBath from "../Bath/HalfBath";
const FloorPlan = props => (
  <div className="FloorPlan">
    <Bedroom1 />
    <Kitchen />
    <FullBath />
    <Bedroom2 />
    <LivingRoom />
    <HalfBath />
    <Bedroom3 />
  </div>
);

export default FloorPlan;
