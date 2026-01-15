import React from "react";
import { MusicSection } from "./MusicSection";
import { GiraSection } from "./GiraSection";
import { NewsSection } from "./NewsSection";
import { SpotifyPlayer } from "../SpotifyPlayer";
import "./HomeContent.css";

export const HomeContent = () => {
  return (
    <>
      <SpotifyPlayer />
      <MusicSection />
      <GiraSection />
      <NewsSection />
    </>
  );
};
