import React from "react";
import { MusicSection } from "./MusicSection";
import { GiraSection } from "./GiraSection";
import { NewsSection } from "./NewsSection";
import "./HomeContent.css";

export const HomeContent = () => {
  return (
    <>
      <MusicSection />
      <GiraSection />
      <NewsSection />
    </>
  );
};
