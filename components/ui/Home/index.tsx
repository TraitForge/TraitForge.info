"use client";

import React from "react";
import WelcomePart from "./WelcomePart";
import PlayNowPart from "./PlayNowPart";
import IntroPart from "./IntroPart";
import ArtPart from "./ArtPart";
import CommunityPart from "./CommunityPart";

const Home = () => {
  return (
    <div className="flex h-full flex-col overflow-x-hidden overflow-y-scroll w-screen">
      <WelcomePart />
      <PlayNowPart />
      <IntroPart />
      <ArtPart />
      <CommunityPart />
    </div>
  );
};

export default Home;
