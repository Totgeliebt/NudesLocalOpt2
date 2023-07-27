import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {balance, showPopup, userBalance} from "../../thunkApi/userSlice";
import {useDropzone} from "react-dropzone";
import {addImage, addNewImage, checkImageState, updateImage} from "../../thunkApi/imagesSlice";

const CreateNudeContainer = ({children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageList = useSelector((state) => state?.images.images);
  console.log(imageList)
  const error =  useSelector((state) => state?.images.error);
  console.log('error',error)
  const [files, setFiles] = useState([]);

  const removeImg = () => {
    setFiles([]);
  };

  const user = useSelector((state) => state?.auth?.user.user);
  const password = useSelector((state) => state?.auth?.user.password);
console.log(user, password)
  const balance = useSelector((state) => state?.user?.user.balance);

  const handlePopup = (isShow, type) => {
    dispatch(
      showPopup({
        isShow,
        type: type ? type : "",
      })
    );
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpg": [".jpeg", ".jpg", ".png"],
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const image = files[0];

  // const getImageState = async (imageId) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(async () => {
  //       try {
  //         const data = await dispatch(checkImageState({ imageId, user, password }));
  //         console.log('checkImageStatePromise',data)
  //         resolve(data);
  //       } catch (error) {
  //         resolve({ payload: { state: 2 } });
  //       }
  //     }, 15000);
  //   });
  // };

  const handleFileSubmit = async (event) => {
    // try {
      event.preventDefault();
      // let stateImage = 0;
      // if (balance === 0) {
      //   navigate("../deposit");
      // //   // return;
      // } else {
      // const data = await dispatch(addNewImage({ user, password, image }));
      dispatch(addNewImage({ user, password, image }));
      dispatch(userBalance({user, password}))
    //
    // const imageData = {
    //   "data": "2fed3a1d-337f-4003-8483-c0bff7efc2ff",
    //   "message": "Ok",
    //   "code": 0
    // }


      // console.log('data',data?.payload.data)
      // console.log('data',data)
      // const { imageId } = data?.data;
      // console.log('imageId',imageId)
      // dispatch(addImage({"2fed3a1d-337f-4003-8483-c0bff7efc2ff"}));
      navigate("../photos");
      // while (!stateImage) {
      //   const data = await getImageState(imageId);
      //   stateImage = data.payload.state;
      // }
      // console.log(stateImage)
      // if (stateImage === 1) {
      //   await dispatch(userBalance({user, password}));
      // }
      // dispatch(updateImage({ imageId, stateCard: stateImage }));
    // } catch (error) {
    //   console.log(error);
    // }
    //   }
  };

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          className="img_after"
          alt=""
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <div className="remove_image" onClick={removeImg}>
          ×
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  const props = {
    handleFileSubmit,getInputProps,getRootProps,handlePopup, files,thumbs
  };

  return children(props);
};

export default CreateNudeContainer;
