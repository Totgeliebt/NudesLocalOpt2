import React, { useContext } from "react";
import { StyledPhotoGroup } from "../../styles/StyledMyPhotos";
import arrow from "../../assets/icons/forward-icon.svg";
import { useSelector } from "react-redux";
import ErrorPhoto from "./ErrorPhoto";
import ProcessingPhoto from "./ProcessingPhoto";
import { GalleryContext } from "../../context";

const PhotoGroup = ({ card }) => {
  const token = useSelector((state) => state.user.user?.authToken);
  const imageList = useSelector((state) => state.images.images);
  // const before = `${process.env.REACT_APP_BASE_URL}/v1/images/get/before?auth=${token}&image_id=${card.imageId}`;
  // const after = `${process.env.REACT_APP_BASE_URL}/v1/images/get/after?auth=${token}&image_id=${card.imageId}`;
  const before = `${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${card.imageId}&flag=0`;
  const after = `${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${card.imageId}&flag=1`;
  const { openGallery } = useContext(GalleryContext);

  const handleInitialSlide = () => {
    const currentList = [...imageList]
      .reverse()
      .map(
        (el) =>
          // `${process.env.REACT_APP_BASE_URL}/v1/images/get/after?auth=${token}&image_id=${el.imageId}`
          `${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${card.imageId}&flag=1`
      );
    let indexOfPhoto = [...imageList]
      .reverse()
      .findIndex((el) => el.imageId === card.imageId);
    openGallery({ list: currentList, index: indexOfPhoto });
  };

  const handleShowImageBefore = () => {
    switch (card.state) {
      case 0: {
        return <ProcessingPhoto />;
      }
      case 1: {
        return <img onClick={handleInitialSlide} src={after} alt="" />;
      }
      case 2:
      default: {
        return <ErrorPhoto />;
      }
    }
  };

  return (
    <>
      <StyledPhotoGroup>
        <div className="photo">
          <div className="photo_item-before">
            <img src={before} alt="" />
          </div>
          <img src={arrow} alt="arrow-right" />
          <div className="photo_item-after">{handleShowImageBefore()}</div>
        </div>
      </StyledPhotoGroup>
    </>
  );
};

export default PhotoGroup;
