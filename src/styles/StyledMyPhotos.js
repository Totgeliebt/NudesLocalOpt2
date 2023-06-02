import styled from "styled-components";

export const StyledMyPhotos = styled.div`
  width: 100%;
  background: #fffae9;
  .content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 50px;
    @media(max-width: 430px){
      max-width: 430px;
      padding: 30px 10px 0;
    }
  }
  .photo_group {
    display: flex;
    flex-wrap: wrap;
  }
  .photos_block-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 80px;
    @media(max-width: 430px){
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
    }
  }
`;

export const StyledPhotoGroup = styled.div`
  .photo {
    width: 560px;
    height: 350px;
    background: rgba(255, 92, 0, 0.1);
    border: 2px solid #ff5c00;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 40px 50px 0;
    @media(max-width: 430px){
      width: 350px;
      height: 210px;
    }
  }
  .photo_item-before,
  .photo_item-after {
    width: 215px;
    height: 290px;
    background: #ffffff;
    border-radius: 15px;
    @media(max-width: 430px){
      width: 100px;
      height: 180px;
    }
  }

  .photo_item-before img,
  .photo_item-after img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
export const StyledNoPhotos = styled.div`
  width: 100%;
  background: #fffae9;
  height: 100%;
  @media(max-width: 430px){
    padding: 10px;
  }
  .content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 50px;
    @media(max-width: 430px){
      width: 100%;
      height: 410px;
      padding: 30px;
    }
  }
  .no_photos {
    height: 700px;
    background: rgba(255, 92, 0, 0.05);
    border: 2px solid rgba(255, 92, 0, 0.2);
    border-radius: 25px;
    text-align: center;
    padding-top: 150px;
    @media(max-width: 430px){
      width: 100%;
      height: 300px;
      padding-top: 20px;
    }
  }
  .no_photos > img{
    @media(max-width: 430px){
      width: 80px;
      height: 80px;
    }
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 50px;
    line-height: 70px;
    color: #ff9942;
    margin-top: 24px;
    @media(max-width: 430px){
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }
  }
  a{
    color:#FF5C00;
    text-decoration: underline;
  }
`;

export const StyledProcessingPhoto = styled.div`
  width: 100%;
  height: 100%;
  background: #fffae9;
  border: 2px solid #ff5c00;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 430px){
    width: 100px;
    height: 180px;
  }
  .lottie_wrapper{
    width: 160px;
    height: 160px;
    @media(max-width: 430px){
      width: 60px;
      height: 60px;
    }
  }

  p {
    margin-top: 30px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #333333;
    @media(max-width: 430px){
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      margin-top: 20px;
    }
  }
`;
export const StyledErrorPhoto = styled.div`
  background: #fffae9;
  width: 215px;
  height: 290px;
  border: 2px solid #ff5c00;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 430px){
    width: 100px;
    height: 180px;
  }

  #container {
    width: 100px;
    height: 100px;
    @media(max-width: 430px){
      width: 50px;
      height: 50px;
    }
  }
  p {
    margin-top: 30px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #333333;
    @media(max-width: 430px){
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      margin-top: 20px;
    }
  }
`;


