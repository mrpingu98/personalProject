import React from "react";
import logo from "../../logo.svg";
import "../../App.css";

const TopSongsList: React.FC = () => {
  return (
    <div className="App">
        <iframe src="https://open.spotify.com/embed/track/7Btth4NK0ICZC9DjYZPxgg?utm_source=generator&theme=0" width="50%" height="152" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/track/0nya7xFhh5Or0cfsc3wVCU?utm_source=generator" width="50%" height="152" allowFullScreen={false}  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/track/0mkLZOX8LXsag3qrUWPRkF?utm_source=generator" width="50%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
};

export { TopSongsList };
