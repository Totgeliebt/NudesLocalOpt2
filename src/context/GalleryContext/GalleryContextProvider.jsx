import React, { useState } from "react";
import { GalleryContext } from "./GalleryContext";
import Gallery from "../../components/Gallery";
import { CSSTransition } from "react-transition-group";
import "./animation.css";

export const GalleryProvider = ({ children }) => {
  const [galleryOpened, setGalleryOpened] = useState(false);
  const [galleryContent, setGalleryContent] = useState(null);
  const timeout = 400;

  const openGallery = (galleryConfig) => {
    setGalleryContent(galleryConfig);
    setGalleryOpened(true);
  };

  const closeGallery = () => {
    setGalleryOpened(false);
    const closed_delay = setTimeout(() => {
      setGalleryContent(null);
      clearTimeout(closed_delay);
    }, timeout);
  };

  const valueModalProvider = {
    openGallery,
    closeGallery,
    galleryOpened,
    galleryContent,
  };

  return (
    <GalleryContext.Provider value={valueModalProvider}>
      <CSSTransition
        in={galleryOpened}
        classNames="modal"
        timeout={timeout}
        unmountOnExit
      >
        <Gallery {...valueModalProvider} {...galleryContent} />
      </CSSTransition>

      {children}
    </GalleryContext.Provider>
  );
};
