import React, {useContext, useEffect, useState} from "react";
import { StyledPhotoGroup } from "../../styles/StyledMyPhotos";
import arrow from "../../assets/icons/forward-icon.svg";
import {useDispatch, useSelector} from "react-redux";
import ErrorPhoto from "./ErrorPhoto";
import ProcessingPhoto from "./ProcessingPhoto";
import { GalleryContext } from "../../context";


const PhotoGroup = ({ card }) => {
  const [imgBefore, setImgBefore] = useState();
  const [imgAfter, setImgAfter] = useState();
  const user = useSelector((state) => state?.auth?.user.user);
  const password = useSelector((state) => state?.auth?.user.password);
  console.log(user, password)
  const imageList = useSelector((state) => state?.images.images);
  console.log(imageList)
  const imageId = "2fed3a1d-337f-4003-8483-c0bff7efc2ff"
const dispatch = useDispatch()
  console.log('card state',card.state)
// const before = useSelector((state) => state?.images.before);
//   console.log(before)
  // const after = useSelector((state) => state?.images.after);
  // console.log(after)
  // const before = `${process.env.REACT_APP_BASE_URL}/v1/images/get/before?auth=${token}&image_id=${card.imageId}`;
  // const after = `${process.env.REACT_APP_BASE_URL}/v1/images/get/after?auth=${token}&image_id=${card.imageId}`;
  // const before = `${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${card.imageId}&flag=0`;
  const after = `${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${card.imageId}&flag=1`;
  // const before = `${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${imageId}&flag=0`;
  // const after = `${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${imageId}&flag=1`;
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

  const handleShowImageAfter = () => {
    switch (card.state) {
      case 0: {
        return <ProcessingPhoto />;
      }
      case 1: {
        return <img onClick={handleInitialSlide} src={imgAfter} alt="" />;
      }
      case 2:
      default: {
        return <ErrorPhoto />;
      }
    }
  };



  const fetchImageBefore = async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${card.imageId}&flag=0`, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + btoa(`${user}:${password}`) }
    });
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImgBefore(imageObjectURL);
  };
  const fetchImageAfter = async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${card.imageId}&flag=1`, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + btoa(`${user}:${password}`) }
    });
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImgAfter(imageObjectURL);
  };
  useEffect(() => {
    fetchImageBefore()
    fetchImageAfter()
  }, [])



  // useEffect(() => {
  //
  // dispatch(getImageBefore({user, password, imageId}))
  // dispatch(getImageAfter({user, password, imageId}))
  // },[])
  return (
    <>
      <StyledPhotoGroup>
        <div className="photo">
          <div className="photo_item-before">
            <img src={imgBefore} alt="" />
          </div>
          <img src={arrow} alt="arrow-right" />
          {/*<div className="photo_item-after">{handleShowImageAfter()}</div>*/}
          <div className="photo_item-after">  <img src={imgAfter} alt="" /></div>
        </div>
      </StyledPhotoGroup>
    </>
  );
};

export default PhotoGroup;
