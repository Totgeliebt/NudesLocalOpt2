import styled from "styled-components";

export const StyledCreateNude = styled.div`
  width: 100%;
  background: #fffae9;
  .content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 46px;
    @media(max-width: 430px){
      padding: 26px 5px 5px;
    }
  }
 
  .block_container {
    display: flex;
    @media(max-width: 430px){
      flex-direction: column-reverse;
    }
  }
  .recommendations,
  .upload {
    flex: 1;
  }
 
  .block_container h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #ff5c00;
    margin-bottom: 21px;
    margin-top: 20px;
    @media(max-width: 430px){
      margin-top: 40px;
    }
  }
  
  .upload {
    max-width: 600px;
    height: 719px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    align-items: center;
    padding-bottom: 50px;
    @media(max-width: 430px){
      padding-bottom: 30px;
    }
  }
  .image-item {
    display: flex;
    margin: 10px 0;
    width: 100px;
    height: 100px;
  }

  .container {
    width: 95%;
    height: 550px;
    margin: 20px 0 49px;
    @media(max-width: 430px){
      height: 419px;
      margin-bottom: 30px;
    }
  }

  .container {
    position: relative;
  }
  .dropzone {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 2px dashed #ff5c00;
    border-radius: 5px;
  }
  .dropzone:hover {
    background: rgba(255, 92, 0, 0.1);
  }

  .inner_border {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .inner_border p.drag {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #dadada;
    text-align: center;
    margin-bottom: 120px;
    @media(max-width: 430px){
      margin-bottom: 20px;
    }
  }
  .inner_border img.drag {
    margin-bottom: 15px;
  }
  .inner_border p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    color: #333333;
    text-align: center;
  }
  .format_icon {
    margin: -15px 6px 20px 0;
  }
  
  .img_after {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  .remove_image {
    background: rgba(34, 34, 34, 0.8);
    top: 15px;
    right: 15px;
    font-size: 35px;
    line-height: 45px;
    cursor: pointer;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    z-index: 10;
    @media(max-width: 430px){
      width: 35px;
      height: 35px;
      line-height: 33px;
    }
  }
`;

export const StyledSection = styled.section``;
